<template>
  <NavBar />

  <div class="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
    <main>
      <slot />
    </main>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Logo from "~/components/BrandIcon.vue";
import NavBar from "~/components/sections/navbar/NavBar.vue";
import Footer from "~/components/sections/footer/Footer.vue";
</script>
