<template>
  <button :class="classes.element" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'XButton',
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        element: {
          'x-button': true,
          'x-button--block': this.block,
          'x-button--disabled': this.disabled,
        },
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/public/variables';

.x-button {
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  color: #fff;
  background-color: $primary-color;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba($primary-color, 0.5);
    border-radius: 0.5rem;
  }

  &:hover {
    background-color: darken($primary-color, 5%);
  }

  &--block {
    display: block;
    width: 100%;
  }

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
