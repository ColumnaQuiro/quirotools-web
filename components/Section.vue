<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'section'
  },
  fullHeight: {
    type: Boolean,
    required: false,
    default: false
  },
  forcedHeight: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <component
    :is="props.type"
    :id="props.id"
    class="px-section_x_sm py-section_y_sm sm:px-section_x sm:py-section_y relative" :class="[
      props.fullHeight ? 'full-height' : '',
      props.forcedHeight ? 'full-height--forced' : '',
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.full-height.full-height--forced {
  height: calc(100vh - theme('spacing.nav'));
}
@screen md {
  .full-height:not(.full-height--forced) {
    height: calc(100vh - theme('spacing.nav'));
  }
}
</style>
