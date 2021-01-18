<template>
  <a class="task-card" target="_blank" :href="link">
    <div class="task-card__content">
      <img v-if="figure" class="task-card__figure" :src="figure" />
      <div v-if="title && description" class="task-card__text">
        <h3 v-if="title" class="task-card__title">{{ title }}</h3>
        <p v-if="description" class="task-card__description">
          {{ description }}
        </p>
      </div>
      <icon-open-in-new class="task-card__icon icon icon--solid icon--big" />
    </div>
  </a>
</template>

<script>
import IconOpenInNew from '~/assets/images/icons/open-in-new.svg?inline'

export default {
  components: {
    IconOpenInNew,
  },
  props: {
    figure: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.task-card {
  display: block;
  width: 100%;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background: #fff;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s;

  &:hover {
    text-decoration: none;
    box-shadow: 0 1rem 1.5rem 0 rgba(0, 0, 0, 0.25);
  }

  &__content {
    display: flex;
    justify-content: space-between;
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
    font-weight: normal;
    margin-bottom: 0;
    color: #424242;
  }

  &__description {
    margin-bottom: 0;
    color: #757575;
  }

  &__icon {
    color: #757575;
    margin-left: 0.5rem;
  }
}
</style>
