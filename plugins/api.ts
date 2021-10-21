import { Plugin } from "@nuxt/types"
import { AxiosInstance } from "axios"

const plugin: Plugin = ({ $axios }, inject) => {
  inject('api', $axios.create({
    baseURL: `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=${process.env.RAKUTEN_API_APPLICATION_ID}&categoryId=38`
  }))
}

export default plugin

declare module 'vue/types/vue' {
  interface Vue {
    readonly $api: AxiosInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    readonly $api: AxiosInstance
  }

  interface Context {
    readonly $api: AxiosInstance
  }
}
