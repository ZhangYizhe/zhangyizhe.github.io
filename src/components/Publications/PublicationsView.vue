<script setup>
import {onMounted, reactive} from "vue";
import { useConfigStore } from "@/data/useConfigStore";

const config = useConfigStore();

onMounted(() => {
  config.tag = 'publications';
})

</script>

<template>
  <div style="background: #F8FAFC">
    <section class="container">
      <p class="big-title py-6">
        Selected <span class="big-title-color">publications</span>
      </p>
      <div class="publications-canvas pb-3">
        <p class="notation-content pb-2">
          ♱ indicates equal contributions, and * indicates the corresponding author.
        </p>

        <div class="columns is-multiline">
          <div class="column is-full">
            <p>
              Waiting for update...
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