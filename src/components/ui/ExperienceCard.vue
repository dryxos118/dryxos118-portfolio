<template>
  <UCard
    v-motion
    :initial="{ opacity: 0, x: -20 }"
    :visible-once="{
      opacity: 1,
      x: 0,
      transition: { duration: 450 },
    }"
    class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
  >
    <div
      class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
    >
      <div>
        <h3 class="text-lg font-semibold text-white">{{ title }}</h3>
        <p class="mt-1 text-sm text-primary-300">{{ subtitle }}</p>
      </div>

      <UBadge color="neutral" variant="soft" class="rounded-full">
        {{ period }}
      </UBadge>
    </div>

    <p class="mt-5 text-sm leading-7 text-neutral-300">
      {{ description }}
    </p>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  period: string;
  description: string;
}>();
</script>
