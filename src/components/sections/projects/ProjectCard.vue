<template>
  <UCard
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: { duration: 500 },
    }"
    class="bg-default/50 border border-accented transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
  >
    <div class="flex flex-col space-y-7">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="h-48 w-full rounded-md border border-accented object-cover"
      />

      <div class="flex-1">
        <h3 class="text-lg font-bold text-highlighted">
          {{ project.title }}
        </h3>

        <p class="mt-2 text-sm leading-6 text-toned">
          {{ project.shortDescription }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <BaseBadge
          v-for="tag in project.tags.slice(0, 3)"
          :key="tag.name"
          :name="tag.name"
        />

        <BaseBadge
          v-if="project.tags.length > 3"
          :name="`+${project.tags.length - 3}`"
        />
      </div>

      <div class="flex gap-3">
        <UButton
          color="neutral"
          variant="soft"
          icon="i-lucide-eye"
          class="flex-1 justify-center"
          @click="isOpen = true"
        >
          Détails
        </UButton>

        <UButton
          v-if="project.link"
          :to="project.link"
          target="_blank"
          trailing-icon="i-lucide-external-link"
          class="flex-1 justify-center"
        >
          Demo
        </UButton>
      </div>
    </div>
  </UCard>

  <ProjectModal :project="project" v-model:open="isOpen" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "@/data/projects";

defineProps<{
  project: Project;
}>();

const isOpen = ref(false);
</script>
