<template>
  <form class="bwy-form" @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<script setup>
import {provide,toRefs} from 'vue'

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

provide('bwyForm' , {
  rules: rules.value,
  form: form.value
})

// 表单确认时
const handleSubmit = (value) => {
  console.log(value)
}

// defineExpose({ handleSubmit })
</script>

<style>
.bwy-form .bwy-form-input {
  margin: 16px 0;
}
</style>
