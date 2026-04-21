<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: { duration: 700 },
    }"
    class="max-w-2xl text-center lg:text-left"
  >
    <UBadge color="primary" variant="soft" icon="i-lucide-sparkles">
      Disponible pour une opportunité junior
    </UBadge>

    <h1
      class="mt-6 text-4xl font-black tracking-tight text-default sm:text-5xl"
    >
      Alexis
      <span class="block text-primary">Développeur Full Stack</span>
    </h1>

    <p class="mt-6 text-base leading-8 text-toned sm:text-lg">
      Je conçois des interfaces modernes et des applications web propres,
      lisibles et structurées, avec une vraie attention portée à l’expérience
      utilisateur.
    </p>

    <HeroQualities />
    <HeroInfos />

    <div class="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
      <UButton
        color="neutral"
        size="xl"
        variant="subtle"
        trailing-icon="i-lucide-folder-kanban"
        @click="scrollToSection('projects')"
      >
        Voir mes projets
      </UButton>

      <UButton
        color="primary"
        variant="outline"
        size="xl"
        trailing-icon="i-lucide-mail"
        @click="scrollToSection('contact')"
      >
        Me contacter
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroInfos from "./HeroInfos.vue";
import HeroQualities from "./HeroQualities.vue";
import { useSmoothScroll } from "@/composables/useSmoothScroll";

const { scrollToSection } = useSmoothScroll();
</script>
