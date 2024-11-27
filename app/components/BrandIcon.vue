<template>
  <SvgoLogoHorizontal
    v-bind="$attrs"
    :fontControlled="false"
    :class="twMerge('dark:hidden', LOGO_CLASS, $props.class)" />
  <SvgoLogoHorizontalWhite
    v-bind="$attrs"
    :fontControlled="false"
    :class="twMerge('hidden dark:inline', LOGO_CLASS, $props.class)" />
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const LOGO_CLASS = "h-auto w-32 transition-all";
</script>
