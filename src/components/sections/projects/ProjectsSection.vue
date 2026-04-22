<template>
  <SectionBlock
    id="projects"
    eyebrow="Projets"
    title="Quelques réalisations"
    description="Voici les projets que j'ai réalisée."
  >
    <div class="grid gap-6 lg:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :type="project.type"
        :description="project.description"
        :stack="project.stack"
        :github="project.github"
      />
    </div>

    <div class="mt-10 text-center">
      <UButton
        to="https://github.com/dryxos118"
        target="_blank"
        color="neutral"
        variant="soft"
        class="rounded-full"
        trailing-icon="i-lucide-arrow-up-right"
      >
        Voir plus sur GitHub
      </UButton>
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
import SectionBlock from "@/components/ui/SectionBlock.vue";
import { projects } from "@/data/portfolio";
</script>
