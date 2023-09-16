<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })
</script>

<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('title') }}
    </h2>
    <cq-blocks-sections-paragraph-with-image :image="`${STATICS_CDN}chiro-tools/website/posture-analysis.webp`" :image-width="350">
      <template #text>
        <h3 class="text-3xl pb-4">
          {{ t('posture.title') }}
        </h3>
        <div class="text-lg">
          {{ t('posture.description') }}
        </div>
      </template>
    </cq-blocks-sections-paragraph-with-image>
    <cq-blocks-sections-paragraph-with-image class="mt-10" :image="`${STATICS_CDN}chiro-tools/website/blind-spot.webp`" :image-width="450" image-position="left">
      <template #text>
        <h3 class="text-3xl pb-4">
          {{ t('blindspot.title') }}
        </h3>
        <div class="text-lg">
          {{ t('blindspot.description') }}
        </div>
      </template>
    </cq-blocks-sections-paragraph-with-image>
  </cq-layout-section>
</template>

<i18n>
{
  "es": {
    "title": "Our tools",
    "posture": {
      "title": "Posture Analysis",
      "description": "Posture analysis offers a holistic perspective when monitoring your patients' progress throughout their chiropractic journey. It serves as an invaluable tool for identifying potential postural deviations, which can have far-reaching effects on overall health and well-being. As a chiropractor, posture analysis equips you with the ability to discern and address the root causes of postural issues. This method relies on meticulous observation and evidence-based principles, bolstered by Dr. Carrick's research, making it exceptionally effective at identifying postural imbalances."
    },
    "blindspot": {
      "title": "Blind Spot Mapping",
      "description": "Blind spot mapping embodies a comprehensive approach to monitoring your patients' chiropractic progress. It stands as a crucial instrument for unveiling potential nervous interferences that may impede the vital communication between the brain and the body. For chiropractors, blind spot mapping empowers you with unparalleled precision, facilitating the pinpointing of root causes. This method is characterized by its meticulous attention to detail and strong empirical foundation, as substantiated by Dr. Carrick's pioneering research, making it particularly adept at identifying these neurological interferences."
    }
  }
}
</i18n>
