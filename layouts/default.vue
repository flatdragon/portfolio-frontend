<template>
  <div class="layout">
    <div class="layout__right-shape"></div>

    <header class="header">
      <div class="container">
        <div class="header__nav">
          <nuxt-link
            v-for="(page, i) in pages"
            :key="i"
            class="header__link"
            exact-active-class="header__link--exact-active"
            active-class="header__link--active"
            :to="page.link"
          >
            <component
              :is="page.icon"
              v-if="page.icon"
              class="icon icon--solid icon--big"
            />
            <span v-if="page.title" class="d-none d-sm-inline ml-2">{{
              page.title
            }}</span>
          </nuxt-link>

          <x-button @click.native="$refs['modal-contact-me'].open()"
            >Связаться</x-button
          >

          <portal to="modals">
            <x-modal ref="modal-contact-me" title="Связаться">
              <x-form v-slot="form" action="/api/contact-me">
                <x-input
                  class="mb-4"
                  type="email"
                  name="email"
                  placeholder="Введите e-mail"
                  :invalid="form.errors['email']"
                />
                <x-textarea
                  class="mb-4"
                  name="msg"
                  placeholder="Введите сообщение"
                  :invalid="form.errors['msg']"
                />
                <x-button block :disabled="form.busy">Отправить</x-button>
              </x-form>
            </x-modal>
          </portal>
        </div>
      </div>
    </header>

    <main class="content">
      <transition name="page" mode="out-in">
        <nuxt keep-alive />
      </transition>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__socials mx-auto mx-sm-0">
            <a
              v-for="(social, i) in socials"
              :key="i"
              target="_blank"
              class="footer__link"
              :href="social.link"
            >
              <component :is="social.icon" class="icon icon--solid icon--big" />
            </a>
          </div>
          <a
            class="footer__link d-none d-sm-block"
            target="_blank"
            :href="`mailto:${email}`"
            >{{ email }}</a
          >
        </div>
      </div>
    </footer>

    <portal-target name="modals" multiple />
  </div>
</template>

<script>
import XInput from '~/components/public/XInput.vue'
import XModal from '~/components/public/XModal.vue'
import XTextarea from '~/components/public/XTextarea.vue'
import XButton from '~/components/public/XButton.vue'
import XForm from '~/components/shared/XForm.vue'

export default {
  components: {
    XModal,
    XInput,
    XTextarea,
    XButton,
    XForm,
  },
  data() {
    return {
      email: 'flatdragon@yandex.ru',
      pages: [
        {
          icon: require('~/assets/images/icons/home.svg?inline'),
          link: '/',
        },
        {
          icon: require('~/assets/images/icons/education.svg?inline'),
          title: 'Образование',
          link: '/education/',
        },
        {
          icon: require('~/assets/images/icons/projects.svg?inline'),
          title: 'Проекты',
          link: '/projects/',
        },
      ],
      socials: [
        {
          link: 'https://github.com/flatdragon',
          icon: require('~/assets/images/icons/github.svg?inline'),
        },
        {
          link: 'https://vk.com/id22276301',
          icon: require('~/assets/images/icons/vk.svg?inline'),
        },
        {
          link: 'https://t.me/flatdragon',
          icon: require('~/assets/images/icons/telegram.svg?inline'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/public/index.scss';

.layout {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 18px);
  // min-width: 992px;
  max-width: 1920px;
  margin: 0 auto;
  overflow-x: hidden;
  background-color: #fafafa;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
  padding-bottom: 56px;

  @media screen and (min-width: 992px) {
    min-height: 100vh;
  }

  &__right-shape {
    z-index: -10;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 50%;
    width: 1920px;
    height: 100vh;
    transform: translateX(-50%);
    pointer-events: none;

    &::after {
      display: block;
      content: '';
      top: 0;
      bottom: 0;
      width: 292px;
      background: linear-gradient(180deg, #e3f2fd 0%, #90caf9 30%, #64b5f6 65%);
    }
  }
}

.header {
  flex-grow: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &__nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
  }

  &__link {
    display: flex;
    align-items: center;
    color: #9e9e9e;

    &:hover {
      text-decoration: none;
      color: #64b5f6;
    }

    &--exact-active {
      color: #64b5f6;
    }
  }

  &__contact-button {
    padding: 0.5rem 1rem;
    background-color: #64b5f6;
    color: #fff;
    border-radius: 0.5rem;
    border: 1px solid transparent;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(#64b5f6, 0.5);
      border-radius: 0.5rem;
    }

    &:hover {
      background-color: darken(#64b5f6, 5%);
    }
  }
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.footer {
  position: fixed;
  z-index: 20;
  padding-top: 1rem;
  padding-bottom: 1rem;
  bottom: 0;
  width: 100%;
  max-width: 1920px;
  font-size: 1.5rem;
  color: #fff;
  flex-grow: 0;
  background: #64b5f6;

  &::before {
    display: block;
    position: absolute;
    content: '';
    bottom: calc(100% - 7px);
    left: 50%;
    transform: translateX(-50%);
    height: 62px;
    min-width: 1920px;
    background-position: center;
    background-repeat: no-repeat;
    // background-image: url('~assets/images/backgrounds/home/footer-shape.svg');
    background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIwIDYyIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1NzkgNTRIMHY4aDE5MjBWMGgtMjkyYzAgMjkuNS0yNC41IDU0LTQ5IDU0eiIgZmlsbD0iIzY0QjVGNiIvPgo8L3N2Zz4K');
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__link {
    color: #fff;
    &:hover {
      text-decoration: none;
      color: darken(#fff, 15%);
    }
  }

  &__socials {
    > .footer__link:not(:last-child) {
      margin-right: 2rem;
    }
    .icon {
      height: 2rem;
      width: 2rem;
    }
  }
}
</style>
