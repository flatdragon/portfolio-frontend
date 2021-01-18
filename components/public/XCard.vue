<template>
  <component :is="tag" :class="classes.element" :target="target" :href="link">
    <div :class="classes.content">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: '_blank',
    },
    link: {
      type: String,
      default: null,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tag() {
      return this.link ? 'a' : 'div'
    },
    classes() {
      return {
        element: {
          'x-card': true,
          'x-card--clickable': !!this.link || !!this.clickable,
        },
        content: {
          'x-card__content': true,
        },
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/public/variables';

.x-card {
  position: relative;
  display: block;
  overflow: hidden;
  color: $gray;
  background-color: $whitest;
  box-shadow: $shadow-sm;
  border-radius: 0.5rem;

  &--clickable {
    cursor: pointer;
    transition: $shadow-transition;

    &:hover {
      color: $gray;
      text-decoration: none;
      box-shadow: $shadow-lg;
    }
  }
}
</style>
