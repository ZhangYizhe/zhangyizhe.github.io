<template>
  <div class="navigationBar">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <h1 class="title is-4">Elecoxy.com</h1>
          </a>

          <a role="button" :class="['navbar-burger', isExpended ? 'is-active' : '']" aria-label="menu" aria-expanded="false" @click="isExpended = !isExpended">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div :class="['navbar-menu', isExpended ? 'is-active' : '']">
          <div class="navbar-start">
            <router-link to="/" :class="['navbar-item', tag === 'home' ? 'is-active' : '']">
              Home
            </router-link>
            <router-link to="/chat" :class="['navbar-item', tag === 'chat' ? 'is-active' : '']">
              Chat
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import {store} from "@/data/store";

export default {
  name: "NavigationBar",
  data() {
    return {
      store,
      isExpended: false
    }
  },
  computed: {
    tag() {
      return store.tag
    }
  }
}
</script>

<style scoped>

.navigationBar {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;
}

</style>