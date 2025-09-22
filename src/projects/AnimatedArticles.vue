<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue';
import { useImgUrl } from '@/composables/useImgUrl';

const { getImgUrl } = useImgUrl();
</script>
<template>
    <ProjectPage title="Animated Articles">
        <template #proj-info>
            <p>In order to keep readers engaged on longer articles, the team looked into ways to incorporate animations into the design of our articles.</p>
            <p>With every article assigned to me, I brainstormed with the assigned designer possible animations that would add meaning and life to the content.</p>
            <p>Using GSAP and PixiJS, I implemented the animations into our Wordpress site, ensuring that the animations were responsive and the article was readable across all devices.</p>
            <p>Here are a few articles and animations that I implemented:</p>
            <div class="prod-img">
                <a href="https://odb.sg/faith-and-life/why-and-how-should-i-pray-for-my-nations-leaders/" target="_blank"
                rel="noopener noreferrer"><img :src="getImgUrl('fnl_ndp.gif')"></a>
                <span class="subtitle">See full article <a
                href="https://odb.sg/faith-and-life/why-and-how-should-i-pray-for-my-nations-leaders/" target="_blank"
                rel="noopener noreferrer">here</a></span>
            </div>
            <div class="prod-img">
                <a href="https://odb.sg/faith-and-life/online-dating-how-to-avoid-the-pitfalls-and-oddballs/" target="_blank"
                rel="noopener noreferrer"><img :src="getImgUrl('fnl_dating.gif')"></a>
                <span class="subtitle">See full article <a
                href="https://odb.sg/faith-and-life/online-dating-how-to-avoid-the-pitfalls-and-oddballs/" target="_blank"
                rel="noopener noreferrer">here</a></span>
            </div>
            <p>Other articles I implemented:
                <ul>
                    <li><a href="https://odb.sg/faith-and-life/ive-made-my-lasting-power-of-attorney-what-should-i-consider-for-my-end-of-life-care/" target="_blank"
                    rel="noopener noreferrer">I’ve Made My Lasting Power of Attorney.</a></li>
                    <li><a href="https://odb.sg/faith-and-life/i-cant-forgive-myself-biblical-truths-about-forgiveness-to-set-you-free/" target="_blank"
                    rel="noopener noreferrer">I Can’t Forgive Myself: Biblical Truths About Forgiveness to Set You Free</a></li>
                    <li><a href="https://odb.sg/faith-and-life/how-can-i-seek-god-when-busyness-overwhelms/" target="_blank"
                    rel="noopener noreferrer">How Can I Seek God When Busyness Overwhelms?</a></li>
                    <li><a href="https://odb.sg/faith-and-life/3-ways-god-healed-a-burned-out-worker/" target="_blank"
                    rel="noopener noreferrer">3 Ways God Healed a Burned-Out Worker</a></li>
                </ul>
            </p>
        </template>
    </ProjectPage>
</template>
<style scoped>
.prod-img, li {
    margin: 1rem 0;
}
</style>