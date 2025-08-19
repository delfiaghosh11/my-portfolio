<script setup lang="ts">
    import { ref } from 'vue'
    import { certificateData } from './certificates.ts'

    import './certificate-list.css'

    const certificates = ref(certificateData)
</script>

<template>
    <li v-for="certificate in certificates">
        <a target="_blank" class='card' v-bind:href="certificate.url">
            <div class='title'>
                <p style="font-weight: 600;">{{ certificate.title }}</p>
                <p style="font-style: italic; font-size: medium;">
                    {{ certificate.issuer }} - {{ certificate.date }}
                </p>
            </div>
            <img v-if="certificate.image" alt="{{ certificate.title }}" v-bind:src="certificate.image" loading='lazy'
                decoding='async' v-bind:style="{ width: 'auto', height: 'auto' }" />
        </a>
    </li>
</template>
