<template>
  <div class="education">
    <div class="container">
      <h1 class="heading">Образование</h1>
      <div class="row">
        <div v-for="task in tasks" :key="task.title" class="col-12 col-lg-4">
          <a class="card" :href="task.link">
            <div class="card__content">
              <img class="card__figure" :src="task.image" alt="" />
              <div class="card__text">
                <div class="card__title">{{ task.title }}</div>
                <div class="card__description">{{ task.description }}</div>
              </div>
              <div class="card__icon">
                <open-in-new-icon class="icon icon--solid icon--big" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OpenInNewIcon from '~/assets/images/icons/open-in-new.svg?inline'

export default {
  components: {
    OpenInNewIcon,
  },
  data() {
    return {
      tasks: [
        {
          image: require('~/assets/images/icons/ecmascript.png'),
          title: 'FUNC_002',
          description: 'This-параметризация функций',
        },
        {
          image: require('~/assets/images/icons/ecmascript.png'),
          title: 'FUNC_003',
          description: 'Импорт функций из модуля',
        },
        {
          image: require('~/assets/images/icons/ecmascript.png'),
          title: 'FUNC_004',
          description: 'Композиция функций',
        },
        {
          image: require('~/assets/images/icons/react.png'),
          title: 'FRMW_001',
          description: 'Работа с полями ввода на React',
        },
        {
          image: require('~/assets/images/icons/vue.png'),
          title: 'FRMW_005',
          description: 'RGB-слайдер на Vue',
        },
        {
          image: require('~/assets/images/icons/elm.png'),
          title: 'FRMW_006',
          description: 'Счетчик на Elm',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.education {
  padding-top: 4rem;
}

.heading {
  margin-bottom: 2.5rem;
}

.card {
  display: inline-block;
  width: 100%;
  border-radius: 0.5rem;
  background: #fff;
  margin-bottom: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 1rem 1.5rem 0 rgba(0, 0, 0, 0.25);
    text-decoration: none;
  }

  &__content {
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  &__figure {
    width: 2.5rem;
    margin-right: 0.5rem;
  }

  &__text {
    flex-grow: 1;
  }

  &__title {
    color: #424242;
  }

  &__description {
    color: #757575;
  }

  &__icon {
    color: #757575;
    margin-left: 0.5rem;
  }
}
</style>
