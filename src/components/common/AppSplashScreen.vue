<template>
  <div
    class="fixed inset-0 flex flex-col items-center justify-center bg-default"
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1 }"
    :leave="{ opacity: 0 }"
    :transition="{ duration: 0.8 }"
  >
    <h1 class="text-3xl font-semibold uppercase tracking-widest">dryxos118</h1>

    <span class="mt-2 text-muted" ref="typedRef"></span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import Typed from "typed.js";

const typedRef = ref<HTMLSpanElement | null>(null);

let typed: Typed | null = null;

onMounted(() => {
  if (!typedRef.value) return;

  typed = new Typed(typedRef.value, {
    strings: ["Bienvenue sur mon portfolio"],
    typeSpeed: 60,
    showCursor: false,
  });
});

onBeforeUnmount(() => {
  typed?.destroy();
});
</script>
