<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSetSEOTags } from '~/composables/seo'

const { t } = useI18n({ inheritLocale: true, useScope: 'local' })

useSetSEOTags(t('seo.title'), t('seo.description'))
</script>

<template>
  <div>
    <home-intro />
    <home-tools />
    <lazy-home-pricing />
  </div>
</template>

<i18n>
{
  "es": {
    "seo": {
      "title": "Centro Quiropráctico en València - ColumaQuiro",
      "description": "Centro de quiropráctica en el centro de València. Descubre en el centro ColumnaQuiro qué es la quiropráctica y sus beneficios. La Quiropráctica es para tí"
    }
  }
}
</i18n>
