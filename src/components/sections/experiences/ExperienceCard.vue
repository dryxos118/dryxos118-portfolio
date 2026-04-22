<template>
  <UCard
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: { duration: 450 },
    }"
    class="rounded-xl border bg-default/50 p-4"
    :class="isPhantom ? 'border-primary/40 bg-primary/5' : 'border-accented'"
  >
    <div class="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <h3 class="text-lg font-semibold">
            {{ title }}
          </h3>

          <UBadge color="neutral" variant="soft" class="rounded-full">
            {{ type === "experience" ? "Expérience" : "Formation" }}
          </UBadge>
        </div>

        <p class="text-sm text-primary">
          {{ subtitle }}
        </p>
      </div>

      <div class="text-sm">
        {{ period }}
      </div>
    </div>

    <p class="mt-5 text-sm leading-7 text-toned">
      {{ description }}
    </p>

    <div v-if="techs.length" class="mt-5 flex flex-wrap gap-2">
      <SkillBadge v-for="tech in techs" :key="tech.name" :skill="tech" />
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { Skill } from "@/data/skills";

defineProps<{
  title: string;
  subtitle: string;
  period: string;
  description: string;
  type: "experience" | "education";
  techs: readonly Skill[];
  isPhantom?: boolean;
}>();
</script>
