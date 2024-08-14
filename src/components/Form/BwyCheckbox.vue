<template>
  <div class="checkbox-bwy" @click="handleUpdate"> 
    <input :checked="modelValue" type="checkbox" class="bwy-checkbox" :style="{
      width: parseSizeString(size),
      height: parseSizeString(size),
      '--primary-color' : color
    }">
    <span class="checkbox-bwy-text" :style="{
      fontSize: parseSizeString(size),
      lineHeight: parseSizeString(size),
      color : modelValue?color:'#1f1f1f',
      marginLeft: '6px',

    }">{{ label }}</span>
  </div>
</template>

<script setup>
import {toRefs} from 'vue'
import {parseSizeString} from '../../common/index'
const props = defineProps({
  modelValue : {
    type : Boolean,
    default : false
  },
  label : {
    type : String,
    default : ''
  },
  size : {
    type : [String,Number],
    default : '16px'
  },
  color : {
    type : String,
    default : '#1677ff'
  }
})

const {modelValue} = toRefs(props)

const emit = defineEmits(['update:modelValue' , 'change'])

const handleUpdate = (event) => {
  emit('update:modelValue' , !modelValue.value)
  emit('change' , modelValue.value)
}
</script>

<style>
.checkbox-bwy{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.checkbox-bwy-text{
  letter-spacing: 1px;
}
.bwy-checkbox {
  --primary-color: #1677ff;
  --secondary-color: #fff;
  --primary-hover-color: #4096ff;
  /* checkbox */
  --checkbox-diameter: 20px;
  --checkbox-border-radius: 2px;
  --checkbox-border-color: #d9d9d9;
  --checkbox-border-width: 1px;
  --checkbox-border-style: solid;
  /* checkmark */
  --checkmark-size: 1.2;
}

.bwy-checkbox, 
.bwy-checkbox *, 
.bwy-checkbox *::before, 
.bwy-checkbox *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.bwy-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  /* width: var(--checkbox-diameter);
  height: var(--checkbox-diameter); */
  border-radius: var(--checkbox-border-radius);
  background: var(--secondary-color);
  border: var(--checkbox-border-width) var(--checkbox-border-style) var(--checkbox-border-color);
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

.bwy-checkbox::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  border-radius: inherit;
  opacity: 0;
  -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
}

.bwy-checkbox::before {
  top: 40%;
  left: 50%;
  content: "";
  position: absolute;
  width: 4px;
  height: 7px;
  border-right: 2px solid var(--secondary-color);
  border-bottom: 2px solid var(--secondary-color);
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  opacity: 0;
  -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),opacity 0.1s;
  -o-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),opacity 0.1s;
  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),opacity 0.1s;
}

/* actions */

.bwy-checkbox:hover {
  border-color: var(--primary-color);
}

.bwy-checkbox:checked {
  background: var(--primary-color);
  border-color: transparent;
}

.bwy-checkbox:checked::before {
  opacity: 1;
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
}

.bwy-checkbox:active:not(:checked)::after {
  -webkit-transition: none;
  -o-transition: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: none;
  opacity: 1;
}
</style>
