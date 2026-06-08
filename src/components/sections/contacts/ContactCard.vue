<template>
  <UCard
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: { duration: 450 },
    }"
    class="border border-accented bg-default/50 p-4"
  >
    <UForm class="space-y-5" :schema="schema" :state="form" @submit="onSubmit">
      <UFormField label="Nom" name="name">
        <UInput
          v-model="form.name"
          placeholder="Votre nom"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Email" name="email">
        <UInput
          v-model="form.email"
          type="email"
          placeholder="votre.email@example.com"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Sujet" name="subject">
        <UInput
          v-model="form.subject"
          placeholder="Opportunité, projet, question..."
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Message" name="message">
        <UTextarea
          v-model="form.message"
          placeholder="Votre message..."
          :rows="4"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <div
        class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-sm text-muted">Réponse généralement sous 24 à 48h.</p>

        <UButton
          type="submit"
          size="lg"
          icon="i-lucide-send"
          trailing
          :loading="isSubmitting"
        >
          {{ isSubmitting ? "Envoi..." : "Envoyer" }}
        </UButton>
      </div>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { reactive, ref } from "vue";
import * as z from "zod";
import emailjs from "@emailjs/browser";

const schema = z.object({
  subject: z.string().trim().min(3, "Sujet trop court"),

  name: z.string().trim().min(2, "Nom trop court"),

  email: z.email("Email invalide").trim(),

  message: z.string().trim().min(10, "Le message est trop court"),
});

type Schema = z.infer<typeof schema>;

const form = reactive<Schema>({
  subject: "",
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (isSubmitting.value) return;

  isSubmitting.value = true;

  const loadingToast = toast.add({
    title: "Envoi du message...",
    description: "Votre message est en cours d’envoi.",
    icon: "i-lucide-loader-circle",
    duration: 0,
  });

  try {
    const params = {
      name: event.data.name,
      email: event.data.email,
      subject: event.data.subject,
      message: event.data.message,
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      params,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      },
    );

    toast.update(loadingToast.id, {
      title: "Message envoyé !",
      description: "Je vous réponds dès que possible.",
      icon: "i-lucide-check",
      color: "success",
      duration: 3000,
    });

    Object.assign(form, {
      subject: "",
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    toast.update(loadingToast.id, {
      title: "Erreur d’envoi",
      description: "Une erreur est survenue. Réessayez plus tard.",
      icon: "i-lucide-circle-alert",
      color: "error",
      duration: 4000,
    });

    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
}
</script>
