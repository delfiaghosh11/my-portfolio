<script setup lang="ts">
  import { ref } from 'vue'
  import { experiencesData } from './experiences.ts'
  import { getOrganizations, getExperienceDetails } from './formatter.ts'

  const organizations = ref(getOrganizations())

</script>

<template>
  <div class="gallery">
    <table align="center" style="margin: 0px auto;">
      <tbody>
        <tr v-for="organization in organizations">
          <!-- Organization -->
          <td style="padding: 50px 0px 10px 0px; font-style: italic; font-weight: 900; font-size: larger;">
            {{ organization }}
          </td>

          <!-- Details in Organization -->
        <tr v-for="details in getExperienceDetails(organization)">
          <td>
            <p style="padding: 5px 0px; font-weight: 700; font-size: large;">{{
              details.designation }}</p>
            <p style="padding: 5px 0px; font-style: italic;">{{ details.location }}</p>
            <ul>
              <li v-for="desc in details.description">
                <p style="padding: 10px 0px; text-align: justify;">{{ desc }}</p>
              </li>
            </ul>
          </td>
          <td style="align-content: baseline;text-align: right;width: 15%;font-weight: lighter;font-size: small;">{{
            details.date }}</td>
        </tr>
        </tr>
      </tbody>
    </table>
  </div>
</template>