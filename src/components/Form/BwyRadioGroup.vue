<template>
  <div class="bwy-radio-group" @click="handleChang">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, provide,watch,toRefs,onMounted } from 'vue';  

const currentValue = ref(null);  

const props = defineProps({  
  modelValue: {  
    type: [String, Number, Boolean],  
    default: null  
  },
  size : {
    type : [String,Number],
    default : '14px'
  },
  color : {
    type : String,
    default : '#1677ff'
  }
});  

const {modelValue,size,color} = toRefs(props)

provide('bwyRadioGroup', {  
  currentValue,  
  size : size.value,
  color: color.value,
  updateValue: (value) => {  
    currentValue.value = value;  
  }  
}); 
  
watch(() => props.modelValue, (newVal) => {  
  currentValue.value = newVal;  
});  
  
const emit = defineEmits(['update:modelValue','change']);  
  
watch(currentValue, (newVal) => {  
  emit('update:modelValue', newVal);  
  emit('change' , currentValue.value)
}); 

onMounted(() => {
    currentValue.value = modelValue.value
})
</script>

<style>
.bwy-radio-group{
    display: flex;
    align-items: center;
}
</style>