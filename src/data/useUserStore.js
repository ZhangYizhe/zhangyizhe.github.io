import {defineStore} from "pinia";

export const useUserStore = defineStore('user',{
    state: () => ({
        avatar: '/img/home/author.png',
        name: 'Yizhe ZHANG',
        title: 'Senior Research Assistant | HKBU',
        mail: 'yizhezhang[at]hkbu.edu.hk',
        location: 'Hong Kong SAR, China',
        website: 'https://elecoxy.com',
        github: 'https://github.com/zhangyizhe',
        linkedin: 'https://www.linkedin.com/in/zhangyizhe',
        content: {
            title: '👋 Hello , Good Day !',
            description: 'I am a Senior Research Assistant in the Department of Computer Science at Hong Kong Baptist University under the supervision of Prof. CHEN, Li. I received my M.Sc. degree in Data Analytics and Artificial Intelligence from Hong Kong Baptist University in 2022. In 2018, I received my B.Sc. degree in Computer Science and Technology from ZHIXING College of Northwest Normal University, China.<br><br>Research Interests: Conversational AI, Recommender Systems, Human-Computer Interaction, Explainable AI, Software Engineering.<br><br>Our <a style="background: -webkit-linear-gradient(-90deg, #1A779D, #30E699); -webkit-background-clip: text; -webkit-text-fill-color: transparent;" href="https://hci.comp.hkbu.edu.hk" target="_blank">"Positive Intelligence" Lab</a> conducts interdisciplinary research on intelligent technology for well-being.',
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
                title: 'Senior Research Assistant at HKBU',
                isActive: true,
                timeline: '2023 - Present',
                description: 'Conversation Recommender Systems.',
            },
            {
                title: '2022 - Research Assistant at HKBU',
                isActive: false,
                timeline: '08/2022 - 07/2023',
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
    })
})