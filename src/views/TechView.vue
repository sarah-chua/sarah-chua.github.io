<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { color } from 'motion-v';

const colors = ["#7E87D9", "#B8C201", "#D976C2"];

const projects = [
    {
        title: "Digital Concierge",
        desc: "A chatbot to assist users with common questions and tasks. Integrated with Trello API to automate internal follow-up tasks.",
        tags: ["AWS CDK", "AWS Lex", "Lambda", "Bedrock", "Trello API"]
    },
    {
        title: "Loti Christmas Card",
        desc: "Customised e-card for users to send Christmas greetings to their loved ones.",
        tags: ["Vue"]
    },
    {
        title: "Whatsapp Business API",
        desc: "An implementation of the WhatsApp Business API to automate the sending of audio resources to 500 seniors.",
        tags: ["AWS CDK", "Lambda"]
    },
    {
        title: "Animated Articles",
        desc: "Cross-functional implementation of articles with animation to improve engagement.",
        tags: ["Wordpress", "GSAP", "PixiJS"]
    },
    {
        title: "Conference Registration Web App",
        desc: "A web application to register conference attendees and display real-time statistics for crowd management.",
        tags: ["AWS Amplify", "DynamoDB", "Vue"]
    }
];
</script>
<template>
    <div id="tech-wrapper">
        <div id="tech-header">Tech projects</div>
        <div id="tech-desc">Software and web developement projects that I have worked on</div>
        <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :title="project.title"
            :desc="project.desc"
            :tags="project.tags"
            :color="colors[index % colors.length]"
        />
    </div>
</template>
<style scoped>
#tech-wrapper {
    width: 90vw;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 5% 5% 5%;
    background-color: #FFF9CE;
}
#tech-header {
    font-family: SarahBlock, sans-serif;
    font-size: 3.5rem;
    font-weight: 400;
    margin: 1rem 0px;
    text-align: center;
}
#tech-desc {
    font-family: SarahScript, sans-serif;
    font-size: 2rem;
    line-height: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
}
</style>