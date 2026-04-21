<template>
  <SectionBlock
    id="skills"
    eyebrow="Compétences"
    title="Une stack moderne et polyvalente"
    description="Des technologies que j’utilise pour construire des interfaces propres, des APIs structurées et des projets cohérents."
  >
    <UCard class="rounded-3xl border border-default bg-default/50 p-6 sm:p-8">
      <div class="space-y-8">
        <SkillGroup
          title="Stack principale"
          subtitle="Les technologies que je maîtrise le plus et que je mets en avant."
          :skills="mainStackSkills"
          featured
          :delay="0"
        />

        <SkillGroup
          title="Autres technologies"
          subtitle="Des technologies déjà utilisées sur différents projets."
          :skills="otherTechnologySkills"
          :delay="100"
        />

        <div class="grid gap-8 lg:grid-cols-2">
          <SkillGroup
            title="Outils"
            subtitle="Mon environnement de travail au quotidien."
            :skills="toolSkills"
            :delay="180"
          />

          <SkillGroup
            title="Pratiques"
            subtitle="Ma manière de concevoir et développer un projet."
            :skills="practiceSkills"
            :delay="260"
          />
        </div>
      </div>
    </UCard>
  </SectionBlock>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SectionBlock from "@/components/ui/SectionBlock.vue";
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
