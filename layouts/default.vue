<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader />
    <main class="flex-1 container-page py-14 md:py-20">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
