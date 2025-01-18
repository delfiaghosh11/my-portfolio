<script setup>
  import { ref } from 'vue'
  import { awardsData } from './awards.ts'
  import './awards.css'

  const awards = ref(awardsData)
</script>

<template>
  <li v-for="award in awards" class='mention-card'>
    <p style="font-size: larger;font-weight: 600;">{{ award.title }}</p>
    <p style="font-size: large;margin: 10px 0px;font-weight: 300; font-style: italic;">{{ award.issuer }}</p>
    <p style="text-align: justify;margin: 20px 0px;">{{ award.details }}</p>
    <p style="font-size: small;text-align: right; margin-top: 25px;font-style: italic;">{{ award.date }}</p>
  </li>
</template>