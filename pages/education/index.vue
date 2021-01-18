<template>
  <div class="container">
    <h2>Задания</h2>
    <div class="row">
      <div v-for="task in tasks" :key="task.title" class="col-12 col-lg-4">
        <task-card
          :figure="task.figure"
          :title="task.title"
          :description="task.description"
          :link="task.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from '~/components/TaskCard.vue'

export default {
  components: {
    TaskCard,
  },
  data() {
    return {
      tasks: [
        {
          figure: require('~/assets/images/icons/ecmascript.png'),
          title: 'FUNC_002',
          description: 'This-параметризация функций',
          link: 'https://kodaktor.ru/func_d7141',
        },
        {
          figure: require('~/assets/images/icons/ecmascript.png'),
          title: 'FUNC_003',
          description: 'Импорт функций из модуля',
          link: 'https://kodaktor.ru/func_58458',
        },
        {
          figure: require('~/assets/images/icons/ecmascript.png'),
          title: 'FUNC_004',
          description: 'Композиция функций',
          link: 'https://kodaktor.ru/func_20005',
        },
        {
          figure: require('~/assets/images/icons/react.png'),
          title: 'FRMW_001',
          description: 'Работа с полями ввода на React',
          link: 'https://github.com/flatdragon/ifmo-js-frmw-001/',
        },
        {
          figure: require('~/assets/images/icons/vue.png'),
          title: 'FRMW_005',
          description: 'RGB-слайдер на Vue',
          link: 'https://github.com/flatdragon/ifmo-js-frmw-005/',
        },
        {
          figure: require('~/assets/images/icons/elm.png'),
          title: 'FRMW_006',
          description: 'Счетчик на Elm',
          link: 'https://github.com/flatdragon/ifmo-js-frmw-006/',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Образование | Задания',
    }
  },
}
</script>
