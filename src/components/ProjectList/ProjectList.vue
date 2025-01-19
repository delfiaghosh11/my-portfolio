<script setup lang="ts">
  import { ref } from 'vue'
  import { projectsData, projectsPreview } from './projects.ts'

  import './project-list.css'

  const props = defineProps<{
    isPreview: boolean
  }>()

  const projects = ref(props.isPreview ? projectsPreview() : projectsData)
</script>

<template>
  <li v-for="project in projects">
    <a target="_blank" class='card' v-bind:href="project.url">
      <div class='title'>
        <p style="font-weight: 600; margin-bottom: 10px;">{{ project.title }}</p>
        <p v-for="desc in project.description" style="font-style: italic; font-size: medium; padding: 5px 0px;">
          {{ desc }}
        </p>
      </div>
      <img alt="{{ project.title }}" v-bind:src="project.image" loading='lazy' decoding='async' />
    </a>
  </li>
</template>
