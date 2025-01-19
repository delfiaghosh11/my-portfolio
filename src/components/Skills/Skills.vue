<script setup>
  import { ref } from 'vue'
  import { skillsData } from './skills.ts'
  import './skills.css'

  const skills = ref(skillsData)
</script>

<template>
  <div class="gallery">
    <table align="center" style="margin: 0px auto;">
      <tbody>
        <tr v-for="(skill, index) in skills">
          <td class="skill-title">
            <span class="material-symbols-outlined" style="font-size: 45px;">
              {{ skill.icon }}
            </span>
          </td>
          <td style="font-size: large; text-align: justify; padding: 10px 0px;">
            <v-chip density="comfortable"
              v-bind="{ size: index < 3 ? 'x-large' : index >= 3 && index < 10 ? 'large' : 'default', color: index < 3 ? 'green' : index >= 3 && index < 5 ? 'cyan' : index >= 5 && index < 7 ? 'primary' : index >= 7 && index < 10 ? 'indigo' : 'orange', variant: index < 10 ? 'elevated' : 'tonal' }"
              v-for="current in skill.details" style="margin: 5px 5px;">
              {{ current }}
            </v-chip>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>