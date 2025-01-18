<script setup>
  import { ref } from 'vue'
  import { skillsData } from './skills.ts'


  const skills = ref(skillsData)
</script>

<template>
  <div class="gallery">
    <table align="center" style="margin: 0px auto;">
      <tbody>
        <tr v-for="skill in skills">
          <td style="width: 35%; padding: 10px 50px 10px 0px; font-style: italic; font-weight: 900; font-size: larger;">
            {{ skill.title }}
          </td>
          <td style="font-size: large; text-align: justify;">{{ skill.details }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>