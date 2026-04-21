<template>
  <UApp :locale="fr">
    <AppSplashScreen v-if="isLoading" />
    <template v-else>
      <AppHeader />
      <HomePage />
      <AppFooter />
    </template>
  </UApp>
</template>

<script setup lang="ts">
import { fr } from "@nuxt/ui/locale";
import { onBeforeUnmount, onMounted, ref } from "vue";
import HomePage from "./pages/HomePage.vue";

const isLoading = ref(true);

let timer: ReturnType<typeof setTimeout> | null = null;

onMounted(() => {
  timer = setTimeout(() => {
    isLoading.value = false;
  }, 3500);
});

onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>
