// stores/authStore.js 
import { defineStore } from 'pinia' 
import { ref, computed } from 'vue' 
 
export const useAuthStore = defineStore('auth', () => { 
    // State 
    const isLoggedIn = ref(false) 
    const username = ref('') 
    const uid = ref(0) 
 
    // Getters 
    const loginStatus = computed(() => { 
        return isLoggedIn.value ? 'Logged In' : 'Logged Out' 
    }) 
 
    const welcomeMessage = computed(() => { 
        return isLoggedIn.value ? `Welcome ${username.value}` : 'Please Login' 
    }) 
 
    // Actions 
    const login = (name) => { 
        isLoggedIn.value = true 
        username.value = name 
        uid.value = 101 
    } 
 
    const logout = () => { 
        isLoggedIn.value = false 
        username.value = '' 
        uid.value = 0 
    } 
 
    return { 
        // State 
        isLoggedIn, username, uid, 
 
        // Getters 
        loginStatus, welcomeMessage, 
 
        // Actions 
        login, logout 
    } 
}, 
{ 
    persist: true
    }
) 