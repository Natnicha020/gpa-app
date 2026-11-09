<template> 
    <q-page padding> 
        <div class="text-h4 q-mb-lg">My Profile</div> 
        <div v-if="!profile" class="row justify-center q-mt-xl"> 
            <q-spinner-dots color="primary" size="40px" /> 
        </div> 
        <q-card bordered flat v-else> 
            <q-card-section> 
                <div><strong>Name:</strong> {{ profile.name }}</div> 
                <div><strong>Role:</strong> {{ profile.role }}</div> 
            </q-card-section> 
        </q-card> 
    </q-page> 
</template> 
 
<script setup> 
import { onMounted, ref } from 'vue' 
import { getProfile } from '@/services/auth.service' 
 
const profile = ref(null) 
 
onMounted(async () => { 
    const response = await getProfile() 
    profile.value = response.data.data 
}) 
</script> 