<template>
  <nuxt-link
    ref="tab"
    class="education-tab"
    :active-class="activeClass"
    :exact-active-class="exactActiveClass"
    :to="link"
  >
    <div
      class="education-tab__figure"
      :class="
        active
          ? 'education-tab__figure--colorized'
          : 'education-tab__figure--grayscaled'
      "
    >
      <x-aspect-ratio :ratio="112 / 138">
        <slot name="figure" :class="'education-tab__figure'" />
      </x-aspect-ratio>
    </div>
    <div class="education-tab__spacer"></div>
    <div class="education-tab__title">{{ title }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    activeClass() {
      return 'education-tab--active'
    },
    exactActiveClass() {
      return 'education-tab--exact-active'
    },
  },
  mounted() {
    this.updateActivity()
  },
  updated() {
    this.updateActivity()
  },
  methods: {
    updateActivity() {
      this.active = this.$refs.tab.$el.classList.contains(this.exactActiveClass)
    },
  },
}
</script>

<style lang="scss">
.education-tab {
  display: flex;
  padding: 2rem;
  align-items: center;
  color: #9e9e9e;
  border-width: 2px;
  border-style: solid;
  border-color: #e0e0e0;
  border-radius: 0.5rem;
  transition: border-color 0.2s, color 0.2s;

  @media screen and (max-width: 991px) {
    padding: 1rem;
  }

  &:hover {
    color: #9e9e9e;
    border-color: #64b5f6;
    text-decoration: none;
  }

  &--exact-active {
    color: #64b5f6;
    border-color: #64b5f6;

    &:hover {
      color: #64b5f6;
    }
  }

  &__figure {
    width: 50%;
    transition: filter 0.2s;

    @media screen and (max-width: 991px) {
      width: 40%;
    }

    @media screen and (max-width: 767px) {
      display: none;
    }

    &--grayscaled {
      filter: grayscale(100%);
    }

    &--colorized {
      filter: grayscale(0%);
    }

    svg {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__spacer {
    flex-basis: 1.5rem;

    @media screen and (max-width: 991px) {
      flex-basis: 1rem;
    }

    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  &__title {
    width: 50%;
    color: currentColor;
    font-size: 1.5rem;

    @media screen and (max-width: 991px) {
      width: 60%;
    }

    @media screen and (max-width: 767px) {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
