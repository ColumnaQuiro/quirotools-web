<script setup lang="ts">
import type { PropType } from 'vue'

type PricingCardType = 'individual' | 'enterprise'

defineProps({
  logoPath: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<PricingCardType>,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  oldPrice: {
    type: String,
    required: false
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonTo: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="rounded-xl p-6 md:p-10 md:px-6 shadow-sm w-full md:w-[300px] bg-white text-center">
    <v-img :src="logoPath" :width="80" :alt="`${type}`" :inline="true" />
    <div class="text-sm text-grey pt-1 pb-4">
      {{ type }}
    </div>
    <div class="flex justify-center items-center">
      <div
        class="font-medium pb-8" :class="{
          'line-through decoration-red': !!oldPrice,
          'text-3xl': !oldPrice,
          'text-2xl': !!oldPrice
        }"
      >
        {{ oldPrice || price }}
      </div>
      <div v-if="!!oldPrice" class="text-3xl font-medium pb-8 pl-3">
        {{ price }}
      </div>
    </div>
    <slot name="specifications" />
    <cq-components-button :href="buttonTo" variant="flat" color="tertiary" class="mt-6">
      {{ buttonText }}
    </cq-components-button>
  </div>
</template>
