<template>
  <div class="layout">
    <div class="layout__right-shape"></div>
    <header class="header">
      <div class="container">
        <div class="header__nav">
          <nuxt-link
            class="header__link"
            exact-active-class="header__link--exact-active"
            active-class="header__link--active"
            to="/"
          >
            <home-icon class="icon icon--solid icon--big" />
          </nuxt-link>
          <nuxt-link
            class="header__link"
            exact-active-class="header__link--exact-active"
            active-class="header__link--active"
            to="/education"
            >Образование</nuxt-link
          >
          <nuxt-link
            class="header__link"
            exact-active-class="header__link--exact-active"
            active-class="header__link--active"
            to="/projects"
            >Проекты</nuxt-link
          >
          <button class="header__contact-button">Связаться</button>
        </div>
      </div>
    </header>
    <main class="content">
      <nuxt keep-alive />
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__socials">
            <a class="footer__link" href="https://github.com/flatdragon"
              ><github-icon class="icon icon--solid icon--big"
            /></a>
            <a class="footer__link" href="https://vk.com/id22276301"
              ><vk-icon class="icon icon--solid icon--big"
            /></a>
            <a class="footer__link" href="https://t.me/flatdragon"
              ><telegram-icon class="icon icon--solid icon--big"
            /></a>
          </div>
          <a class="footer__link" href="mailto:flatdragon@yandex.ru"
            >flatdragon@yandex.ru</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HomeIcon from '~/assets/images/icons/home.svg?inline'
import GithubIcon from '~/assets/images/icons/github.svg?inline'
import VkIcon from '~/assets/images/icons/vk.svg?inline'
import TelegramIcon from '~/assets/images/icons/telegram.svg?inline'

export default {
  components: {
    HomeIcon,
    GithubIcon,
    VkIcon,
    TelegramIcon,
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/public.scss';

.layout {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 18px);
  min-width: 992px;
  max-width: 1920px;
  margin: 0 auto;
  overflow-x: hidden;
  background-color: #fafafa;
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
      background: linear-gradient(
        180deg,
        #c6e5ff 0%,
        #92ccfa 33.33%,
        #64b5f6 62.5%
      );
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
