<template>
  <transition name="fade" mode="out-in">
    <div v-if="model" :class="classes.element" @click="close">
      <div :class="classes.dialog" @click.stop>
        <div :class="classes.content">
          <div :class="classes.header">
            <h4 :class="classes.title">{{ title }}</h4>
            <x-icon-close
              class="icon icon--solid icon--big"
              :class="classes.closer"
              @click="close"
            />
          </div>
          <div :class="classes.body">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import XIconClose from '~/assets/images/icons/close.svg?inline'

export default {
  components: {
    XIconClose,
  },
  model: {
    prop: 'opened',
    event: 'input',
  },
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      model: false,
    }
  },
  computed: {
    classes() {
      return {
        element: {
          'x-modal': true,
        },
        backdrop: {
          'x-modal__backdrop': true,
        },
        dialog: {
          'x-modal__dialog': true,
        },
        content: {
          'x-modal__content': true,
        },
        header: {
          'x-modal__header': true,
        },
        title: {
          'x-modal__title': true,
        },
        closer: {
          'x-modal__closer': true,
        },
        body: {
          'x-modal__body': true,
        },
      }
    },
  },
  watch: {
    opened(value) {
      this.model = value
    },
    model(value) {
      this.$emit('input', value)
    },
  },
  methods: {
    open() {
      this.model = true
    },
    close() {
      this.model = false
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/public/variables';

.x-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  // overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: $z-index-modal;

  &__dialog {
    position: relative;
    display: flex;
    align-items: center;
    margin: 15px auto;
    min-height: calc(100% - 30px);
    width: calc(100% - 30px);
    max-width: 530px;
    pointer-events: none;
    z-index: $z-index-modal + 20;
  }

  &__content {
    width: 100%;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    pointer-events: auto;
    background-color: $whitest;
    box-shadow: $shadow-sm;
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  &__title {
    color: $gray-darkest;
    font-weight: normal;
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  &__closer {
    cursor: pointer;
    margin-left: auto;
  }
}
</style>
