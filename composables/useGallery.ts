export interface Photo {
  /** Human-readable title (used as alt text and hover label). */
  title: string
  /** Direct image URL (Flickr live.staticflickr.com or any CDN). */
  image: string
  /** Optional link out (typically the Flickr photo page). */
  link?: string
  /** Freeform tags for filtering. Lowercase, no spaces (use kebab-case). */
  tags: string[]
  /** Optional caption / location shown on hover. */
  caption?: string
  /** Optional date (YYYY-MM-DD) for sorting. */
  date?: string
}

/**
 * Ordered newest first. Add entries at the top of the array.
 * Example:
 *   {
 *     title: 'Fushimi Inari at dawn',
 *     image: 'https://live.staticflickr.com/65535/xxxxxxxxx_h.jpg',
 *     link: 'https://www.flickr.com/photos/username/xxxxxxxxx',
 *     tags: ['japan', 'kyoto', 'travel'],
 *     caption: 'Kyoto, Japan',
 *     date: '2025-04-12',
 *   },
 */
export const useGallery = (): Photo[] => []
