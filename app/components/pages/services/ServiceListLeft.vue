<template>
  <!-- The root section of the component -->
  <section
    class="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full">
    <img v-if="images" class="w-full rounded-xl" v-bind="images[0]" />
    <!-- The container for title, subtitle, and optional CTA button -->
    <div class="mt-4 md:mt-0">
      <!-- The title of the section -->
      <h2
        class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-[var(--ui-text)]">
        {{ title }}
      </h2>
      <!-- The subtitle of the section -->
      <p
        class="mb-4 max-w-prose text-pretty font-normal text-[var(--ui-text-muted)] sm:text-lg">
        {{ subtitle }}
      </p>
      <!-- Conditionally render the Primary CTA button if btnExists is true -->
      <!-- {btnExists ? <PrimaryCTA title="{btnTitle}" url="{btnURL}" /> : null} -->
    </div>
  </section>
</template>

<script setup lang="ts">
type ImgProps = { src: string; alt: string };
defineProps<{ title: string; subtitle: string; images?: ImgProps[] }>();
</script>
