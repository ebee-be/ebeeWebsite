<template>
  <ContactDetailTemplate
    v-slot="{ icon, heading, linkTitle, linkHref, content, hideLinkArrow }">
    <div class="flex items-start gap-x-4 py-6">
      <Icon v-if="icon" :name="icon" class="h-auto w-6" />
      <div class="grow">
        <h3 class="font-bold text-[var(--ui-text)] text-lg">{{ heading }}</h3>
        <p class="mt-1 text-sm text-[var(--ui-text-muted)]">{{ content }}</p>

        <NuxtLink
          v-if="linkTitle"
          :href="linkHref || '#'"
          class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-[var(--ui-text)] hover:text-[var(--ui-primary)] outline-none transition duration-300">
          {{ linkTitle }}
          <Icon
            v-if="linkTitle && !hideLinkArrow"
            name="lucide:arrow-right"
            class="group-hover:translate-x-1.5 transition-all" />
        </NuxtLink>
      </div>
    </div>
  </ContactDetailTemplate>
  <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="mx-auto max-w-2xl lg:max-w-5xl">
      <div class="text-center">
        <h1
          class="text-balance text-2xl font-bold tracking-tight text-[var(--ui-text)] md:text-4xl md:leading-tight">
          Contact us
        </h1>
        <p class="mt-1 text-pretty text-[var(--ui-text-muted)]">
          Have questions or want to discuss a project? Reach out, and let's craft the
          perfect solution with our tools and services.
        </p>
      </div>

      <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
        <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8">
          <h2 class="mb-8 text-xl font-bold text-[var(--ui-text)]">
            Fill in the form below
          </h2>
          <!-- Form for user input with various input fields.-->
          <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)-->
          <form>
            <div class="grid gap-4">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <UInput
                  size="xl"
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  placeholder="First Name" />
                <UInput
                  size="xl"
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name" />
              </div>
              <UInput
                size="xl"
                type="email"
                id="email"
                label="Email"
                name="email"
                placeholder="Email" />

              <UInput
                size="xl"
                type="phoneNumber"
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                placeholder="Phone Number" />
              <UTextarea
                id="details"
                name="details"
                label="Details"
                placeholder="Details" />
            </div>

            <div class="mt-4 grid">
              <UButton size="xl" label="Send message" block />
            </div>

            <div class="mt-3 text-center">
              <p class="text-sm text-[var(--ui-text-muted)]">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>

        <!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.-->
        <div class="divide-y divide-[var(--ui-border-muted)]">
          <ContactDetail
            heading="Knowledgebase"
            icon="lucide:circle-help"
            content="Browse through all of our knowledgebase articles."
            linkTitle="Visit guides & tutorials" />
          <ContactDetail
            heading="FAQ"
            icon="lucide:message-circle-question"
            content="Explore our FAQ for quick, clear answers to common queries."
            linkTitle="Visit guides & tutorials"
            linkHref="/#faqs" />

          <ContactDetail
            heading="Visit our office"
            icon="lucide:map-pin"
            content="UK ScrewFast"
            linkTitle="72 Union Terrace, E10 4PE London"
            hideLinkArrow />
          <ContactDetail
            heading="Contact us by email"
            icon="lucide:message-circle-question"
            content="Prefer the written word? Drop us an email at"
            linkTitle="support@screwfast.uk"
            linkHref="mailto:support@screwfast.uk" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { createReusableTemplate } from "@vueuse/core";

type ContactDetailProps = {
  icon: string;
  link?: string;
  heading: string;
  content: string;
  hideLinkArrow?: boolean;
};

const [ContactDetailTemplate, ContactDetail] =
  createReusableTemplate<ContactDetailProps>();
</script>
