<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })
</script>

<template>
  <cq-layout-section class="bg-brand-white">
    <cq-blocks-sections-paragraph-with-image :image="`${STATICS_CDN}chiro-tools/website/home-header.webp`" :image-width="450">
      <template #text>
        <h1 class="text-4xl pb-8 font-semibold">
          {{ t('title') }}
        </h1>
        <div class="text-lg">
          {{ t('description') }}
        </div>
      </template>
    </cq-blocks-sections-paragraph-with-image>
  </cq-layout-section>
</template>

<i18n>
{
  "es": {
    "title": "Your advanced Chiropractic software",
    "description": "Chiro-Tools is your comprehensive online resource for cutting-edge chiropractic software dedicated to posture analysis and blindspot mapping, offering chiropractors advanced tools and insights to optimize patient care"
  }
}
</i18n>
