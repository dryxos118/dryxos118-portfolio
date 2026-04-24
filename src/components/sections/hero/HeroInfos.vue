<template>
  <div class="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
    <BaseBadge
      v-for="info in Infos"
      :key="info.title"
      :name="info.title"
      :icon="info.icon"
      variant="outline"
    />
  </div>
</template>

<script setup lang="ts">
import { Infos } from "@/data/hero";
</script>
