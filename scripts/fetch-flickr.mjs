#!/usr/bin/env node
/**
 * Fetches public photos from Flickr and writes public/gallery.json.
 *
 * Env vars:
 *   FLICKR_NSID     Flickr user NSID (default: 204533819@N02 = tanukifilm)
 *   FLICKR_API_KEY  Optional. When set, fetches the full archive via the
 *                   Flickr REST API. Without it, falls back to the public
 *                   JSON feed which is capped at the 20 latest photos.
 *
 * The fetch runs at build time only — the deployed site is fully static
 * and Flickr's CDN only serves image bytes when a visitor scrolls to them
 * (native loading="lazy" + client-side pagination).
 */
import { writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT = resolve(__dirname, '..', 'public', 'gallery.json')

const NSID = process.env.FLICKR_NSID || '204533819@N02'
const KEY = process.env.FLICKR_API_KEY

function normalizeTags(raw) {
  if (!raw) return []
  return raw
    .split(/\s+/)
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean)
}

async function fetchViaApi() {
  const photos = []
  let page = 1
  while (true) {
    const params = new URLSearchParams({
      method: 'flickr.people.getPublicPhotos',
      api_key: KEY,
      user_id: NSID,
      per_page: '500',
      page: String(page),
      format: 'json',
      nojsoncallback: '1',
      extras: 'tags,date_taken,url_l,url_h,description,owner_name',
    })
    const url = `https://api.flickr.com/services/rest/?${params}`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Flickr API HTTP ${res.status}`)
    const json = await res.json()
    if (json.stat !== 'ok') throw new Error(`Flickr API: ${json.message}`)
    photos.push(...json.photos.photo)
    if (page >= json.photos.pages) break
    page++
  }
  return photos.map((p) => {
    const cdn = `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}`
    return {
      title: p.title?.trim() || 'Untitled',
      image: p.url_l || p.url_h || `${cdn}_b.jpg`,
      link: `https://www.flickr.com/photos/${p.owner}/${p.id}/`,
      tags: normalizeTags(p.tags),
      caption: p.title?.trim() || undefined,
      date: (p.datetaken || '').slice(0, 10) || undefined,
    }
  })
}

async function fetchViaFeed() {
  const params = new URLSearchParams({
    id: NSID,
    format: 'json',
    nojsoncallback: '1',
  })
  const url = `https://www.flickr.com/services/feeds/photos_public.gne?${params}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Flickr feed HTTP ${res.status}`)
  const json = await res.json()
  return json.items.map((it) => ({
    title: it.title?.trim() || 'Untitled',
    // The feed serves _m (240px). Bump to _b (1024px) for gallery display.
    image: it.media.m.replace(/_m\.jpg(\?.*)?$/, '_b.jpg'),
    link: it.link,
    tags: normalizeTags(it.tags),
    caption: it.title?.trim() || undefined,
    date: it.date_taken?.slice(0, 10),
  }))
}

async function main() {
  console.log(`[flickr] Fetching public photos for NSID ${NSID}`)
  let photos
  if (KEY) {
    console.log('[flickr] Using Flickr API (full archive)')
    photos = await fetchViaApi()
  } else {
    console.log('[flickr] FLICKR_API_KEY not set, using public JSON feed (20 latest)')
    photos = await fetchViaFeed()
  }

  photos.sort((a, b) => (b.date || '').localeCompare(a.date || ''))

  await mkdir(dirname(OUTPUT), { recursive: true })
  await writeFile(OUTPUT, JSON.stringify(photos, null, 2))
  console.log(`[flickr] Wrote ${photos.length} photos to ${OUTPUT}`)
}

main().catch((err) => {
  console.error('[flickr] Failed:', err.message || err)
  process.exit(1)
})
