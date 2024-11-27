<template>
  <section class="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-full">
    <div class="max-w-screen-md">
      <!-- Section title -->
      <h1
        class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-[var(--ui-text)]"
        v-html="title" />
      <p
        class="mb-8 max-w-prose text-pretty font-normal text-[var(--ui-text-muted)] sm:text-xl">
        {{ subtitle }}
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <UButton v-if="actions.primary" size="xl" v-bind="actions.primary" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  actions: {
    primary: {};
  };
}>();
</script>
