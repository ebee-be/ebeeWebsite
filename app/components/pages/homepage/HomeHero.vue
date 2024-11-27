<template>
  <section class="container py-10 lg:py-14 grid md:grid-cols-2">
    <div>
      <h1
        class="block text-balance text-3xl font-bold tracking-tight text-[var(--ui-text)] sm:text-4xl lg:text-6xl lg:leading-tight"
        v-html="title" />

      <p
        class="mt-3 text-pretty text-lg leading-relaxed text-[var(--ui-text-muted)] lg:w-4/5"
        v-html="subtitle" />

      <div class="flex gap-4 my-8">
        <UButton
          v-if="actions.primary"
          size="xl"
          trailingIcon="lucide:chevron-right"
          class="hover:[&>svg]:transition-all hover:[&>svg]:translate-x-2"
          v-bind="actions.primary" />
        <UButton
          size="xl"
          v-if="actions.secondary"
          color="neutral"
          v-bind="actions.secondary" />
      </div>

      <div v-if="ratings" class="flex flex-col md:items-center md:flex-row gap-4">
        <UAvatarGroup size="lg">
          <UAvatar v-for="img in images" v-bind="img" />
        </UAvatarGroup>

        <div v-if="ratings" class="flex flex-col">
          <div class="inline-flex items-center gap-2">
            <Ratings
              disableClick
              :starSize="16"
              :model-value="ratings.value"
              style="--vue3StarRatingsInnerColor: var(--color-muted-foreground)" />
            <div class="mt-1 text-sm text-[var(--ui-text)]/60">
              <span class="text-[var(--ui-text)]">{{ ratings.value }}</span>
              <span class="font-semibold"> / 5</span>
            </div>
          </div>

          <div v-if="ratings.totalReviews" class="text-[var(--ui-text)]/60">
            From over
            <strong class="text-primary">{{ ratings.totalReviews }}</strong> reviews.
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full">
      <div class="top-12 overflow-hidden">
        <img
          class="h-full w-full object-center"
          src="https://screwfast.uk/_astro/hero-image.DRPoHq2O_ZtbEJF.avif" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Ratings from "vue3-star-ratings";
// import { Button } from "~/components/Button";
// import { AvatarFallback, AvatarImage, AvatarRoot } from "radix-vue";

// const RATINGS = 4.43;

const images = [
  {
    src: "https://screwfast.uk/_astro/photo-1568602471122-7832951cc4c5_dsUJE.webp"
  },
  {
    src: "https://screwfast.uk/_astro/photo-1531927557220-a9e23c1e4794_ZJoxE2.webp"
  },
  {
    src: "https://screwfast.uk/_astro/photo-1541101767792-f9b2b1c4f127_cas9w.webp"
  },
  {
    src: "https://screwfast.uk/_astro/photo-1492562080023-ab3db95bfbce_2ij1mG.webp"
  }
];

defineProps<{
  title: string;
  subtitle: string;

  actions: {
    primary: {};
    secondary?: {};
  };

  ratings?: {
    value: number;
    totalReviews?: number | string;
  };
}>();
</script>
