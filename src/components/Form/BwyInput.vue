<template>
    <div class="bwy-form-input">
        <div class="bwy-input">
            <div class="bwy-input-label">
                <span v-if="label">{{ label }}</span>
                <span v-if="isRequired" class="bwy-input-required">*</span>
            </div>
            <div class="bwy-input-main">
                <input autocomplete="off" :value="modelValue" :disabled="isDisabled" :placeholder="placeholder" :type="type" @input="handleChange" @blur="handleBlur">
            </div>
        </div>
        <div class="bwy-input-message">
            <div v-if="message" class="bwy-input-text">{{ message || '1111' }}</div>
        </div>
    </div>
</template>

<script setup>
import {computed,inject,toRefs,ref,watch} from 'vue'

const message = ref('')

let props = defineProps({
    label: {
        type : String,
        default:''
    },
    modelValue: {
        type : String,
        required: true
    },
    disabled: {
        type: Boolean
    },
    placeholder: {
        type : String,
        default: ''
    },
    type : {
        type : String,
        default: 'text'
    },
    name : {
        type: String,
    }
})

const {name} = toRefs(props)
// 接收值
const emit = defineEmits(['update:modelValue','change'])
// 是否禁用
const isDisabled = computed(() => props.disabled)
// 是否必填
const isRequired = computed(() => {
    if(!name.value) {
        return false
    }
    if(rules[name.value]) {
       return rules[name.value].required ? true : false
    } else {
        return false
    }
})
// 父组件传值
const {rules,form,updateForm} = inject('bwyForm')
watch(() => rules , () => {
    if(name.value) {
        if(rules[name.value] && rules[name.value].required && rules[name.value].error) {
            message.value = rules[name.value].message || '请输入表单'
        }else {
            message.value = ''
        }
    }else {
        message.value = ''
    }
} , {deep: true})
// 表单输入
const handleChange = (e) => {
    if(name.value) {
        if(rules[name.value] && rules[name.value].required) {
            if(e.target.value) {
                message.value = ''
                updateForm(name.value)
            }
        }
    }
    emit('update:modelValue' , e.target.value)
    emit('change' , e.target.value)
}
// 表单失去焦点
const handleBlur = () => {
    if(name.value) {
        if(rules[name.value] && rules[name.value].required) {
            if(!form[name.value]) {
                message.value = rules[name.value].message || '请输入表单'
            }else if(rules[name.value].validator) {
                message.value = rules[name.value].validator(form[name.value])?'':(rules[name.value].message || '请输入表单')
            }else{
                message.value = ''
            }
        }else {
            message.value = ''
        }
    }else {
        message.value = ''
    }
}
</script>


<style>
.bwy-input{
    display: flex;
    align-items: center;
}
.bwy-input-main{
    min-width: 280px;
    min-height: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: .5s;
}
.bwy-input input{
    width: 280px;
    height: 40px;
    border: none;
    border-radius: 4px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
    box-sizing: border-box;
    padding: 0 16px;
    font-size: 16px;
    color: #1f1f1f;
    letter-spacing: 1px;
    line-height: 40px;
}
.bwy-input-message{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.bwy-input-text{
   width: 280px;
   text-align: left;
   font-size: 14px;
   letter-spacing: 1px;
   color: #f21a0b;
   margin-top: 6px;
}

.bwy-input input:focus{
    outline: none;
    transition: .5s;
    box-shadow: rgba(33, 135, 237, 0.5) 0px 1px 6px;
}
.bwy-input input::-webkit-input-placeholder{
    font-size: 16px;
    color: #dbdbdb;
    letter-spacing: 1px;
    line-height: 40px;
}
.bwy-input input[type="password"]::-ms-reveal{
 display:none
}
.bwy-input-label{
    font-size: 16px;
    color: #1f1f1f;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 40px;
    margin-right: 14px;
}
.bwy-input-required{
    color: #f21a0b;
    font-size: 20px;
    margin-left: 2px;
}
</style>