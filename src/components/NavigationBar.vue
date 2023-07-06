<script setup>
import { useConfigStore } from "@/data/useConfigStore";
import {computed} from "vue";

const config = useConfigStore()

const tag = computed(() => config.tag)
const isExpended = computed(() => config.isExpended)

</script>

<template>
    <div class="navigationBar">
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">
                        <h1 class="title is-4">Yizhe ZHANG</h1>
                    </a>

                    <a role="button" :class="['navbar-burger', isExpended ? 'is-active' : '']" aria-label="menu"
                       aria-expanded="false" @click="config.isExpended = !config.isExpended">
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
                        <!--            <router-link to="/" :class="['navbar-item', tag === 'projects' ? 'is-active' : '']">-->
                        <!--              Projects-->
                        <!--            </router-link>-->
                        <router-link to="/language" :class="['navbar-item', tag === 'language' ? 'is-active' : '']">
                            Language
                        </router-link>
                        <router-link to="/chat" :class="['navbar-item', tag === 'chat' ? 'is-active' : '']">
                            Chat
                        </router-link>
<!--                        <router-link to="/audio" :class="['navbar-item', tag === 'audio' ? 'is-active' : '']">-->
<!--                          Speech To Text<span-->
<!--                            style="font-size: 10px; margin-left: 5px; padding: 2px 5px; background-color: green; color: white; border-radius: 5px">Beta</span>-->
<!--                        </router-link>-->
<!--                        <router-link to="/imageai" :class="['navbar-item', tag === 'imageai' ? 'is-active' : '']">-->
<!--                            Image AI<span-->
<!--                                style="font-size: 10px; margin-left: 5px; padding: 2px 5px; background-color: green; color: white; border-radius: 5px">Beta</span>-->
<!--                        </router-link>-->
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>


<style scoped>

.navigationBar {
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 100;
}

</style>