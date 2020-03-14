<template>
  <div class="section notification">
    <div>
      <h4 class="has-text-centered has-text-dark is-size-2 is-size-3-touch">
        Why choose Bezalel Group?
      </h4>
      <h4 class="has-text-centered has-text-grey is-size-4 is-size-5-touch">
        Insured, licensed and hight quality service
      </h4>
    </div>
    <div class="section">
      <div class="columns is-variable is-3 is-desktop">
        <div class="column" v-for="i in info" :key="i.title">
          <div class="box card-background">
            <div class="image">
              <img :src="i.src" alt="i.title" class="is-rounded" />
            </div>
            <div class="section">
              <h3
                class="title is-size-4-touch is-size-4-desktop has-text-black has-text-centered"
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
  </div>
</template>
<script>
export default {
  name: "culture",
  data() {
    return {
      info: {
        1: {
          src: "https://image.flaticon.com/icons/svg/1156/1156677.svg",
          title: "GUARANTEED",
          description:
            "We believe in exceptional service and quality workmanship which is why we back every job we do with our worry-free guarantee."
        },
        2: {
          src: "https://image.flaticon.com/icons/svg/2580/2580914.svg",
          title: "LICENSED",
          description:
            "To improve our service we are licensed in all works we do, you can be confident that we are going to do an excellent job."
        },
        3: {
          src: "https://image.flaticon.com/icons/svg/1875/1875697.svg",
          title: "EXPERIENCED",
          description:
            "We have a lot of experience in all service we offer, also we do the service we offer with a lot of passion and diligence."
        }
      }
    };
  }
};
</script>
<style scoped>
img {
  max-width: 150px;
  margin: auto auto;
}
.column {
  margin-bottom: 10px;
}
.card-background {
  background-color: #ffdb59;
}
@media screen and (max-width: 420px) {
  h3 {
    font-size: 1.25rem !important;
  }
}
</style>
