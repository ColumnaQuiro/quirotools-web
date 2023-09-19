<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })
</script>

<template>
  <cq-layout-section class="bg-brand-white">
    <cq-blocks-sections-paragraph-with-image>
      <template #image>
        <img
          :src="`${STATICS_CDN}chiro-tools/website/home-header.webp`"
          :width="450" class="mx-auto lg:mx-0 mt-8 lg:mt-0"
          alt="posture analysis"
        >
      </template>
      <template #text>
        <h1 class="text-4xl pb-8 font-semibold">
          {{ t('title') }}
        </h1>
        <div class="text-lg">
          {{ t('description') }}
        </div>
      </template>
    </cq-blocks-sections-paragraph-with-image>
    <div class="text-center pt-10">
      <cq-components-button href="https://dashboard.chiro-tools.com/create-account" variant="flat" size="large" color="secondary">
        {{ t('createAccountButton') }}
      </cq-components-button>
    </div>
  </cq-layout-section>
</template>

<i18n>
{
  "es": {
    "title": "Your advanced Chiropractic software",
    "description": "Chiro-Tools is your comprehensive online resource for cutting-edge chiropractic software dedicated to posture analysis and blindspot mapping, offering chiropractors advanced tools and insights to optimize patient care",
    "createAccountButton": "Create account"
  }
}
</i18n>
