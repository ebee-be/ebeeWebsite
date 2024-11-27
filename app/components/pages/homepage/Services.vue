<template>
  <TabNavTemplate v-slot="{ $slots, heading, content, id, aria, dataTab }">
    <Tabs.List>
      <Tabs.Trigger
        :value="`tab-${id}`"
        class="hover:bg-[var(--ui-bg)] rounded-xl p-4 text-start outline-none transition duration-300 focus-visible:ring data-[state=active]:text:bg-neutral-50 data-[state=active]:text:shadow-md data-[state=active]:text:hover:border-transparent md:p-5">
        <span>
          <component :is="$slots.default" />

          <span class="ms-6 grow">
            <!-- Heading of the tab, changes color when active -->
            <span
              class="block text-lg font-bold text-[var(--ui-text)] data-[state=active]:text:text-[var(--ui-primary)]">
              {{ heading }}
            </span>
            <span class="mt-1 block text-[var(--ui-text-muted)]">{{ content }} </span>
          </span>
        </span>
      </Tabs.Trigger>
    </Tabs.List>
  </TabNavTemplate>

  <section
    class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
    <div class="relative p-6 md:p-16">
      <Tabs.Root
        orientation="vertical"
        class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
        <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0">
          <h2
            class="text-2xl font-bold text-[var(--ui-text)] sm:text-3xl"
            v-html="title" />

          <div class="mt-5 grid gap-4 md:mt-10" orientation="vertical">
            <Tabs.List v-for="(tab, idx) in tabs" :key="idx">
              <Tabs.Trigger
                :value="`tab-${idx}`"
                class="group hover:bg-[var(--ui-bg)]/50 rounded-xl p-4 text-start outline-none transition duration-300 data-[state=active]:bg-[var(--ui-bg)] data-[state=active]:shadow-md md:p-5">
                <span class="flex items-start">
                  <Icon
                    v-if="tab.icon"
                    :name="tab.icon"
                    class="h-auto w-10 shrink-0 group-data-[state=active]:text-[var(--ui-primary)]" />

                  <div class="ms-6 grow">
                    <span
                      class="block text-lg font-bold text-[var(--ui-text)] group-data-[state=active]:text-[var(--ui-primary)]">
                      {{ tab.heading }}
                    </span>
                    <span class="mt-1 block text-[var(--ui-text-muted)]">
                      {{ tab.content }}
                    </span>
                  </div>
                </span>
              </Tabs.Trigger>
            </Tabs.List>
          </div>
        </div>

        <!-- Contents for each tab -->

        <div class="lg:col-span-6">
          <div class="relative">
            <div>
              <Tabs.Content v-for="(tab, idx) in tabs" :key="idx" :value="`tab-${idx}`">
                <img
                  v-bind="tab.image"
                  class="rounded-lg shadow-xl aspect-[5/4] bg-[var(--ui-bg-elevated)] object-cover p-3 lg:aspect-auto border border-[var(--ui-border-muted)]" />
              </Tabs.Content>
            </div>
          </div>
        </div>
      </Tabs.Root>

      <div class="absolute inset-0 grid h-full w-full grid-cols-12">
        <!-- Decorative background and sizing -->
        <div
          class="col-span-full h-5/6 w-full rounded-xl bg-[var(--ui-bg-elevated)] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Tabs } from "radix-vue/namespaced";
import { createReusableTemplate } from "@vueuse/core";

interface TabNavProps {
  dataTab: string;
  id: string;
  aria: string;
  heading?: string;
  content?: string;
  first?: boolean;
}

const [TabNavTemplate, TabNav] = createReusableTemplate<TabNavProps>();

interface Tab {
  heading: string;
  content: string;
  icon: string;
  src: any;
  alt: string;
  first?: boolean;
  second?: boolean;
}

const props = defineProps<{ title: string; tabs: Tab[] }>();
</script>
