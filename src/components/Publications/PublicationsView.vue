<script setup>
import {computed, onMounted, reactive} from "vue";
import { useConfigStore } from "@/data/useConfigStore";
import { usePublicationsStore } from "@/data/usePublicationsStore";

const config = useConfigStore();
const publicationsStore = usePublicationsStore();

const publications = computed(() => {
  return publicationsStore.publications
})

onMounted(() => {
  config.tag = 'publications';
})

</script>

<template>
  <div style="background: #F8FAFC">
    <section class="container" style="min-height: calc(100vh - 215px)">
      <p class="big-title py-6">
        Selected <span class="big-title-color">publications</span>
      </p>
      <div class="publications-canvas pb-3">
        <p class="notation-content pb-2">
          + indicates equal contributions, and * indicates the corresponding author.
        </p>

        <div class="columns is-multiline is-gapless">
          <div class="column is-full my-2" v-if="publications.length === 0">
            <p>
              Waiting for update...
            </p>
          </div>
          <div class="column is-full my-2" v-for="(publication, index) in publications" v-else>
            <p>
              {{ index + 1 }}. <span v-html="publication.title"></span>
            </p>
            <p>
              <a v-for="link in publication.links" :href="link.link" target="_blank" style="color: green">[{{link.title}}] </a>
            </p>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 960px) {
  .publications-canvas {
    padding-left: 25px;
    padding-right: 25px;
  }
}

.big-title {
  text-align: center;
  font-size: max(30px, 3.5vw);
  color: black;
}
.big-title-color {
  background: -webkit-linear-gradient(0deg, #7ad906, #30e685);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.notation-content {
  font-size: max(15px, 1vw);
  color: gray;
}

</style>