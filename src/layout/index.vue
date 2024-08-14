<template>
  <div class="container">
    <bwy-menu></bwy-menu>
    <div class="container-main">
      <div class="container-header">

      </div>
      <div class="container-center">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.container{
  width: 100%;
  height: 100%;
  display: flex;
}
.container-main{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.container-header{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dbdbdb;
}
.container-center{
  flex: 1;
}
</style>