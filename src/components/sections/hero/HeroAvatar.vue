<template>
  <div
    v-motion
    :initial="{ opacity: 0, scale: 0.92 }"
    :enter="{
      opacity: 1,
      scale: 1,
      transition: { duration: 700, delay: 150 },
    }"
    class="flex justify-center"
  >
    <img
      :src="avatar"
      alt="Avatar de Dryxos118"
      class="h-40 w-40 rounded-full object-cover shadow-xl sm:h-52 sm:w-52 lg:h-64 lg:w-64"
    />
  </div>
</template>

<script setup lang="ts">
import avatar from "@/assets/images/alexis_1.png";
</script>
