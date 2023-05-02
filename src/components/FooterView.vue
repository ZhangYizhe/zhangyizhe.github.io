<template>
  <footer class="footer py-6" v-if="isDisplay">
    <div class="content has-text-centered">
      <p>
        <strong>Elecoxy.com</strong> Developed by <a href="https://elecoxy.com">YIZHE ZHANG</a>
      </p>
        <p>
            <a href="/#/privacy-policy">Privacy Policy</a>
        </p>
    </div>
  </footer>
</template>

<script>
import {store} from "@/data/store";

export default {
  name: "FooterView",
  data() {
    return {
      store,
    }
  },
  computed: {
    isDisplay() {
      if (store.tag === 'chat') {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>

</style>