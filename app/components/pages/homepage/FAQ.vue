<template>
  <section
    class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
    <div class="grid gap-10 md:grid-cols-5">
      <div class="md:col-span-2">
        <div class="max-w-xs">
          <h2
            class="text-2xl font-bold text-[var(--ui-text)] md:text-4xl md:leading-tight"
            v-html="title" />

          <p class="mt-1 hidden text-[var(--ui-text-muted)] md:block">
            {{ subtitle }}
          </p>
        </div>
      </div>
      <div class="md:col-span-3">
        <UAccordion
          :items="faqs.map((f) => ({ label: f.question, content: f.answer }))"
          :ui="{
            trigger: 'text-lg text-[var(--ui-text)] hover:text-[var(--ui-text-muted)]'
          }" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Accordion } from "radix-vue/namespaced";
interface Faq {
  answer: string;
  question: string;
}

interface FaqGroup {
  faqs: Faq[];
}

defineProps<{
  title: string;
  subtitle?: string;
  faqs: FaqGroup;
}>();
</script>
