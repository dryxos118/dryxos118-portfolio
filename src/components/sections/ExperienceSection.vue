<template>
  <SectionBlock
    id="experience"
    eyebrow="Expérience"
    title="Mon parcours"
    description="Un profil en construction, avec une vraie envie de progresser dans une équipe et de participer à des projets utiles."
  >
    <div class="grid gap-6">
      <ExperienceCard
        v-for="item in experiences"
        :key="`${item.title}-${item.period}`"
        :title="item.title"
        :subtitle="item.subtitle"
        :period="item.period"
        :description="item.description"
      />
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
import SectionBlock from "@/components/ui/SectionBlock.vue";
import ExperienceCard from "@/components/ui/ExperienceCard.vue";
import { experiences } from "@/data/portfolio";
</script>
