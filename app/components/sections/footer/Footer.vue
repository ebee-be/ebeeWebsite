<template>
  <footer class="bg-[var(--ui-bg-elevated)] border-t border-[var(--ui-border)]">
    <div class="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
        <div class="col-span-full lg:col-span-1">
          <!-- Brand Logo -->
          <NuxtLink to="/">
            <BrandIcon />
          </NuxtLink>
        </div>

        <div
          v-if="config.navigation?.footerLinks"
          v-for="section in config.navigation.footerLinks"
          class="col-span-1">
          <h3 class="font-bold text-[var(--ui-text)]">
            {{ section.section }}
          </h3>

          <ul class="mt-3 grid space-y-3">
            <li v-for="link in section.links">
              <NuxtLink
                :href="link.url"
                class="inline-flex gap-x-2 rounded-lg text-[var(--ui-text-muted)] outline-none transition duration-300 hover:text-[var(--ui-text)]">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-span-2">
          <label for="email" class="font-bold text-[var(--ui-text-muted)]">
            Stay up to date
          </label>

          <form>
            <div
              class="mt-2 flex flex-col items-center gap-2 rounded-lg bg-[var(--ui-bg)] p-2 sm:flex-row sm:gap-3">
              <div class="w-full">
                <label for="email" class="sr-only">Email Adress</label>
                <UInput
                  size="xl"
                  id="email"
                  type="email"
                  class="w-full"
                  placeholder="Enter your email address to subscribe" />
              </div>

              <UButton size="xl" label="Subscribe" />
            </div>
            <p class="mt-3 text-sm text-[var(--ui-text-muted)]">
              Stay updated with the latest tools and exclusive deals.
            </p>
          </form>
        </div>
      </div>
    </div>
  </footer>

  <footer
    class="!hidden container mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
    <div class="pt-10 lg:pt-14">
      <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
        <div class="col-span-full lg:col-span-1">
          <!-- Brand Logo -->
          <NuxtLink to="/">
            <Icon name="local:logo-horizontal-white" class="dark:hidden h-auto w-32" />
            <Icon name="local:logo-horizontal" class="hidden dark:inline h-auto w-32" />
          </NuxtLink>
        </div>

        <div v-for="section in footerLinks" class="col-span-1">
          <h3 class="font-bold text-[var(--ui-text)]">
            {{ section.section }}
          </h3>

          <ul class="mt-3 grid space-y-3">
            <li v-for="link in section.links">
              <NuxtLink
                :href="link.url"
                class="inline-flex gap-x-2 rounded-lg text-[var(--ui-text-muted)] outline-none transition duration-300 hover:text-[var(--ui-text)]">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-span-2">
          <label for="email" class="font-bold text-[var(--ui-text-muted)]">
            Stay up to date
          </label>

          <form>
            <div
              class="mt-2 flex flex-col items-center gap-2 rounded-lg bg-[var(--ui-bg)] p-2 sm:flex-row sm:gap-3">
              <div class="w-full">
                <label for="email" class="sr-only">Email Adress</label>
                <input
                  type="text"
                  id="email"
                  name="footer-input"
                  class="block w-full rounded-lg border-[var(--ui-bg)] bg-muted px-4 py-3 text-sm text-muted focus:border-[var(--ui-primary)] focus:ring-[var(--ui-primary)] disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-gray-300 dark:placeholder:text-neutral-300 caret-orange-400"
                  placeholder="Enter your email address to subscribe" />
              </div>
              <a
                class="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-[var(--ui-primary)] p-3 text-sm font-bold text-[var(--ui-primary)]-foreground outline-none transition duration-300 hover:bg-[var(--ui-primary)]/80 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
                href="#">
                Subscribe
              </a>
            </div>
            <p class="mt-3 text-sm text-[var(--ui-text-muted)]">
              Stay updated with the latest tools and exclusive deals.
            </p>
          </form>
        </div>
      </div>

      <div
        class="mt-9 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0">
        <div class="flex items-center justify-between">
          <p class="text-sm text-[var(--ui-text-muted)]">
            © <span>{{ new Date().getFullYear() }}</span>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-lg font-medium underline underline-offset-2 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-700 hover:decoration-dashed focus:outline-none focus-visible:ring dark:ring-zinc-200 dark:hover:text-neutral-300">
              Ebee.com </a
            >.
          </p>
        </div>

        <!-- social media links -->
        <div class="space-x-1.5">
          <UButton
            href="#"
            variant="ghost"
            class="h-8 px-2"
            leading-icon="simple-icons:facebook" />
          <UButton
            href="#"
            variant="ghost"
            class="h-8 px-2"
            leading-icon="simple-icons:instagram" />
          <UButton
            href="#"
            variant="ghost"
            class="h-8 px-2"
            leading-icon="simple-icons:x" />
          <UButton
            href="#"
            variant="ghost"
            class="h-8 px-2"
            leading-icon="simple-icons:github" />
          <UButton
            href="#"
            variant="ghost"
            class="h-8 px-2"
            leading-icon="simple-icons:google   " />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import config from "@/content/config.json";
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" }
    ]
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" }
    ]
  }
];
</script>
