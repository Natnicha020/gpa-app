<template>
    <div class="q-ma-md"></div>
        <q-btn label="Save" @click="saveNote" />
    </template>

    <script setup>
    import { useQuasar } from 'quasar';
    const $q = useQuasar()
    const saveNote = () => {
        $q.notify({
            type: 'positive',
            message: 'Save completed',
            position: 'top-right',
            timeout: 2000,
            icon: 'print'
        })
    }
</script>