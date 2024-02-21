<template lang="">
  <AppHeader />
  <!-- <AppMain /> -->

  <router-view></router-view>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  }
}
</script>
<style lang="scss">
  @use '../node_modules/bootstrap/scss/bootstrap.scss' ;
  @use './style/general.scss' as *;
</style>