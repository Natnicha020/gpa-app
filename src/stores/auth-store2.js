import { defineStore } from 'pinia' 
import { computed, ref } from 'vue' 
import { login as loginService, getProfile } from '@/services/auth.service' 
 
export const useAuthStore = defineStore('auth2', () => { 
    const user = ref(null) 
    const accessToken = ref(null)
    const loading = ref(false) 
    const errMsg = ref('')
    
    const role = computed(() => user.value?.role ?? null)
    const isAuthenticsted = computed (() => accessToken.value !== null)
    const login = async (username, password) => { 
        loading.value = true
        errMsg.value = ''
       try { 
            const response = await loginService(username, password) 
            accessToken.value = response.data.data.accessToken 
            user.value = response.data.data.user 
            return response 
        } catch (error) { 
            errMsg.value = 
                error.response?.data?.message ?? 'Unable to login.' 
            throw error 
        } finally { 
            loading.value = false 
        } 
    } 
        
    const logout = () => { 
        accessToken.value = null 
        user.value = null 
        errMsg.value = '' 
        loading.value = false 

    } 
    const checkAuth = async () => {
        if (!accessToken.value) {
            return false
        }
        try {
            await getProfile()
            return true
        } catch {
            logout()
            return false
        }
    } 
    return { user, accessToken, login, logout, loading, errMsg, isAuthenticsted, role,checkAuth } 
},
{persist: true},
) 