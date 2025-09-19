<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';

const colors = ["#7E87D9", "#B8C201", "#D976C2"];

const projects = [
    {
        title: "Digital Concierge",
        desc: "A chatbot to assist users with common questions and tasks. Integrated with Trello API to automate internal follow-up tasks.",
        tags: ["AWS CDK", "AWS Lex", "Lambda", "Bedrock", "Typescript", "Trello API"],
        link: "/tech/digital-concierge"
    },
    {
        title: "Loti Christmas Card",
        desc: "Customised e-card for users to send Christmas greetings to their loved ones.",
        tags: ["Vue", "AWS S3"],
        link: "/tech/loti-christmas-card"
    },
    {
        title: "Animated Articles",
        desc: "Cross-functional implementation of articles with animation to improve engagement.",
        tags: ["Wordpress", "GSAP", "PixiJS"],
        link: "/tech/animated-articles"
    },
    {
        title: "Conference Registration Web App",
        desc: "A web application to register conference attendees and display real-time statistics for crowd management.",
        tags: ["AWS Amplify", "DynamoDB", "Vue"],
        link: "/tech/conference-registration-web-app"
    },
    // {
    //     title: "Whatsapp Business API",
    //     desc: "An implementation of the WhatsApp Business API to automate the sending of audio resources to 500 seniors.",
    //     tags: ["AWS CDK", "Lambda"],
    //     link: "/tech/whatsapp-business-api"
    // }
];
</script>
<template>
    <div id="tech-wrapper" class="view-wrapper">
        <div id="tech-header"><h1>Tech projects</h1></div>
        <div id="tech-desc"><p class="subheading">Software and web development projects that I have worked on</p></div>
        <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :title="project.title"
            :desc="project.desc"
            :tags="project.tags"
            :color="colors[index % colors.length]"
            :link="project.link"
            @click="$router.push(project.link)"
        />
    </div>
</template>
<style scoped>
#tech-wrapper {
    background-color: #FFF9CE;
    padding-bottom: 70px;
}
#tech-header {
    font-size: 3.5rem;
    margin: 1rem 0px;
}
#tech-desc p.subheading {
    font-size: 2rem;
    margin-bottom: 1rem;
}
</style>