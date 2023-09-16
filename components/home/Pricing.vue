<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

interface Specification {
  imagePath: string
  title: string
  description: string
}
const { t, tm, rt } = useI18n({ useScope: 'local', inheritLocale: true })
const specifications: Specification[] = tm('specifications')
</script>

<script setup lang="ts">
</script>

<template>
  <cq-layout-section class="bg-brand-light-white">
    <h2 class="section-title">
      {{ t('title') }}
    </h2>
    <div class="flex flex-wrap items-end justify-center gap-5">
      <home-pricing-card
        price="11.95"
        type="individual"
        :logo-path="`${STATICS_CDN}chiro-tools/website/pricing-card-individual.webp`"
        :button-text="t('pricingCards.individual.button.text')"
        button-to="https://dashboard.chiro-tools.com/create-account"
      >
        <template #specifications>
          <ul>
            <li
              v-for="specification in tm('pricingCards.individual.specifications')"
              :key="specification"
              class="pb-1"
            >
              {{ rt(specification) }}
            </li>
          </ul>
        </template>
      </home-pricing-card>
      <home-pricing-card
        price="Contact us" type="enterprise"
        :logo-path="`${STATICS_CDN}chiro-tools/website/pricing-card-enterprise.webp`"
        :button-text="t('pricingCards.enterprise.button.text')"
        button-to="mailto:admin@chiro-tools.com"
      >
        <template #specifications>
          <div class="text-base font-medium pb-3">
            {{ t('pricingCards.enterprise.extraSpecification') }}
          </div>
          <ul>
            <li v-for="specification in tm('pricingCards.enterprise.specifications')" :key="specification" class="pb-1">
              {{ rt(specification) }}
            </li>
          </ul>
        </template>
      </home-pricing-card>
    </div>
    <div class="flex flex-col md:flex-row justify-center gap-5 pt-8 md:pt-14">
      <div v-for="specification in specifications" :key="specification.title" class="w-full md:w-[300px] text-center">
        <v-img :src="`${STATICS_CDN}${rt(specification.imagePath)}`" width="62" :inline="true" />
        <div class="text-lg pt-4 pb-2">
          {{ rt(specification.title) }}
        </div>
        <div>
          {{ rt(specification.description) }}
        </div>
      </div>
    </div>
  </cq-layout-section>
</template>

<i18n>
{
  "es": {
    "title": "Pricing",
    "pricingCards": {
      "individual": {
        "button": {
          "text": "Sign up"
        },
        "specifications": [
          "Unlimited patients",
          "Blind Spot Analysis",
          "Posture Analysis"
        ]
      },
      "enterprise": {
        "button": {
          "text": "Contact us"
        },
        "extraSpecification": "Everything in individual, plus:",
        "specifications": [
          "Unlimited chiropractors",
          "Onboarding support and customer success"
        ]
      }
    },
    "specifications": [
      {
        "imagePath": "chiro-tools/website/free-trial.webp",
        "title": "7 - day free trial",
        "description": "All our plans offer a risk-free 7-day trial period, and no credit card is needed."
      },
      {
        "imagePath": "chiro-tools/website/support.webp",
        "title": "Need Support?",
        "description": "If you have any questions during the setup or about how to use our tool, please feel free to reach out to us via email or chat. We're here to help!"
      }
    ]
  }
}
</i18n>
