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
                      <p style="font-weight: bold; font-size: 1.2rem">{{item.title}}</p>
                      <p style="color: gray">{{item.timeline}}</p>
                      <p style="font-size: 1rem; color: #3f3f3f">{{item.description}}</p>
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

<script>
import {store} from "@/data/store";

export default {
  name: "HomeView",
  data() {
    return {
      store,

      user: {
        avatar: '/public/img/home/author.png',
        name: 'Yizhe ZHANG',
        title: 'Research Assistant | HKBU',
        mail: 'yizhezhang[at]hkbu.edu.hk',
        location: 'Hong Kong SAR, China',
        website: 'https://elecoxy.com',
        github: 'https://github.com/zhangyizhe',
        content: {
          title: '👋 Hello , Good Day !',
          description: 'I am a Research Assistant in the Department of Computer Science at Hong Kong Baptist University under the supervision of Dr. Li Chen. I received my M.Sc. degree in Data Analytics and Artificial Intelligence from Hong Kong Baptist University in 2022. In 2018, I received my B.Sc. degree in Computer Science and Technology from ZHIXING College of Northwest Normal University, China.<br><br>Research Interests: Recommender Systems, Human-Computer Interaction, Software Engineering.<br><br>Our <a href="https://hci.comp.hkbu.edu.hk" target="_blank">"Positive Intelligence" Lab</a> conducts interdisciplinary research on intelligent technology for well-being.',
        },
        skills: [
          {
            title: 'Frontend',
            items: []
          },
          {
            title: 'Backend',
            items: []
          }
        ],
        timeline: [
          {
            title: 'Research Assistant at HKBU',
            isActive: false,
            timeline: '2022 - Currently',
            description: 'Recommender Systems.',
          },
          {
            title: '2021 - Hong Kong Baptist University',
            isActive: false,
            timeline: '2021 - 2022',
            description: 'Studied "MSc of Data Analytics and Artificial Intelligence" in HKBU.',
          },
          {
            title: '2019 - Shenzhen Yazhai Network Co. LTD',
            isActive: false,
            timeline: '06/2019 - 05/2020',
            description: 'iOS Chief Programmer.',
          },
          {
            title: '2018 - FENG.COM',
            isActive: false,
            timeline: '01/2018 - 03/2019',
            description: 'Technical Director & iOS Engineer.',
          },
          {
            title: '2014 - ZHIXING College of Northwest Normal University',
            isActive: false,
            timeline: '2014 - 2018',
            description: 'Studied "BSc in Computer Science and Technology" in ZHIXING College of Northwest Normal University.',
          },
        ]
      }
    }
  },
  mounted() {
    this.store.tag = 'home';
  }
}
</script>

<style scoped>

</style>