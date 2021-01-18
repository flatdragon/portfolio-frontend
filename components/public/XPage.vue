<template>
  <div :class="classes.element">
    <div v-if="title" :class="classes.header">
      <div class="container">
        <h1 :class="classes.title">{{ title }}</h1>
      </div>
    </div>
    <div :class="classes.content">
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    classes() {
      return {
        element: {
          'x-page': true,
        },
        header: {
          'x-page__header': true,
        },
        title: {
          'x-page__title': true,
        },
        content: {
          'x-page__content': true,
        },
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/public/variables';

.x-page {
  padding-top: 3rem;
  padding-bottom: 3rem;

  &__header {
    margin-bottom: 2.5rem;
  }
}
</style>
