<template>
  <x-card :class="classes.element" clickable @click.native="modal = true">
    <x-aspect-ratio :class="classes.frame" :ratio="182 / 350">
      <img
        v-lazy="figure"
        class="lazy-opacity-blur"
        :class="classes.figure"
        :alt="`${title} -- ${description}`"
      />
    </x-aspect-ratio>

    <div :class="classes.body">
      <div :class="classes.text">
        <h3 :class="classes.title">{{ title }}</h3>
        <p :class="classes.description">{{ description }}</p>
      </div>

      <x-icon-info class="icon icon--solid icon--big" :class="classes.icon" />

      <portal to="modals">
        <x-modal v-model="modal" :title="title">
          <a :class="classes.modalLink" :href="link">
            <div>Перейти на сайт</div>
            <x-icon-open-in-new
              class="icon icon--solid"
              :class="classes.icon"
            />
          </a>

          <div>Здесь будет описание проекта</div>
        </x-modal>
      </portal>
    </div>
  </x-card>
</template>

<script>
import XCard from '~/components/public/XCard.vue'
import XAspectRatio from '~/components/shared/XAspectRatio.vue'
import XIconOpenInNew from '~/assets/images/icons/open-in-new.svg?inline'
import XIconInfo from '~/assets/images/icons/info.svg?inline'

export default {
  components: {
    XCard,
    XAspectRatio,
    XIconOpenInNew,
    XIconInfo,
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
  data() {
    return {
      modal: false,
    }
  },
  computed: {
    classes() {
      return {
        element: {
          'x-card-project': true,
        },
        frame: {
          'x-card-project__frame': true,
        },
        figure: {
          'x-card-project__figure': true,
        },
        body: {
          'x-card-project__body': true,
        },
        text: {
          'x-card-project__text': true,
        },
        title: {
          'x-card-project__title': true,
        },
        description: {
          'x-card-project__description': true,
        },
        icon: {
          'x-card-project__icon': true,
        },
        modalLink: {
          'x-card-project__modal-link': true,
        },
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/public/variables';

.x-card-project {
  max-width: 350px;

  &__frame {
    overflow: hidden;
    background-color: $gray-lightest;
    border-bottom: 1px solid $gray-lightest;
  }

  &__figure {
    width: 100%;
    height: auto;
  }

  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  &__text {
    flex-grow: 1;
  }

  &__title {
    color: $gray-darken;
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 0;
  }

  &__description {
    margin-bottom: 0;
  }

  &__modal-link {
    display: flex;
    margin-bottom: 2rem;
    > *:first-child {
      margin-right: 0.25rem;
    }
  }
}
</style>
