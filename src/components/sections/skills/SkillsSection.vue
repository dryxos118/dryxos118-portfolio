<template>
  <SectionBlock
    id="skills"
    eyebrow="Compétences"
    title="Une stack moderne et polyvalente"
    description="Les technologies & outils que j’utilise pour construire des projets."
  >
    <UCard class="rounded-xl border border-accented bg-default/50 p-4">
      <div class="space-y-8">
        <SkillGroup
          title="Stack principale"
          :skills="mainStackSkills"
          featured
          :delay="0"
        />

        <SkillGroup
          title="Autres technologies"
          :skills="otherTechnologySkills"
          :delay="100"
        />

        <div class="grid gap-8 lg:grid-cols-2">
          <SkillGroup title="Outils" :skills="toolSkills" :delay="180" />

          <SkillGroup title="Pratiques" :skills="practiceSkills" :delay="260" />
        </div>
      </div>
    </UCard>
  </SectionBlock>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { skills } from "@/data/skills";

const mainStackSkills = computed(() =>
  skills.filter((skill) => skill.type === "MAIN_STACK"),
);

const otherTechnologySkills = computed(() =>
  skills.filter((skill) => skill.type === "OTHER_TECHNOLOGIES"),
);

const toolSkills = computed(() =>
  skills.filter((skill) => skill.type === "TOOLS"),
);

const practiceSkills = computed(() =>
  skills.filter((skill) => skill.type === "PRACTICES"),
);
</script>
