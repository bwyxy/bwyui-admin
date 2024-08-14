<script setup lang="ts">
import LayoutPage from './layout/index.vue'
const route = useRoute()

const isLoginPage = computed(() => route.path == '/login')
</script>

<template>
  <router-view v-if="isLoginPage"/>
  <layout-page v-if="!isLoginPage"></layout-page>
</template>

<style lang="scss">
@import "./styles/global.scss";
</style>
