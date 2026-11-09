import { defineStore } from "pinia";
import { ref } from 'vue' 
import { api } from '@/boot/axios' 

export const useAlbumStore = defineStore('album', () => { 
  const albums = ref([]) 
  const loading = ref(false) 
  const errorMessage = ref('') 
    async function loadAlbums() { 
    loading.value = true 
    errorMessage.value = '' 
    try { 
      const response = await api.get('/albums') 
      albums.value = response.data 
    } 
    catch (error) { 
      if (error.response) { 
        errorMessage.value = `Server Error (${error.response.status})` 
      } 
      else if (error.request) { 
        errorMessage.value = 'Unable to connect to the server.' 
      } 
      else { 
        errorMessage.value = error.message 
      } 
      console.error(error) 
    } 
    finally { 
      loading.value = false 
    } 
  } 
 
  return { albums, loading, errorMessage, loadAlbums } 
}) 