<script setup lang="ts">
  import { ref } from 'vue'
  import { experiencesData } from './experiences.ts'
  import { getOrganizations, getExperienceDetails, getThemePreference } from './formatter.ts'

  import './experiences.css'

  const organizations = ref(getOrganizations())
  const isDark = ref(getThemePreference() === 'dark');

</script>

<template>
  <div class="gallery">
    <v-list :class="{ 'v-theme--light': !isDark, 'v-theme--dark': isDark }">
      <v-list-item class="pb-8 border-b-md" v-for="organization in organizations" color="primary" variant="tonal">
        <v-list-item-title style="font-weight: 900; font-size: larger;">{{ organization }}</v-list-item-title>

        <!-- Details in Organization -->
        <v-expansion-panels variant="popout" class="w-100"
          :class="{ 'v-theme--light': !isDark, 'v-theme--dark': isDark }">
          <v-expansion-panel class="w-100" v-for="details in getExperienceDetails(organization)">
            <v-expansion-panel-title>
              <template v-slot:default="{ expanded }">
                <div class="d-flex flex-column w-100">
                  <v-row>
                    <v-col class="d-flex justify-start" cols="8" style="font-weight: 700; font-size: large;">
                      {{ details.designation }}
                    </v-col>
                    <v-col class="text-grey" cols="4" style="text-align: center;">
                      <v-fade-transition leave-absolute>
                        <span>{{ details.date }}</span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start mt-3" style="font-style: italic;">
                      {{ details.location }}
                    </v-col>
                  </v-row>
                </div>
              </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <ul>
                <li v-for="desc in details.description">
                  <p style="padding: 10px 0px; text-align: justify;">{{ desc }}</p>
                </li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list-item>
    </v-list>
  </div>
</template>