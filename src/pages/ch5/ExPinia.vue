<template> 
    <q-page padding> 
        <q-card class="q-pa-md"> 
            <q-card-section><div class="text-h6">Authentication</div></q-card-section> 
            <q-card-section> 
                <p>UID: {{ authStore.uid }}</p> 
                <p>Username: {{ authStore.username }}</p> 
                <p>Status: {{ authStore.loginStatus }}</p> 
                <p>{{ authStore.welcomeMessage }}</p> 
            </q-card-section> 
            <q-card-actions> 
                <q-btn color="primary" label="Login" @click="authStore.login('Kim')" /> 
                <q-btn color="negative" label="Logout" @click="authStore.logout()" /> 
            </q-card-actions> 
        </q-card> 
    </q-page> 
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
const authStore = useAuthStore() 
</script>