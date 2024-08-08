<template>
  <div :class="`iconfont ${icon}`" :style="{fontSize: parseSizeString(size,unit),color: color,...parseStyle(iconStyle)}" @click="handleClick">
    <!-- -->
  </div>
</template>

<script setup>
import {parseSizeString , parseStyle} from '../common/index.js'

const props = defineProps({
    icon : {
        type : String,
        default : ''
    },
    size : {
        type : [String,Number],
        default : '16px'
    },
    color : {
        type : String,
        default : '#1f1f1f'
    },
    unit : {
        type : String,
        default : 'px'
    },
    iconStyle : {
        type : [Object,String],
        default : ''
    }
})

const emit = defineEmits(['click'])

const handleClick = () => {
    emit('click')
}
</script>
