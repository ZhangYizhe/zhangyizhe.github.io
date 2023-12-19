<script setup>
import {onMounted, reactive} from "vue";
import { useProjectsStore } from "@/data/useProjectsStore";
import { useConfigStore } from "@/data/useConfigStore";

const config = useConfigStore();
const projects = useProjectsStore();

onMounted(() => {
  config.tag = 'projects';
})

function openUrl(url) {
  window.open(url, '_blank', 'noreferrer')
}

</script>

<template>
  <div style="background: #F8FAFC">
    <section class="container">
      <p class="big-title py-6">
        Carefully crafted <span class="big-title-color">projects</span>
      </p>

      <div class="columns pb-6 is-multiline projects-canvas">
        <div class="column is-6 mb-4"  v-for="project in projects.projects">
          <div class="project-card" @click="openUrl(project.link)">
            <div class="columns is-multiline is-mobile px-6 py-5">
              <div class="column is-narrow">
                <div class="project-image" style="overflow: clip">
                  <img :src="project.image">
                </div>
              </div>
              <div class="column">
                <p class="project-title">
                  {{ project.title }}
                </p>
                <p class="project-description">
                  {{ project.description }}
                </p>
                <div class="columns is-multiline is-mobile my-3 ml-0">
                  <div class="column is-narrow project-tag mr-3" v-for="item in project.platforms">
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 960px) {
  .projects-canvas {
    padding-left: 25px;
    padding-right: 25px;
  }
}

.big-title {
  text-align: center;
  font-size: max(25px, 3.5vw);
  color: black;
}
.big-title-color {
  background: -webkit-linear-gradient(0deg, #1A779D, #30E699);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(159, 153, 153, 0.5);
  cursor: pointer;
  transition: box-shadow ease-in-out 200ms;
  height: 100%;
}

.project-card:hover {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(159, 153, 153, 0.5);
}

.project-image {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(159, 153, 153, 0.5);
}

.project-title {
  font-size: max(20px, 1.5vw);
  font-weight: bold;
}

.project-description {
  font-size: max(15px, 1.1vw);
}

.project-tag {
  font-size: 10px;
  font-weight: bold;
  background: #bcdeff;
  padding: 2px 10px 2px 10px;
  border-radius: 10px;
}
</style>