// @ts-expect-error VueCookieComply does not have types
import VueCookieComply from 'vue-cookie-comply'
import 'vue-cookie-comply/dist/style.css'

export default defineNuxtPlugin(({ vueApp }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  vueApp.use(VueCookieComply)
})
