<template>
  <x-page title="Проекты">
    <div class="row">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="col-12 col-md-6 col-lg-4 mb-4"
      >
        <x-card-project
          :figure="project.figure"
          :title="project.title"
          :description="project.description"
          :link="project.link"
        />
      </div>
    </div>
  </x-page>
</template>

<script>
import XPage from '~/components/public/XPage.vue'
import XCardProject from '~/components/public/XCardProject.vue'

export default {
  components: {
    XPage,
    XCardProject,
  },
  data() {
    return {
      projectInInfoModal: {},
      projects: [
        {
          figure: require('~/assets/images/projects/zdm-auto.jpg'),
          title: 'ZDM-auto',
          description: 'Лизинг для физических лиц',
          link: 'https://zdm-auto.ru',
        },
        {
          figure: require('~/assets/images/projects/neon-project.jpg'),
          title: 'Неон проект',
          description: 'Завод рекламы',
          link: 'http://neonproject.ru/',
        },
        {
          figure: require('~/assets/images/projects/cooking-design.jpg'),
          title: 'Готовим дизайн',
          description: 'Портфолио Ирины Загребальной',
          link: 'http://gotovimdesign.ru/',
        },
        {
          figure: require('~/assets/images/projects/chefs-competition.jpg'),
          title: 'Народный шеф-повар',
          description: 'Промо-сайт конкурса',
          link: 'https://народныйшефповар.рф/',
        },
        {
          figure: require('~/assets/images/projects/autolike.jpg'),
          title: 'Автолайк',
          description: 'Автострахование в Курске',
          link: 'https://страховка-курск.рф/',
        },
        {
          figure: require('~/assets/images/projects/nail-beauty-bar.jpg'),
          title: 'NailBeautyBar',
          description: 'Салон красоты',
          link: 'https://nailbb.ru/',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Проекты',
    }
  },
}
</script>
