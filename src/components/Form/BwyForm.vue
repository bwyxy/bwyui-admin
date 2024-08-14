<template>
  <form class="bwy-form">
    <slot></slot>
  </form>
</template>

<script setup>
import {provide,toRefs,ref} from 'vue'

const isError = ref(false)
const props = defineProps({
  props:{
    type : Array
  },
  rules: {
    type: Object,
    default() {
      return {}
    }
  },
  form: {
    type: Object,
    default() {
      return {}
    }
  }
})

const {rules,form} = toRefs(props)
// 更新form表单
const updateForm = (value) => {
  rules.value[value].error = false
}
// 提交表单
const submit = async (value) => {
  Object.keys(form.value).forEach(item => {
    if(rules.value[item] && rules.value[item].required && !form.value[item]) {
      isError.value = true
      rules.value[item].error = true
    }
    if(rules.value[item].required && rules.value[item].validator) {
      rules.value[item].error = !rules.value[item].validator(form.value[item])
    }
  })
  let errors = []
  Object.keys(rules.value).forEach(item => {
    if(rules.value[item].error) {
      errors.push(false) 
    }else {
      errors.push(true)
    }
  })

  return errors.every(item => item)
}

provide('bwyForm' , {
  rules: rules.value,
  form: form.value,
  isError: isError.value,
  updateForm
})

defineExpose({ submit })
</script>

<style>
.bwy-form .bwy-form-input {
  margin: 16px 0;
}
</style>
