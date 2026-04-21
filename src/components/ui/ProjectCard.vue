<template>
  <UCard
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: { duration: 500 },
    }"
    class="group h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:-translate-y-1"
  >
    <div class="flex items-start justify-between gap-4">
      <UBadge color="primary" variant="soft" class="rounded-full px-3 py-1">
        {{ type }}
      </UBadge>
    </div>

    <h3 class="mt-5 text-xl font-semibold text-white">
      {{ title }}
    </h3>

    <p class="mt-4 text-sm leading-7 text-neutral-300">
      {{ description }}
    </p>

    <div class="mt-5 flex flex-wrap gap-2">
      <UBadge
        v-for="tech in stack"
        :key="tech"
        color="neutral"
        variant="soft"
        class="rounded-full px-3 py-1"
      >
        {{ tech }}
      </UBadge>
    </div>

    <div class="mt-8 flex flex-wrap gap-3">
      <UButton
        v-if="github"
        :to="github"
        target="_blank"
        color="neutral"
        variant="soft"
        class="rounded-full"
        icon="i-lucide-github"
      >
        GitHub
      </UButton>

      <UButton
        v-if="demo"
        :to="demo"
        target="_blank"
        class="rounded-full"
        trailing-icon="i-lucide-external-link"
      >
        Demo
      </UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  type: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
}>();
</script>
