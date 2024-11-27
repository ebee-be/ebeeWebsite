<template>
  <FeatureGridTemplate v-slot="{ title, description, icon }">
    <div class="flex items-start gap-x-5">
      <Icon :name="icon" class="h-auto w-32 text-[var(--ui-primary)]" />
      <div class="grow">
        <h3 class="text-balance text-lg font-bold text-[var(--ui-text)]" v-html="title" />
        <p class="mt-1 text-pretty text-[var(--ui-text-muted)]" v-html="description" />
      </div>
    </div>
  </FeatureGridTemplate>

  <section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8">
    <div class="grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
      <!-- title -->
      <div class="lg:col-span-1">
        <h2 class="text-balance text-2xl font-bold text-[var(--ui-text)] md:text-3xl">
          {{ title }}
        </h2>
        <p class="mt-2 text-pretty text-[var(--ui-text-muted)] md:mt-4">
          {{ subtitle }}
        </p>
      </div>

      <!-- list -->
      <div class="lg:col-span-2">
        <div class="grid gap-8 sm:grid-cols-2 md:gap-12">
          <FeatureGrid v-for="feature in features" v-bind="feature" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FeatureGrid } from "~/types";
import { createReusableTemplate } from "@vueuse/core";

const [FeatureGridTemplate, FeatureGrid] = createReusableTemplate<FeatureGrid>();

defineProps<{
  title: string;
  subtitle: string;
  features: FeatureGrid[];
}>();
</script>
