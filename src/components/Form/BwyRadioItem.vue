<template>
  <label class="bwy-radio-item">
    <input
      type="radio"
      :value="value"
      :checked="isChecked"
      @change="handleChange"
      class="radio"
      :disabled="disabled"
      id="radio"
      :style="{
        width : parseSizeString(size),
        height: parseSizeString(size),
        '--color': color
      }"
    />
    <label for="radio" class="radio-box"></label>
    <span class="bwy-radio-item-text" :style="{fontSize: parseSizeString(size),color: disabled?'#ccc':'#1f1f1f'}">{{ label }}</span>
  </label>
</template>  
    
<script setup>
import { inject, computed } from "vue";
import { parseSizeString } from '../../common/index'

const props = defineProps({
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  disabled: {
    type : Boolean,
    default : false
  }
});

const { currentValue, updateValue,size,color } = inject("bwyRadioGroup");

const isChecked = computed(() => currentValue.value == props.value);

function handleChange(event) {
  if (event.target.checked) {
    updateValue(props.value);
  }
}
</script>

<style>
.bwy-radio-item{
    display: flex;
    align-items: center;
}
.bwy-radio-item input[type="radio"] {
    vertical-align: middle;
    appearance: none;
    /* opacity: 0; */
    outline: none;
    margin: 0 4px 0 8px;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bwy-radio-item input[type="radio"]::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: 1px solid #dbdbdb;
}
.bwy-radio-item input[type="radio"]:checked::after {
    position: absolute;
    content: '';
    width: 80%;
    height: 80%;
    background: var(--color);
    border-radius: 50px;
    /* left: 15%;
    top: 15%; */
}
.bwy-radio-item input[type="radio"]:checked::before {
    border: 1px solid var(--color);
}
.bwy-radio-item:nth-of-type(1) input[type="radio"] {
    margin-left: 0;
    border: 1px solid #fff;
    position: relative;
}
.bwy-radio-item-text{
    letter-spacing: 1px;
}

</style>