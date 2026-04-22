<template>
  <SectionBlock
    id="contact"
    eyebrow="Objectif"
    title="Construire, apprendre et évoluer"
    description="Envie d’échanger ou de collaborer ? Écris-moi."
  >
    <div class="grid gap-6 lg:grid-cols-2">
      <UCard
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 450 },
        }"
        class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <h3 class="text-xl font-semibold text-white">Restons en contact</h3>

        <p class="mt-4 text-sm leading-7 text-neutral-300">
          Je suis ouvert à une opportunité, une alternance, un premier poste ou
          simplement à un échange autour du développement.
        </p>

        <div class="mt-6 space-y-3 text-sm text-neutral-300">
          <p>Email : tonmail@example.com</p>
          <p>GitHub : github.com/dryxos118</p>
          <p>LinkedIn : linkedin.com/in/tonprofil</p>
        </div>
      </UCard>

      <UCard
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 450, delay: 100 },
        }"
        class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label class="mb-2 block text-sm text-neutral-300">Nom</label>
            <input
              v-model="form.name"
              type="text"
              class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary-400"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm text-neutral-300">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary-400"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm text-neutral-300">Message</label>
            <UTextarea v-model="form.message" :rows="6" class="w-full" />
          </div>

          <UButton
            type="submit"
            size="lg"
            class="rounded-full"
            trailing-icon="i-lucide-send"
          >
            Envoyer
          </UButton>
        </form>
      </UCard>
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import SectionBlock from "@/components/ui/SectionBlock.vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Contact form:", form);
};
</script>
