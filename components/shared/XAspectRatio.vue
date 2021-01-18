<template>
  <div :class="classes.element" :style="styles.element">
    <div :class="classes.content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    classes() {
      return {
        element: {
          'x-aspect-ratio': true,
        },
        content: {
          'x-aspect-ratio__content': true,
        },
      }
    },
    styles() {
      return {
        element: {
          'padding-top': `${this.ratio * 100}%`,
        },
      }
    },
  },
}
</script>

<style lang="scss">
.x-aspect-ratio {
  position: relative;

  &__content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>
