<template>
  <div class="login">
    <div class="login-container">
        <img class="login-image" src="../assets/login/login_back.png" alt="">
        <!-- 登录 -->
        <div class="login-main">
          <login-password></login-password>
        </div>
        <!-- 注册 -->
        <div>

        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginPassword from '../templates/login/LoginPassword.vue';
import '@/utils/colourBar.js'
</script>

<style lang="scss">
@import "../styles/login.scss";
</style>
