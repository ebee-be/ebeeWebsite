<template>
  <section
    class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full">
    <div>
      <h2
        class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-[var(--ui-text)]">
        {{ title }}
      </h2>
      <p
        class="mb-4 max-w-prose text-pretty font-normal text-[var(--ui-text-muted)] sm:text-lg">
        {{ subtitle }}
      </p>
      <!-- Conditional rendering of the Primary Call-To-Action button if 'btnExists' is true -->
      <!-- {btnExists ? <PrimaryCTA title="{btnTitle}" url="{btnURL}" /> : null} -->
    </div>

    <template v-if="images">
      <div v-if="images?.length === 1" class="mt-8">
        <!-- Single image -->
        <img class="w-full rounded-lg" v-bind="images[0]" />
      </div>
      <div v-else class="mt-8 grid grid-cols-2 gap-4">
        <img class="w-full rounded-xl" v-bind="images[0]" />
        <img class="mt-4 w-full rounded-xl lg:mt-10" v-bind="images[1]" />
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
type ImgProps = { src: string; alt: string };
defineProps<{ title: string; subtitle: string; images?: ImgProps[] }>();
</script>
