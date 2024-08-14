<template>
  <div class="login-password">
    <div class="login-title">欢迎登录</div>
    <div style="margin: 20px 0;">
      <bwy-form :form="forms" :rules="rules">
        <bwy-input v-model="forms.account" label="账号" name="account" placeholder="账号"/>
        <bwy-input v-model="forms.password" label="密码" name="password" type="password" placeholder="账号"/>
      </bwy-form>
    </div>
    <bwy-button btnStyle="width: 220px;height: 35px;" @click="submit">登录</bwy-button>
  </div>
</template>

<script setup>


const form = ref(2)

let forms = ref({
  account : '',
  password : ''
})

const rules = reactive({
  account : {
    required : true,
    message : '请输入账号'
  },
  password: {
    required : true,
    message : '请输入密码'
  }
})

const submit= () => {
  form.value.handleSubmit()
}

</script>

<style lang="scss">
.login-title{
  width: 320px;
  height: 35px;
  color: #1f1f1f;
  font-size: 20px;
  letter-spacing: 2px;
  border-bottom: 1px solid #dbdbdb;
  text-align: left;
}
.login-password{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
