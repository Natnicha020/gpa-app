<template>
  <div class="q-pa-md">
    <div class="myfont">Myform</div>
    <q-form ref="myForm">
      <q-input
        v-model="name"
        type="text"
        label="Your Name"
        outlined
        :rules="[(val) => !!val || 'Name require']"
      />
      <q-input
        outlined
        v-model.number="age"
        type="number"
        label="Your Age (1-120)"
        :rules="[
          (val) => (val !== null && val !== '')  ||'Age require',
          (val) => (val >= 1 && val <= 120) || 'Age must be 1-120',
        ]"
        hide-bottom-space
      />
      <q-btn color="primary" @click="onClicked"  label="ADD" class="q-mt-md" />
    </q-form>
  </div>
</template>
<script setup>
import { ref, nextTick } from 'vue'
const name = ref('')
const age = ref(1) // change default value
const myForm = ref(null)
const onClicked = () => {
  if (myForm.value) {
    myForm.value.validate().then(async (success) => {
      if (success) {
        console.log('Name: ' + name.value)
        console.log('Age: ' + age.value)
        name.value = ''
        age.value = 1
        await nextTick()
        myForm.value.resetValidation()
      } else {
        console.log('NOT validate')
      }
    })
  }
}
</script>