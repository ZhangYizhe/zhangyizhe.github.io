<script setup>
import { useConfigStore } from "@/data/useConfigStore";
import {computed} from "vue";

const config = useConfigStore()

const isDisplay = computed(() => config.tag !== 'chat')
</script>

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

<style scoped>

</style>