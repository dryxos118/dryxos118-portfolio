<template>
  <section :id="id" class="py-24 sm:py-28">
    <UContainer>
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
          },
        }"
        class="mb-12 text-center"
      >
        <UBadge
          color="neutral"
          variant="subtle"
          size="lg"
          class="rounded-full px-3 py-1"
        >
          {{ eyebrow }}
        </UBadge>

        <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ title }}
        </h2>

        <p
          v-if="description"
          class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base"
        >
          {{ description }}
        </p>
      </div>

      <slot />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}>();
</script>
