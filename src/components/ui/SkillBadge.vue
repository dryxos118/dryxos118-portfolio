<template>
  <UBadge
    color="neutral"
    variant="soft"
    class="px-3.5 py-1.5 text-sm font-medium"
  >
    <UIcon
      :name="skill.icon"
      class="size-4 mr-1.5"
      :style="{ color: skill.color }"
    />

    <span>{{ skill.name }}</span>
  </UBadge>
</template>

<script setup lang="ts">
import type { Skill } from "@/data/skills";

defineProps<{
  skill: Skill;
}>();
</script>
