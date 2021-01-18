<template>
  <x-page>
    <h1>
      {{ error.statusCode === 404 ? pageNotFound : otherError }}
    </h1>
    <nuxt-link to="/">На главную</nuxt-link>
  </x-page>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Страница не найдена',
      otherError: 'Произошла ошибка',
    }
  },
  head() {
    return {
      title:
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError,
    }
  },
}
</script>
