<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 18 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 400,
        delay,
      },
    }"
    class="space-y-4"
  >
    <div class="flex items-center justify-between">
      <h3 :class="titleClass">
        {{ title }}
      </h3>
    </div>

    <div class="flex flex-wrap gap-2.5">
      <UBadge
        v-for="skill in skills"
        :key="skill.name"
        color="neutral"
        variant="soft"
        :class="badgeClass"
      >
        <UIcon
          :name="skill.icon"
          class="size-4 mr-1.5"
          :style="{ color: skill.color }"
        />

        <span>{{ skill.name }}</span>
      </UBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from "@/data/skills";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    title: string;
    skills: Skill[];
    featured?: boolean;
    delay?: number;
  }>(),
  {
    featured: false,
    delay: 0,
  },
);

const titleClass = computed(
  () =>
    `uppercase tracking-[0.2em] font-semibold ${props.featured ? "text-sm text-primary" : "text-xs text-muted"}`,
);

const badgeClass = computed(
  () => `px-3.5 py-1.5 text-sm ${props.featured ? "font-medium" : ""}`,
);
</script>
