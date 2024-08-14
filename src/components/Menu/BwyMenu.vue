<template>
  <div :class="`bwy-menu${mode?'_'+mode:''}`" :style="{
    width: !mode?parseSizeString(width):'100%',
    height: !mode?'100%':parseSizeString(height)
  }">
    <slot name="title"></slot>
    <slot></slot>
  </div>
</template>

<script setup>
import {parseSizeString} from '../../common/index'
const props = defineProps({
    width : {
        type: [String,Number],
        default: '200px'
    },
    height: {
        type: [String,Number],
        default: '50px' 
    },
    mode: {
        type: String,
        default: ''
    }
})
</script>

<style>
.bwy-menu{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.bwy-menu_horizontal {
    display: flex;
    align-items: center;
}
</style>