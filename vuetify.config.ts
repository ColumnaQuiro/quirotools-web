import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

const myCustomLightTheme = {
  dark: false,
  colors: {
    'background': '#FFFFFF',
    'primary': '#8D5B4C',
    'secondary': '#69A297',
    'tertiary': '#F2B880',
    'quaternary': '#E7CFBC',
    'whiteBranded': '#FFF4EC',
    'blackBranded': '#474747',
    'on-background': '#474747',
    'on-whiteBranded': '#474747',
    'on-surface': '#474747',
    'on-quaternary': '#474747'
  }
}

export default defineVuetifyConfiguration({
  defaults: {
    global: {
      ripple: false,
      VLayout: {
        top: '100px'
      }
    },
    VExpansionPanel: {
      elevation: 0
    }
  },
  directives: false,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  }
})
