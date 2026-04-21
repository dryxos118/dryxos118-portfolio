<template>
  <div class="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
    <UBadge
      v-for="item in Infos"
      :key="item.title"
      color="neutral"
      variant="outline"
      class="rounded-full px-3 py-1"
      :icon="item.icon"
    >
      {{ item.title }}
    </UBadge>
  </div>
</template>

<script setup lang="ts">
import { Infos } from "@/data/hero";
</script>
