<template>
  <section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8">
    <div class="mx-auto mb-6 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3">
      <h2
        class="text-balance text-xl font-bold leading-tight text-[var(--ui-text)] sm:text-2xl">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-pretty leading-tight text-[var(--ui-text-muted)]">
        {{ subtitle }}
      </p>
    </div>

    <div
      class="flex flex-col items-center justify-center gap-y-2 sm:flex-row sm:gap-x-12 sm:gap-y-0 lg:gap-x-24">
      <template v-for="(entry, index) in entries" :key="index">
        <Icon
          v-if="entry.type === 'icon' && entry.name"
          :name="entry.name"
          class="mx-auto h-auto w-16 py-3 sm:mx-0 lg:w-24 lg:py-5 filter saturate-0 hover:saturate-100 transition-all" />

        <img
          v-else-if="entry.type === 'image' && entry.src"
          :src="entry.src"
          class="h-auto max-w-64 filter saturate-0 hover:saturate-100 transition-all" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
type Entry = { type: "icon"; name: string } | { type: "image"; src: string };
defineProps<{ title: string; subtitle: string; entries: Entry[] }>();
</script>
