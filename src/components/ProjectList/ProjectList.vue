<script setup lang="ts">
  import { ref } from 'vue';
  import { projectsData, projectsPreview } from './projects.ts';

  import './project-list.css';

  const props = defineProps<{
    isPreview: boolean
  }>()

  const projects = ref(props.isPreview ? projectsPreview() : projectsData)
</script>

<template>
  <li v-for="project in projects">
    <a target="_blank" class='card' v-bind:href="project.url">
      <div class='project-info'>
        <p class="project-title">{{ project.title }}</p>
        <p class="project-description" v-for="desc in project.description" :key="desc">{{ desc }}</p>
      </div>
      <img class="project-image" alt="{{ project.title }}" v-bind:src="project.image" loading='lazy' decoding='async' />
    </a>
  </li>
</template>
