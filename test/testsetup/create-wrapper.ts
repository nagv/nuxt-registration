import path from 'path'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {
  shallowMount,
  createLocalVue,
  MountOptions,
  Wrapper
} from '@vue/test-utils'
import Vue from 'vue'

const localVue = createLocalVue()
Vue.use(VueRouter)
localVue.use(Vuex)
localVue.use(VueRouter)




export function createNuxtTestWrapper(
  component: any,
  options?: MountOptions<Vue>
): Wrapper<Vue> {
  const vuetify = options?.vuetify || new Vuetify()
  return shallowMount<typeof component>(component, {
    localVue: options?.localVue || localVue,
    data: options?.data,
    propsData: options?.propsData,
    computed: options?.computed,
    methods: options?.methods,
    vuetify,
    attachToDocument: options?.attachToDocument,
    template: options?.template || '<div></div>'
  })
}
