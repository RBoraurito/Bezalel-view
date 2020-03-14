<template>
  <nav
    class="navbar has-background-grey-darker"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }" class="logo-container logo">
        <img
          src="../assets/resources/photos/Bezalel.png"
          alt="Logo"
          srcset=""
        />
        >
      </router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navBar"
        @click="toggleActive"
      >
        <span class="has-text-warning" aria-hidden="true"></span>
        <span class="has-text-warning" aria-hidden="true"></span>
        <span class="has-text-warning" aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navBar"
      class="navbar-menu has-background-grey-darker"
      :class="menuStatus ? 'is-active' : ''"
    >
      <div class="navbar-start is-family-secondary">
        <div class="navbar-item has-dropdown is-hoverable">
          <span
            class="navbar-link is-arrowless has-text-warning is-size-5"
            @click="toggleMenu"
          >
            Services
          </span>

          <div
            class="navbar-dropdown has-background-grey-darker"
            v-show="menuDrop"
          >
            <a class="navbar-item has-text-warning">
              About
            </a>
            <a class="navbar-item has-text-warning">
              Jobs
            </a>
            <a class="navbar-item has-text-warning">
              Contact
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item has-text-warning">
              Report an issue
            </a>
          </div>
        </div>
        <a class="navbar-item has-text-warning is-size-5">
          Testimonials
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons columns is-centered is-8">
            <a class="button is-warning is-outlined is-medium">
              <strong>Make an apointment</strong>
            </a>
            <a class="button is-warning is-outlined is-medium">
              <strong>Call us</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PxHeader",
  components: {},
  data() {
    return {
      menuStatus: false,
      menuDrop: false
    };
  },
  methods: {
    toggleActive() {
      this.menuStatus = !this.menuStatus;
    },
    toggleMenu() {
      this.menuDrop = !this.menuDrop;
    }
  }
};
</script>
<style scoped>
a {
  color: transparent;
}
nav {
  height: 15vh;
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
}
#navbar {
  text-align: center;
}
.navbar-burger {
  width: 4.5rem;
  height: 4.5rem;
  text-align: center;
  margin: auto 0;
  margin-left: auto;
}
.logo-container {
  display: flex;
  padding: 5px;
  height: 15vh;
  margin-right: 25px;
  max-width: 20vw;
}
@media screen and (max-width: 1020px) {
  .logo-container {
    max-width: 30vw;
  }
}
@media screen and (max-width: 580px) {
  .logo-container {
    max-width: 40vw;
  }
}
@media screen and (max-width: 420px) {
  .logo-container {
    max-width: 50vw;
  }
}
</style>
