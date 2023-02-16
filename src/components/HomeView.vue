<template>
  <section class="hero is-link is-fullheight-with-navbar">
    <div class="hero-body">
      <p class="title">
        Developing
      </p>
    </div>
  </section>
</template>

<script>
import {store} from "@/data/store";

export default {
  name: "HomeView",
  data() {
    return {
      store,
    }
  },
  mounted() {
    this.store.tag = 'home';
  }
}
</script>

<style scoped>

</style>