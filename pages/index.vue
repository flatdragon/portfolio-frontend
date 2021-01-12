<template>
  <div class="presentation">
    <right-shape class="right-shape" />
    <div class="presentation__content container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="greeting">
            <div class="greeting__intro">Привет! Меня зовут</div>
            <h1 class="greeting__name">Кочетыгов Андрей</h1>
          </div>
          <div class="specializations">
            Я профессиональный <span class="text-accent">верстальщик</span> и
            <span class="text-accent">веб-разработчик</span>
          </div>
          <div class="skills">
            <div class="skills__item skills__layout">
              <div class="skills__item-figure-holder">
                <div
                  v-lazy:background-image="
                    require('~/assets/images/backgrounds/home/html-css.png')
                  "
                  class="skills__item-figure skills__layout-figure lazy-opacity-blur"
                ></div>
              </div>
              <span class="font-weight-normal">Более 5-ти лет</span> занимаюсь
              версткой
            </div>
            <div class="skills__item skills__develop">
              <div class="skills__item-figure-holder">
                <div
                  v-lazy:background-image="
                    require('~/assets/images/backgrounds/home/vue-laravel.png')
                  "
                  class="skills__item-figure skills__develop-figure lazy-opacity-blur"
                ></div>
              </div>
              <span class="font-weight-normal">Более 2-х лет</span>
              разрабатываю
              <span class="text-accent font-weight-normal"
                >клиентские&nbsp;и&nbsp;серверные веб-приложения</span
              >
              на JavaScript и PHP, с использованием фреймворков
              <span class="text-vue font-weight-normal">Vue</span> и
              <span class="text-laravel font-weight-normal">Laravel</span>
            </div>
            <div class="skills__item skills__design">
              <div class="skills__item-figure-holder">
                <div
                  v-lazy:background-image="
                    require('~/assets/images/backgrounds/home/ps-ai.png')
                  "
                  class="skills__item-figure skills__develop-figure lazy-opacity-blur"
                ></div>
              </div>
              Увлекает
              <span class="font-weight-normal">digital-дизайн</span>
              и&nbsp;<span class="font-weight-normal"
                >обработка изображений</span
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <div class="photo">
            <div class="photo__holder">
              <img
                v-lazy="require('~/assets/images/me.png')"
                class="photo__content lazy-opacity-blur"
                alt="Кочетыгов Андрей"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RightShape from '~/assets/images/backgrounds/home/right-shape.svg?inline'

export default {
  components: {
    RightShape,
  },
}
</script>

<style lang="scss">
.right-shape {
  display: none;
  z-index: -10;
  position: absolute;
  top: 0;
  left: 50%;
  width: 1920px;
  height: 100vh;
  transform: translateX(-50%);
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.2s;

  @media screen and (min-height: 1080px) {
    opacity: 0;
  }
}

.presentation {
  flex-grow: 1;
  display: flex;
  padding-top: 4rem;
  overflow-y: hidden;
  overflow-x: hidden;

  @media screen and (min-width: 992px) {
    margin-top: 0;
    align-items: flex-end;
    margin-bottom: -20px;
  }
}

.photo {
  position: relative;
  width: 120%;
  padding-bottom: 134.5%;
  margin-top: -20px;
  left: -10%;

  @media screen and (min-width: 1200px) {
    left: -20%;
  }

  &__holder {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__content {
    width: 100%;
    height: auto;
  }
}

.greeting {
  margin-bottom: 2rem;

  &__intro {
    color: #64b5f6;
    font-size: 2.5rem;
  }

  &__name {
    font-size: 4rem;
    margin-bottom: 0;
  }
}

.specializations {
  color: #616161;
  font-size: 2rem;
  margin-bottom: 2rem;
  max-width: 450px;
}

.skills {
  color: #9e9e9e;
  font-size: 1.5rem;
  font-weight: lighter;

  &__item {
    position: relative;
    margin-bottom: 1rem;

    &-figure {
      display: block;
      position: absolute;
      content: '';
      top: 50%;
      right: calc(100% + 55px);
      transform: translateY(-50%);
      height: 3.75rem;
      width: 350px;
      background-position: center right;
      background-repeat: no-repeat;

      &-holder {
        opacity: 0;
        transition: opacity 0.2s;

        @media screen and (min-width: 1564px) {
          opacity: 1;
        }
      }
    }
  }

  &__layout {
    max-width: 220px;

    // &__layout-figure {
    //   background-image: url('data:image/png;base64,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');
    //   // background-image: url('~assets/images/backgrounds/home/html-css.png');
    // }
  }

  &__develop {
    max-width: 430px;

    // &__develop-figure {
    //   background-image: url('data:image/png;base64,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');
    //   // background-image: url('~assets/images/backgrounds/home/vue-laravel.png');
    // }
  }

  &__design {
    max-width: 280px;

    // &__design-figure {
    //   background-image: url('data:image/png;base64,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');
    //   // background-image: url('~assets/images/backgrounds/home/ps-ai.png');
    // }
  }
}
</style>
