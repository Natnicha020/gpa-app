<!-- CRUD: create, read, update,delete -->
 <template>
    <q-page class="q-pa-md bg-grey-1">
        <div class="row q-col-gutter-md">
            <div class="col-12 col-md-5">
                <q-card flat bordered> 
                    <q-card-section class="bg-primary text-white"> 
                        <div class="text-subtitle1 text-weight-medium">HTTP Methods</div> 
                    </q-card-section>
                    <q-list separator> 
                        <q-item> 
                            <q-item-section> 
                                <q-item-label class="text-weight-bold text-blue"> 1.List All </q-item-label> 
                            </q-item-section> 
                            <q-item-section side> 
                                <q-btn color="blue" label="Fetch All"  @click="handleFectchAll" :loading="Isloading" /> 
                            </q-item-section> 
                        </q-item>
                         <q-item> 
                            <q-item-section> 
                                <q-item-label class="text-weight-bold text-green"> 2.Create </q-item-label> 
                            </q-item-section> 
                            <q-item-section side> 
                                <q-btn color="green" label="Create (POST)"  @click="handleCreate" /> 
                            </q-item-section> 
                        </q-item> 
                        
                        <q-item> 
                            <q-item-section> 
                                <q-item-label class="text-weight-bold text-orange"> 3.Update </q-item-label> 
                            </q-item-section> 
                            <q-item-section side> 
                                <q-btn color="orange" label="Update"  @click="handleUpdate" /> 
                            </q-item-section> 
                        </q-item> 
 
                        <q-item> 
                            <q-item-section> 
                                <q-item-label class="text-weight-bold text-red"> 4. DELETE</q-item-label> 
                            </q-item-section> 
                            <q-item-section side> 
                                <q-btn color="red" label="Delete" @click="handleDelete(1)" /> 
                            </q-item-section> 
                        </q-item> 
 
                        <q-item> 
                            <q-item-section> 
                                <q-item-label class="text-weight-bold text-purple"> 5.Filter</q-item-label> 
                            </q-item-section> 
                            <q-item-section side> 
                                <q-btn color="purple" label="Filter"  @click="handleFilter(5)" :loading="Isloading" /> 
                            </q-item-section> 
                        </q-item> 
 
                        <q-item> 
                            <q-item-section> 
                                <q-item-label class="text-weight-bold text-teal"> 6. GET comments </q-item-label> 
                            </q-item-section> 
                            <q-item-section side> 
                                <q-btn color="teal" label="Get Comments" @click="handleFetchComments(1)" /> 
                            </q-item-section> 
                        </q-item> 
                    </q-list> 
                </q-card>      
            </div>
              <div class="col-12 col-md-7"> 
                <q-card flat bordered> 
                    <q-card-section class="bg-grey-9 text-white row justify-between  items-center q-py-xs"> 
                        <div class="text-subtitle2"><q-icon name="terminal" />  Live UI Data Monitor</div> 
                        <div class="text-caption text-grey-4"> Total: {{ postItems.length }} records</div> 
                    </q-card-section> 
 
                    <q-card-section v-if="Isloading" class="text-center q-pa-xl"> 
                        <q-spinner-matrix color="primary" size="3rem" /> 
                        <div class="q-mt-sm text-grey-6">Syncing data with server...</div> 
                    </q-card-section> 
 
                    <q-card-section v-else> 
                        <div v-if="nestedComments.length > 0" class="q-mb-md"> 
                            <q-banner dense class="bg-teal-1 text-teal-9  rounded-borders q-mb-sm"> 
                                <q-icon name="comment" /> Comments of Post ID: 1 
                                <template v-slot:action> 
                                    <q-btn flat label="Close Comments" color="teal"  @click="nestedComments = []" /> 
                                </template> 
                            </q-banner> 
                            <q-list bordered separator class="bg-white rounded-borders"> 
                                <q-item v-for="comment in nestedComments" :key="comment.id"> 
                                    <q-item-section> 
                                        <q-item-label class="text-weight-bold"> {{ comment.name }} ({{ comment.email }}) </q-item-label> 
                                        <q-item-label caption>{{ comment.body }} </q-item-label> 
                                    </q-item-section> 
                                </q-item> 
                            </q-list> 
                        </div> 
                        <div v-if="postItems.length === 0"  
                        class="text-center q-pa-xl text-grey-5"> 
                            <q-icon name="layers_clear" size="4rem" /> 
                            <div class="text-h6 q-mt-sm">No Data</div> 
                        </div> <div v-else class="row q-col-gutter-sm"> 
                            <div v-for="item in postItems.slice(0, 6)" :key="item.id"  class="col-12 col-sm-6"> 
                                <q-card flat bordered class="bg-white text-dark"> 
                                    <q-card-section class="q-pa-sm"> 
                                        <q-badge :color="item.id > 100 ? 'green' : 'blue'"  class="q-mb-xs">ID: {{ item.id  }}</q-badge> 
                                        <q-badge color="purple" class="q-ml-xs q-mb-xs"> User: {{ item.userId }}</q-badge> 
                                        <div class="text-weight-bold text-subtitle2  ellipsis">{{ item.title }}</div> 
                                        <div class="text-caption text-grey-7 line-clamp-2  q-mt-xs">{{ item.body }}</div> 
                                    </q-card-section> 
                                </q-card> 
                            </div> 
                        </div> 
                    </q-card-section> 
                </q-card> 
            </div> 
 
        </div> 
    </q-page> 
</template> 
 <script setup>
import { usePostsStore } from '@/stores/post-store';
import { useQuasar } from 'quasar';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const  $q = useQuasar()
const store = usePostsStore()
const { postItems, Isloading } = storeToRefs(store)
const nestedComments  = ref([])


const handleFectchAll = async () => {
    nestedComments .value = []
    await store.fetchAllPosts()
    $q.notify({
        type: 'positive',
        message: 'Data fectched success',
        position: 'bottom-right'
    })
}
const handleCreate = async () => { 
    const newPostData = {
    title: 'New Post',
    body: 'body of my post',
    userId: 67
}
    await store.createNewPost(newPostData) 
    $q.notify({
    type: 'positive',
    message: 'Data fectched success',
    icon: 'clound_done'
}) 
}
const handleUpdate = async () => { 
    const updatedData = { 
    title: 'update',
    body: 'six seven',
    userId: 6767
    } 
    await store.updateWholePost(1, updatedData) 
    $q.notify({  
    type: 'positive',  
    message: 'date updated successfully!',  
    icon: 'sync' }) 
} 

const handleDelete = async (id) => { 
    await store.deletePost(id) 
    $q.notify({  
    type: 'negative',  
    message: `date id: ${id} delete successfully!`,  
    icon: 'delete' })
} 
const handleFilter = async (userId) => { 
    nestedComments.value = [] 
    await store.filterPosts(userId) 
    $q.notify({  
    color: 'purple',  
    textcolor: 'white',  
    message: `Filtering ID: ${userId} success`,  
    icon: 'filter_list' }) 
}

const handleFetchComments = async (id) => { 
    const comments = await store.fetchComments(id) 
    if (comments) { 
        nestedComments.value = comments 
        $q.notify({  
    type: 'positive',  
    message: `Comments for Post ID: ${id} loaded successfully`,  
    icon: 'forum' }) 
    } 
} 
</script>