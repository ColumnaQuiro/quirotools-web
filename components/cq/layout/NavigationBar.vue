<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Ref } from 'vue'
import { STATICS_CDN } from '~/constants/urls'
import type { Link } from '~/types/Link'

const { t, rt, tm } = useI18n({ useScope: 'local', inheritLocale: true })
const links: Link[] = tm('links')

const showBurgerMenu: Ref<boolean> = ref(false)

function toggleBurgerMenu() {
  showBurgerMenu.value = !showBurgerMenu.value
}
</script>

<template>
  <v-app-bar class="navigation-bar !overflow-visible !h-auto md:h-16" flat>
    <div class="w-full">
      <div class="container flex flex-wrap items-center">
        <nuxt-link to="/">
          <img :src="`${STATICS_CDN}chiro-tools/logo/text-color.webp`" :width="130" alt="ChiroTools" />
        </nuxt-link>
        <div class="flex-grow" />
        <nav class="hidden md:flex h-fit">
          <cq-components-sub-menu-item
            v-for="link in links"
            :key="rt(link.text)"
            :text="rt(link.text)"
            :to="link.to ? rt(link.to) : undefined"
            :href="link.href ? rt(link.href) : undefined"
            :sub-menu="link.subMenu"
          />
          <cq-components-button :href="t('signup.href')" variant="flat" color="tertiary">
            {{ t('signup.text') }}
          </cq-components-button>
        </nav>
        <div class="md:hidden">
          <cq-components-button
            icon
            variant="plain"
            color="#474747"
            class="md:hidden"
            @click="toggleBurgerMenu"
          >
            <v-icon>mdi-menu</v-icon>
          </cq-components-button>
        </div>
      </div>
      <v-expand-transition>
        <nav v-if="showBurgerMenu" class="md:hidden flex flex-col">
          <cq-components-sub-menu-item
            v-for="link in links"
            :key="rt(link.text)"
            :text="rt(link.text)"
            :to="link.to ? rt(link.to) : undefined"
            :href="link.href ? rt(link.href) : undefined"
            :sub-menu="link.subMenu"
          />
          <cq-components-button :href="t('signup.href')" block variant="elevated">
            {{ t('signup.text') }}
          </cq-components-button>
        </nav>
      </v-expand-transition>
    </div>
  </v-app-bar>
</template>

<style lang="scss">
.navigation-bar {
  -webkit-box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47) !important;
  -moz-box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47) !important;
  box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47) !important;
}
</style>

<i18n>
{
  "es": {
    "links": [
      {
        "text": "Sign in",
        "href": "https://dashboard.chiro-tools.com"
      }
    ],
    "signup": {
      "text": "Sign up",
      "href": "https://dashboard.chiro-tools.com/create-account"
    }
  }
}
</i18n>
