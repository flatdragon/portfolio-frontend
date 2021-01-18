<template>
  <textarea
    v-model="model"
    :class="classes.element"
    :name="name"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'XTextarea',
  props: {
    name: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      model: null,
    }
  },
  computed: {
    classes() {
      return {
        element: {
          'x-textarea': true,
          'x-textarea--invalid': this.invalid,
        },
      }
    },
  },
  watch: {
    value(value) {
      this.model = value
    },
    model(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/public/variables';

.x-textarea {
  display: block;
  width: 100%;
  font-size: 1.5rem;
  font-weight: normal;
  height: 8rem;
  padding: 0.5rem 1rem;
  border-width: 2px;
  border-style: solid;
  border-color: $gray-lightest;
  border-radius: 0.5rem;
  color: $gray-darken;
  outline: 0;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: $primary-color;
    box-shadow: 0 0 0 3px rgba($primary-color, 0.35);
  }

  &::placeholder {
    color: $gray-lightest;
  }

  &--invalid {
    border-color: $danger-color;

    &:focus {
      border-color: $danger-color;
      box-shadow: 0 0 0 3px rgba($danger-color, 0.35);
    }
  }
}
</style>
