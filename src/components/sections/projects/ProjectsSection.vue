<template>
  <SectionBlock
    id="projects"
    eyebrow="Projets"
    title="Quelques réalisations"
    description="Une sélection de projets que j'ai développés."
  >
    <div class="grid gap-6 lg:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>

    <div class="mt-10 text-center">
      <UButton
        to="https://github.com/dryxos118"
        target="_blank"
        color="neutral"
        variant="soft"
        leading-icon="simple-icons:github"
        trailing-icon="i-lucide-arrow-up-right"
      >
        Voir plus sur GitHub
      </UButton>
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
import SectionBlock from "@/components/ui/SectionBlock.vue";
import { PROJECTS } from "@/data/projects";

const projects = PROJECTS;
</script>
