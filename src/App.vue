<template>
  <NavigationBar/>

  <router-view></router-view>

  <FooterView/>
</template>

<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterView from "@/components/FooterView.vue";

</script>

<style scoped>

</style>
