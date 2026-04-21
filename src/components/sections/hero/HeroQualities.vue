<template>
  <div class="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
    <UBadge
      v-for="quality in Qualities"
      :key="quality.title"
      color="neutral"
      variant="soft"
      class="rounded-full px-3 py-1"
      :icon="quality.icon"
    >
      {{ quality.title }}
    </UBadge>
  </div>
</template>

<script setup lang="ts">
import { Qualities } from "@/data/hero";
</script>
