<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Link } from '~/types/Link'

interface Props {
  text: string
  to: string | undefined
  href: string | undefined
  subMenu?: Link[]
}

withDefaults(defineProps<Props>(), {
  subMenu: undefined
})

const { rt } = useI18n()
</script>

<template>
  <div class="sub-menu-item relative">
    <cq-components-button
      :to="to"
      :href="href"
      variant="text"
      color="blackBranded"
      block
      class="sub-menu-item_:button mr-4"
    >
      {{ text }}
    </cq-components-button>
    <div
      v-if="subMenu"
      class="sub-menu-item__container bg-white rounded md:shadow w-auto px-3"
    >
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
        <li v-for="subItem in subMenu" :key="rt(subItem.text)" class="ml-0">
          <cq-components-button
            :to="rt(subItem.to)"
            color="blackBranded"
            block
            variant="text"
          >
            {{ rt(subItem.text) }}
          </cq-components-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub-menu-item {
  &__container {
    @apply hidden;
  }
  &:hover {
    .sub-menu-item__container {
      @apply block relative md:absolute md:top-full;
    }
  }
}
</style>
