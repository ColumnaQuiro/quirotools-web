<script setup lang="ts">
interface Props {
  text: string
  image: string
  imageWidth?: number | string
  imagePosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  imageWidth: '100%',
  imagePosition: 'right'
})

const isImagePositionLeft = props.imagePosition === 'left'
const isImagePositionRight = props.imagePosition === 'right'
</script>

<template>
  <div class="flex flex-col md:flex-row gap-10 paragraph-with-image">
    <div
      class="md:col-span-2"
      :class="{
        'md:order-0': isImagePositionRight,
        'md:order-1': isImagePositionLeft,
      }"
    >
      <slot name="text">
        <div class="text-base" v-html="text" />
      </slot>
    </div>
    <div class="w-full justify-self-center md:justify-self-end">
      <slot name="image">
        <v-img :src="image" :width="imageWidth" class="mx-auto lg:mx-0 mt-8 lg:mt-0" />
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.paragraph-with-image {
  li {
    margin-left: 16px !important;
  }
}
</style>
