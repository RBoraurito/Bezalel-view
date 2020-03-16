<template>
  <div class="section">
    <h4 class="has-text-centered has-text-dark is-size-2 is-size-3-touch">
      What is the Bezalel's speciality?
    </h4>
    <h4 class="has-text-centered has-text-grey is-size-4">
      -our skills-
    </h4>
    <div class="columns is-variable is-3 is-desktop">
      <div class="column" v-for="i in info" :key="i.title">
        <div class="box">
          <div class="image">
            <img :src="i.src" alt="i.title" class="is-rounded" />
          </div>
          <div class="section">
            <h3
              class="title is-size-4-touch is-size-4-desktop has-text-black has-text-centered has-text-warning"
            >
              {{ i.title }}
            </h3>
            <p
              class="is-size-4 is-size-5-desktop is-size-6-mobile has-text-grey-darker has-text-centered"
            >
              {{ i.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills",
  data() {
    return {
      info: {
        1: {
          src: "https://image.flaticon.com/icons/svg/385/385294.svg",
          title: "Flooring",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nunc lectus. Maecenas vel nulla non sem egestas suscipit id eget purus. Vivamus nulla massa, cursus rhoncus neque sit amet, ultricies porttitor ante."
        },
        2: {
          src: "https://image.flaticon.com/icons/svg/1876/1876734.svg",
          title: "General Fixes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nunc lectus. Maecenas vel nulla non sem egestas suscipit id eget purus. Vivamus nulla massa, cursus rhoncus neque sit amet, ultricies porttitor ante."
        },
        3: {
          src: "https://image.flaticon.com/icons/svg/994/994928.svg",
          title: "Cleaning",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nunc lectus. Maecenas vel nulla non sem egestas suscipit id eget purus. Vivamus nulla massa, cursus rhoncus neque sit amet, ultricies porttitor ante."
        }
      }
    };
  }
};
</script>

<style>
.image {
  max-width: 200px;
  margin: 0 auto;
}
</style>
