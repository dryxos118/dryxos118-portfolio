<template>
  <div class="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
    <BaseBadge
      v-for="quality in Qualities"
      :key="quality.title"
      :name="quality.title"
      :icon="quality.icon"
      variant="soft"
    />
  </div>
</template>

<script setup lang="ts">
import { Qualities } from "@/data/hero";
</script>
