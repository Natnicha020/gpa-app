<template>
  <div class="q-pa-md">
    <q-btn color="primary" label="Delete" @click="confirmDialog = true" />
  </div>
  <q-dialog v-model="confirmDialog" persistent>
    <q-card style="min-width: 300px">
      <q-card-section>
        <q-icon name="warning" color="orange" size="40px" class="q-mr-md"></q-icon>
        <div>
          <div class="text-h6">Confirm</div>
          <div class="text-body2">Are you sure to delete?</div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn label="Cancel" color="grey" v-close-popup></q-btn>
        <q-btn label="Confirm Delete" color="negative" @click="deleteAction"></q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from 'vue'
const confirmDialog = ref(false)
const deleteAction = () => {
  console.log('Delete suscess')
  confirmDialog.value = false
}
</script>