import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/boot/axios'
export const usePostsStore = defineStore('posts', () => {
    const postItems = ref([])
    const Isloading = ref(false)
    async function fetchAllPosts() {
        Isloading.value = true
        try {
            const response = await api.get('/posts')
            postItems.value = response.data
            console.log('Listing All Success:', response.data)
        } catch (error) {
            console.error('Fetch Error:', error)
        } finally {
            Isloading.value = false
        }
    } 
    async function createNewPost(newPost) { 
        try { 
            // const response = await api.post('/posts', newPost, { 
            //     headers: { 
            //         'Content-type': 'application/json; charset=UTF-8', 
            //     } 
            // }) 
            const response = await api.post('/posts', newPost)
            console.log('Creating Success (Look at ID: 101):', response.data) 
            postItems.value.unshift(response.data) 
        } catch (error) { 
            console.error('Create Error:', error) 
        } 
     
    } 
     async function updateWholePost(id, updatedData) { 
        try { 
            // const response = await api.put(`/posts/${id}`, updatedData, { 
            //     headers: { 
            //         'Content-type': 'application/json; charset=UTF-8', 
            //     } 
            // })
             const response = await api.put(`/posts/${id}`, updatedData)             
            console.log('Updating (PUT) Success:', response.data) 
            const index = postItems.value.findIndex(item => item.id === id) 
            if (index !== -1) { 
                postItems.value[index] = response.data 
            } 
        } catch (error) { 
            console.error('Update Error:', error) 
        } 
    }

    async function deletePost(id) { 
        try { 
            await api.delete(`/posts/${id}`) 
            console.log(`Deleting Success at ID: ${id}`) 
            postItems.value = postItems.value.filter(item => item.id !== id) 
        } catch (error) { 
            console.error('DELETE Error:', error) 
        } 
    } 
 async function filterPosts(userId) { 
        Isloading.value = true 
        try { 
            const response = await api.get(`/posts?userId=${userId}`) 
            postItems.value = response.data 
            console.log(`Filtering Success for User ${userId}:`, response.data) 
        } catch (error) { 
            console.error('Filter Error:', error) 
        } finally { 
            Isloading.value = false 
        } 
    }
    
        async function fetchComments(id) { 
        try { 
            const response = await api.get(`/posts/${id}/comments`) 
            console.log(`Comments for Post ${id}:`, response.data) 
            return response.data 
        } catch (error) { 
            console.error('Nested Fetch Error:', error) 
        } 
    } 
    return { postItems, Isloading,fetchAllPosts,createNewPost,updateWholePost,deletePost,filterPosts,fetchComments}
})