<template>
  <UFooter>
    <template #left>
      <p class="text-xs text-muted">
        © {{ new Date().getFullYear() }} dryxos118 - Alexis Hu-Hiest — Tous
        droits réservés.
      </p>
    </template>

    <template #right>
      <UButton
        to="https://github.com/dryxos118"
        target="_blank"
        icon="simple-icons:github"
        color="primary"
        variant="subtle"
        >Github</UButton
      >
      <UButton
        to="https://linkedin.com/in/alexis-hu-hiest-46bb76254"
        target="_blank"
        icon="simple-icons:linkedin"
        color="secondary"
        variant="subtle"
        >LinkedIn</UButton
      >
    </template>
  </UFooter>
</template>
