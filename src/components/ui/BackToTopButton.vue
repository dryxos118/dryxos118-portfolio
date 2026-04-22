<template>
  <UButton
    v-if="visible"
    color="primary"
    variant="outline"
    icon="i-lucide-arrow-up"
    class="fixed bottom-6 right-6 z-50 shadow-lg"
    @click="scrollToSection('hero')"
  />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useSmoothScroll } from "@/composables/useSmoothScroll";

const visible = ref(false);
const { scrollToSection } = useSmoothScroll();

const handleScroll = () => {
  visible.value = window.scrollY > 500;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
