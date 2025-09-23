<script setup lang="ts">

const props = defineProps<{
  title: string
  desc: string
  tags: string[]
  color: string
  link: string
}>()
</script>
<template>
    <div class="proj-card" :style="{ borderColor: color }">
        <div class="proj-title">
            {{ title }}
        </div>
        <div class="proj-tags">
            <div class="tag" v-for="tag in tags" :key="tag">{{ tag }}</div>
        </div>
        <div class="proj-desc">
            {{ desc }}
        </div>
        <div class="read-more">
            <button :style="{ backgroundColor: color, color: 'white' }" @click="$router.push(link)">Read more</button>
        </div>
    </div>
</template>
<style scoped>
.proj-card {
    cursor: pointer;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 1rem;
    background-color: white;
    border: 3px solid;
    outline: 5px solid white;
}
.proj-title {
    font-family: SarahBlock, sans-serif;
    font-size: 1.8rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
}
.proj-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}
.tag {
    border: 1px solid #FBB11D;
    color: black;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    font-family: "Inconsolata", monospace;
    font-size: 0.75rem;
    font-weight: 600;
}
.proj-desc {
    font-family: "Inconsolata", monospace;
    font-size: 1rem;
    flex-grow: 1;
}
.read-more {
    text-align: right;
    margin-top: 1rem;
}

.read-more button {
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-family: "Inconsolata", monospace;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

}
</style>