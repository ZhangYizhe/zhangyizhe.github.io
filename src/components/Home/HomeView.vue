<script setup>
import {onMounted, reactive} from "vue";
import { useUserStore } from "@/data/useUserStore";
import { useConfigStore } from "@/data/useConfigStore";

const config = useConfigStore();
const user = useUserStore();

onMounted(() => {
  config.tag = 'home';
})

</script>

<template>
  <section class="container is-max-desktop">
    <div class="columns p-5">
      <div class="column is-4">
        <div class="columns is-multiline is-gapless">
          <div class="column is-full has-text-centered">
            <img :src="user.avatar" alt="avatar"
                 style="width: 90%; margin-top: 5%; border-radius: 50%; box-shadow: 0 0 15px #e3e3e3">
          </div>
          <div class="column is-full" style="margin-top: 10px">
            <p class="is-size-3" v-html="user.name"></p>
          </div>
          <div class="column is-full" style="margin: 5px 0 5px 0">
            <p v-html="user.title"></p>
          </div>
          <div class="column is-full" style="margin: 5px 0 5px 0">
            <a :href="'mailto:' + user.mail" target="_blank" style="color: #4a4a4a"><p><i class="bi bi-envelope"></i>
              Contact me</p></a>
          </div>
          <div class="column is-full" style="margin: 5px 0 5px 0">
            <a :href="user.github" target="_blank" style="color: #4a4a4a"><p><i class="bi bi-github"></i>
              Github</p></a>
          </div>
          <div class="column is-full" style="margin: 5px 0 5px 0">
            <a :href="user.website" target="_blank" style="color: #4a4a4a"><p><i class="bi bi-browser-safari"></i>
              Website</p></a>
          </div>
          <div class="column is-full" style="margin: 5px 0 5px 0">
            <p style="color: #4a4a4a"><i class="bi bi-geo-alt-fill"></i> {{ user.location }}</p>
          </div>
        </div>
      </div>
      <div class="column is-8">
        <div class="columns is-multiline" style="margin-top: 10px">
          <div class="column is-full">
            <p class="title" v-html="user.content.title"></p>
            <p v-html="user.content.description"></p>
          </div>
          <div class="column is-full" style="padding-top: 30px; padding-bottom: 30px">
            <div class="columns is-multiline">
              <template v-for="item in user.timeline">
                <div class="column is-full p-0 px-3" style="position: relative">
                  <div class="columns is-mobile" >
                    <div class="column is-narrow">
                      <p style="font-weight: bold; font-size: 1.2rem; background-color: white">
                        <i class="bi bi-card-text"></i>
                      </p>
                    </div>
                    <div class="column">
                      <p style="font-weight: bold; font-size: 1.2rem; margin-bottom: 5px">{{item.title}}</p>
                      <span :class="[item.isActive === true ? 'currentP' : '']" style="color: gray">{{item.timeline}}</span>
                      <p style="font-size: 1rem; color: #3f3f3f;  margin-top: 5px">{{item.description}}</p>
                    </div>
                  </div>
                  <div style="position: absolute; width: 1px; margin-left: 0.5rem; top:0; z-index: -1; height: 100%; background-color: #c0c0c0">

                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.currentP {
  background-color: green;
  padding: 4px 6px 4px 6px;
  color: white !important;
  border-radius: 5px;
  font-size: 0.8rem;
}
</style>