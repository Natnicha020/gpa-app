import { defineStore } from "pinia"
import { ref } from 'vue'
import { api } from '@/boot/axios'

export const useSubjectsStore = defineStore('subjects', () => { 
    const subjects = ref([]) 
 
    async function fetchAll() { 
        try { 
            const response = await api.get('/subjects') 
            subjects.value = response.data 
        } catch (error) { 
            console.error('Fetch Error:', error) 
        } 
    } 
 
    return { subjects, fetchAll } 
})