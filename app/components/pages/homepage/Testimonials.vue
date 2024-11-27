<template>
  <TestimonialItemTemplate v-slot="{ content, author, role, avatarSrc }">
    <blockquote class="relative">
      <Icon
        name="gridicons:quote"
        class="text-[var(--ui-text-muted)]/50 absolute start-0 top-0 h-16 w-16 -translate-x-1 -translate-y-8 transform" />

      <div class="relative z-10 ps-8">
        <p class="text-xl italic text-[var(--ui-text)]">{{ content }}</p>
      </div>

      <div class="mt-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full" :src="avatarSrc" alt="Avatar Description" />
          </div>
          <div class="ms-4 grow">
            <div class="font-bold text-[var(--ui-text)]">{{ author }}</div>
            <div class="text-xs text-[var(--ui-text-muted)]">{{ role }}</div>
          </div>
        </div>
      </div>
    </blockquote>
  </TestimonialItemTemplate>

  <section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8">
    <div
      class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16 pt-10 lg:pt-14">
      <div class="lg:col-span-5 lg:col-start-1">
        <div class="mb-8">
          <h2
            class="mb-2 text-3xl font-bold text-[var(--ui-text)] lg:text-4xl"
            v-html="title" />
          <p v-if="subtitle" class="text-[var(--ui-text-muted)]" v-html="subtitle" />
        </div>

        <TestimonialItem
          v-for="(testimonial, idx) in testimonials"
          :key="idx"
          v-bind="testimonial" />
      </div>
      <div v-if="statistics" class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0">
        <div class="space-y-6 sm:space-y-8">
          <ul
            v-if="statistics"
            class="grid grid-cols-2 divide-x-2 divide-y-2 divide-[var(--ui-border-muted)] overflow-hidden">
            <li
              v-for="(statistic, idx) in statistics"
              class="-m-0.5 flex flex-col p-4 sm:p-8">
              <div
                class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-[var(--ui-text)] sm:text-5xl">
                <Icon
                  v-if="statistic.icon"
                  :name="statistic.icon"
                  :class="twMerge('', statistic.iconClass)" />
                {{ statistic.count }}
              </div>
              <p class="text-sm text-[var(--ui-text-muted)] sm:text-base">
                {{ statistic.description }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { createReusableTemplate } from "@vueuse/core";

type Testimonial = {
  content: string;
  author: string;
  role: string;
  avatarSrc: string;
};

// TypeScript type for stats.
type StatProps = {
  count: string;
  description: string;

  icon?: string;
  iconClass?: string;
};

const [TestimonialItemTemplate, TestimonialItem] = createReusableTemplate<Testimonial>();

defineProps<{
  title: string;
  subtitle?: string;
  statistics?: StatProps[];
  testimonials?: Testimonial[];
}>();
</script>
