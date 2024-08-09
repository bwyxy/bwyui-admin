<template>
  <div class="login">
    <div class="login-container">
        <img class="login-image" src="../assets/login/login_back.png" alt="">
        <div>
          <login-password></login-password>
        </div>
        <!-- <div>
            <div>欢迎登录</div>
            <bwy-button>登录</bwy-button>
        </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginPassword from '../templates/login/LoginPassword.vue'
import '@/utils/colourBar.js'
</script>

<style lang="scss">
@import "../styles/login.scss";
</style>
