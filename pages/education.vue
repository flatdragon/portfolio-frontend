<template>
  <x-page title="Образование">
    <div class="tabs row">
      <div v-for="(tab, i) in tabs" :key="i" class="col-12 col-sm-4 mb-2">
        <x-tab-education :title="tab.title" :link="tab.link">
          <template #figure="figure">
            <component :is="tab.figure" :class="figure.class" />
          </template>
        </x-tab-education>
      </div>
    </div>
    <div class="content row">
      <nuxt-child :nuxt-child-key="$route.fullPath" />
    </div>
  </x-page>
</template>

<script>
import XPage from '~/components/public/XPage.vue'
import XTabEducation from '~/components/public/XTabEducation.vue'

export default {
  components: {
    XPage,
    XTabEducation,
  },
  data() {
    return {
      tabs: [
        {
          title: 'Задания',
          link: '/education/',
          figure: require('~/assets/images/figures/tasks.svg?inline'),
        },
        {
          title: 'Практики',
          link: '/education/practices/',
          figure: require('~/assets/images/figures/practices.svg?inline'),
        },
        {
          title: 'Статьи',
          link: '/education/articles/',
          figure: require('~/assets/images/figures/articles.svg?inline'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  margin-bottom: 2rem;

  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
