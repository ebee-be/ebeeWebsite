<template>
  <header class="sticky top-0 py-4 z-1000 mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
    <div
      :class="
        twMerge(
          'flex items-center px-6 py-5 rounded-full transition-all',
          isScrolled &&
            'bg-[var(--ui-primary)]/5 backdrop-blur-xl dark:bg-[var(--ui-bg)]/55 ring-2 ring-[var(--ui-bg-muted)] dark:ring-[var(--ui-border-muted)] shadow-md'
        )
      ">
      <NuxtLink to="/">
        <BrandIcon class="!w-24" />
      </NuxtLink>

      <nav class="flex items-center ms-auto gap-x-8">
        <NuxtLink
          v-for="(navlink, idx) in config.navigation.navLinks"
          :key="idx"
          :href="navlink.href"
          class="text-base font-medium hover:text-[var(--ui-text-muted)]"
          active-class="!text-[var(--ui-primary)]">
          {{ $t(navlink.label) }}
        </NuxtLink>

        <!-- <NuxtLink
          to="/services"
          class="text-base font-medium hover:text-[var(--ui-text-muted)]"
          active-class="!text-[var(--ui-primary)]">
          Services
        </NuxtLink>

        <NuxtLink
          to="/contact-us"
          class="text-base font-medium hover:text-[var(--ui-text-muted)]"
          active-class="!text-[var(--ui-primary)]">
          Contact us
        </NuxtLink> -->
      </nav>

      <div class="inline-flex items-center">
        <div class="py-3 w-1 rounded-full bg-[var(--ui-text-muted)]/20 ms-4 me-2" />
        <UDropdownMenu
          :modal="false"
          :items="colorModeOpts"
          :content="{ align: 'end', side: 'bottom', sideOffset: 8 }">
          <UButton
            size="md"
            color="neutral"
            variant="ghost"
            class="rounded-xl"
            :icon="colorMode.value === 'light' ? LIGHT_ICON : DARK_ICON" />
        </UDropdownMenu>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import config from "@/content/config.json";

const { t } = useI18n();
const isScrolled = ref(false);
const colorMode = useColorMode();

const handleScroll = () => {
  isScrolled.value = window.scrollY >= 100;
  requestAnimationFrame(handleScroll);
};

onMounted(() => {
  requestAnimationFrame(handleScroll);
});

const LIGHT_ICON = config.icons?.theme?.light || "lucide:sun";
const DARK_ICON = config.icons?.theme?.dark || "lucide:moon";
const SYSTEM_ICON = config.icons?.theme?.light || "lucide:laptop-minimal";

const colorModeOpts = computed(() => {
  return [
    {
      type: "checkbox",
      icon: LIGHT_ICON,
      label: t("Light"),
      checked: colorMode.preference === "light",
      onSelect: () => (colorMode.preference = "light")
    },
    {
      type: "checkbox",
      icon: DARK_ICON,
      label: t("Dark"),
      checked: colorMode.preference === "dark",
      onSelect: () => (colorMode.preference = "dark")
    },
    {
      type: "checkbox",
      label: t("System"),
      icon: SYSTEM_ICON,
      checked: colorMode.preference === "system",
      onSelect: () => (colorMode.preference = "system")
    }
  ];
});
</script>
