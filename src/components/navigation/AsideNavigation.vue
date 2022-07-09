<template>
  <div class="navigation-container">
    <router-link to="/" class="logo-link">
      <img src="@/assets/images/logo.svg" alt="Mac Paw">
    </router-link>
    <h1>Hello Intern!</h1>
    <h2>Welcome to MI 2022 Front-end test</h2>

    <div class="links-wrapper">
      <h2>Lets start using The Cat API</h2>
      <ul class="nav">
        <li>
          <figure>
            <div class="nav-card__wrapper">
              <img src="@/assets/images/vote-table.png" alt="Vote Table"></div>
            <figcaption>
              <router-link class="nav-link" to="/voting">VOTING</router-link>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div class="nav-card__wrapper">
              <img src="@/assets/images/pet-breeds.png" alt="Pet Breeds"></div>
            <figcaption>
              <router-link class="nav-link" to="/breeds" exact>BREEDS</router-link>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div class="nav-card__wrapper">
              <img src="@/assets/images/images-search.png" alt="Galery"></div>
            <figcaption>
              <router-link class="nav-link" to="/gallery">GALLERY</router-link>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideNavigation"
}
</script>

<style scoped lang="scss">
.navigation-container {
  max-width: 446px;
  width: 100%;
  margin-left: auto;
  padding-top: 30px;
}

.logo-link {
  display: block;
  margin-bottom: 80px;
}

h1 {
  font: 500 44px/58px $main-font;
  margin-bottom: 10px;
  color: $color-main;
}

h2 {
  font: 400 20px/29px $main-font;
  margin-bottom: 60px;
  color: $color-gray;
}

.links-wrapper {
  h2 {
    font-weight: 500;
    margin-bottom: 20px;
    color: $color-main;
  }
}

.nav {
  display: flex;
  justify-content: space-between;

  li {
    width: 100%;
    max-width: 138px;

    .nav-card__wrapper {
      border: 4px solid rgba(255, 255, 255, 0.6);
      border-radius: 20px;
      width: 100%;
      height: 198px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:nth-child(1) {
      .nav-card__wrapper {
        background-color: $color-violet;
      }
    }

    &:nth-child(2) {
      .nav-card__wrapper {
        background-color: $color-green;
      }
    }

    &:nth-child(3) {
      .nav-card__wrapper {
        background-color: $color-orange;
        align-items: flex-end;
      }
    }
  }

  figure {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  figcaption {
    margin-top: 10px;

    text-align: center;
    width: 100%;


    a {
      display: block;
      padding: 10px 0;
      color: $color-peach-main;
      letter-spacing: 2px;
      font: 500 12px/16px $main-font;
      transition: all 0.3s;
      background: #FFFFFF;
      border-radius: 10px;

      &:hover {
        background-color: $color-peach-secondary;
      }

      &.active-link {
        background: $color-peach-main;
        color: #fff;
      }
    }
  }
}
</style>
