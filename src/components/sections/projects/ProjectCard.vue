<template>
  <UCard
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: { duration: 500 },
    }"
    class="h-full border border-accented bg-default/50 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
  >
    <div class="flex h-full flex-col space-y-6">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="h-48 w-full rounded-md object-cover border border-accented"
      />

      <div class="flex-1">
        <h3 class="text-lg font-bold text-highlighted">
          {{ project.title }}
        </h3>

        <p class="mt-2 text-sm leading-6 text-toned line-clamp-3">
          {{ project.shortDescription }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="tag in project.tags.slice(0, 3)"
          :key="tag"
          color="neutral"
          variant="soft"
          class="rounded-full"
        >
          {{ tag }}
        </UBadge>

        <UBadge
          v-if="project.tags.length > 3"
          color="neutral"
          variant="soft"
          class="rounded-full"
        >
          +{{ project.tags.length - 3 }}
        </UBadge>
      </div>

      <div class="flex flex-wrap gap-3">
        <UButton
          color="neutral"
          variant="soft"
          class="rounded-full"
          icon="i-lucide-eye"
          @click="isOpen = true"
        >
          Détails
        </UButton>

        <UButton
          v-if="project.link"
          :to="project.link"
          target="_blank"
          class="rounded-full"
          trailing-icon="i-lucide-external-link"
        >
          Demo
        </UButton>
      </div>

      <ProjectModal :project="project" v-model:open="isOpen" />
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "@/data/projects";

defineProps<{
  project: Project;
}>();

const isOpen = ref(false);
</script>
