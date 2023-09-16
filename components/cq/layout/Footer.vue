<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { INSTAGRAM_URL } from '~/constants/urls'

const { t, tm, rt } = useI18n({ useScope: 'local', inheritLocale: true })
const links = tm('links')
</script>

<template>
  <v-footer class="footer !bg-brand-light-secondary">
    <div class="!container p-0 md:pb-4 md:pt-4">
      <div class="flex flex-col items-center md:flex-row md:justify-between">
        <div class="text-xs md:text-start text-center">
          {{ t('copyright') }}
        </div>
        <cq-components-button icon :href="INSTAGRAM_URL" color="black" variant="text" aria-label="Instagram" class="my-1 md:my-0">
          <v-icon>mdi-instagram</v-icon>
        </cq-components-button>
        <div class="flex md:pb-0 pb-2 justify-center">
          <cq-components-button
            v-for="link in links"
            :key="rt(link.text)"
            size="x-small"
            variant="text"
            :to="rt(link.to)"
            color="blackBranded"
          >
            {{ rt(link.text) }}
          </cq-components-button>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<i18n>
{
  "es": {
    "copyright": "© 2023 Chiro-tools",
    "links": [
      {
        "text": "Política de Privacidad",
        "to": "/politica-de-privacidad"
      },
      {
        "text": "Aviso Legal",
        "to": "/aviso-legal"
      },
      {
        "text": "Política de Cookies",
        "to": "/politica-de-cookies"
      }
    ]
  }
}
</i18n>
