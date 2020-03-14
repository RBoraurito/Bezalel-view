<template>
  <div class="has-background-grey-darker">
    <div class="section">
      <div class="columns">
        <div class="column is-8-widescreen is-7-desktop">
          <h3
            class="has-text-warning has-text-centered-touch is-size-4"
            @click="aboutDrop"
          >
            About the company
          </h3>
          <div class="section" :class="about ? 'is-hidden-mobile' : ''">
            <p class="is-size-5 has-text-grey-lighter">
              We are specialized in residential and commercial cleaning, we care
              about the details of our work to improve our service quality.
              <br />
              In fact, we want to be your confident handyman service.
            </p>
          </div>
        </div>
        <div class="column">
          <h3
            class="has-text-warning has-text-centered-touch is-size-4"
            @click="linkDrop"
          >
            Quick links
          </h3>
          <ul
            class="section has-text-centered-mobile"
            :class="link ? 'is-hidden-mobile' : ''"
          >
            <li class="is-size-5 has-text-grey-lighter ">Home</li>
            <li class="is-size-5 has-text-grey-lighter">Testimonials</li>
            <li class="is-size-5 has-text-grey-lighter">Privacy</li>
            <li class="is-size-5 has-text-grey-lighter">Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div class="container ">
        <div class="columns has-text-centered is-vcentered is-mobile">
          <div class="column is-4 social-link"><facebook /></div>
          <div class="column is-4 social-link"><gmail /></div>
          <div class="column is-4 social-link"><whatsapp /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import facebook from "@/icons/facebook";
import gmail from "@/icons/gmail";
import whatsapp from "@/icons/whatsapp";
export default {
  name: "PxFooter",
  components: {
    facebook,
    gmail,
    whatsapp
  },
  data() {
    return {
      link: true,
      about: true
    };
  },
  methods: {
    linkDrop() {
      this.link = !this.link;
    },
    aboutDrop() {
      this.about = !this.about;
    }
  }
};
</script>
<style scoped>
.section {
  align-items: center;
  justify-content: space-evenly;
}
input {
  margin: 10px;
}
.social-link {
  width: 55px;
  height: 55px;
  padding: 0;
}
li {
  text-decoration: underline;
}
</style>
