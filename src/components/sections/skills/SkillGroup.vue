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
      <SkillBadge v-for="skill in skills" :key="skill.name" :skill="skill" />
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
</script>
