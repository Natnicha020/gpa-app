<template>
    <q-page class="q-pa-md">
        <div class="text-h6">{{ appTitle }}</div>
        <div>Connected API: {{ apiUrl }}</div>
        <div>Mode: {{ mode }}</div>
    </q-page>
</template>
<script setup>
const appTitle = import.meta.env.QCLI_APP_TITLE
const apiUrl = import.meta.env.QCLI_API_URL
const mode = import.meta.env.MODE 
</script>