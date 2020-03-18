<template>
  <div class="section notification">
    <div class="container">
      <div class="section">
        <h4
          class="has-text-centered has-text-warning is-size-2 is-size-3-tablet is-size-4-mobile"
        >
          Residential cleaning services
        </h4>
        <h4 class="has-text-centered has-text-grey is-size-4 is-size-5-touch">
          -we care about your house-
        </h4>
      </div>
      <p class="is-size-5 has-text-grey" style="margin-bottom: 5px">
        House cleaning and maid service task can be time consuming and
        exhausting, even if you love house cleaning, you may not want to do
        every single maid service task required to make your home look the way
        you wonder.
      </p>

      <p class="is-size-5 has-text-grey" style="margin-bottom: 5px">
        Cleaning services can handle your maid tasks more quickly and provide
        beautiful results or at least give your home a professional house
        cleaning service whenever you wish.
      </p>

      <p class="is-size-5 has-text-grey" style="margin-bottom: 5px">
        We offer a great cleaning services including dusting, vacuuming, mopping
        and picking up everything you ask. We can transform you house´s
        appearance and free up your time to spend on the activities and people
        you love, especially if your home needs more than just cleaning or
        maintenance services.
      </p>

      <div
        class=" section is-fullwidth tabs is-toggle is-toggle-boxed is-flex"
        style="justify-content:center"
      >
        <ul>
          <li :class="this.currentType === 'premium' ? 'is-active' : ''">
            <a @click="active('premium')">
              <span>Premium</span>
            </a>
          </li>
          <li :class="this.currentType === 'gold' ? 'is-active' : ''">
            <a @click="active('gold')">
              <span>Gold</span>
            </a>
          </li>
          <li :class="this.currentType === 'silver' ? 'is-active' : ''">
            <a @click="active('silver')">
              <span>Silver</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="box">
        <div
          class="columns is-desktop"
          v-for="i in typeInfo"
          :key="i.title"
          v-show="i.id === currentType"
        >
          <div class="column is-2">
            <figure class="image" style="max-width:200px">
              <img :src="i.src" :alt="i.title" />
            </figure>
          </div>
          <div class="column">
            <div class="section">
              <h4 class="title is-size-4-mobile has-text-centered-mobile">
                {{ i.title }}
              </h4>
              <h4 class="subtitle is-size-6-mobile has-text-centered-mobile">
                {{ i.subtitle }}
              </h4>
            </div>
            <ul style="padding-left:5vw">
              <li v-for="l in i.list" :key="l" style="list-style:circle">
                {{ l }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "servRes",
  data() {
    return {
      typeTap: "",
      currentType: "premium",
      typeInfo: [
        {
          id: "premium",
          src: "https://image.flaticon.com/icons/svg/1855/1855345.svg",
          title: "Premium Service",
          subtitle:
            "Six (6) labor-hours provided by three (3) working for two hours.",
          list: [
            "Dusting, mopping and Vacuuming",
            "Kitchen counters/sink, face cabinets, face and inn stove, face and inn fridge, inn/out microwave oven, light fixtures",
            "Put dishes in dishwasher and turn on",
            "Bathroom vanity, tub and toilet cleaning, light fixtures",
            "Bedroom desk, light fixtures, ceiling fans, pictures and mirrors",
            "“If provided” Change lines and make bed",
            "Empty garbage and replace liner",
            "Ceiling fans, home decoration, pictures and light fixtures reach from a 6-foot ladder",
            "Patio cleaning",
            "Windows inside outside cleaning"
          ]
        },
        {
          id: "gold",
          src: "https://image.flaticon.com/icons/svg/2314/2314435.svg",
          title: "Gold Service",
          subtitle:
            "Six (6) labor-hours provided by two (2) working for two hours.",
          list: [
            "Dusting, mopping and Vacuuming",
            "Kitchen counters/sink, face cabinets, face and inn stove, face and inn fridge, inn/out microwave oven, light fixtures",
            "Put dishes in dishwasher and turn on",
            "Bathroom vanity, tub and toilet cleaning, light fixtures",
            "Bedroom desk, light fixtures, ceiling fans, pictures and mirrors",
            "“If provided” Change lines and make bed",
            "Empty garbage and replace liner",
            "Ceiling fans, home decoration, pictures and light fixtures reach from a 6-foot ladder"
          ]
        },
        {
          id: "silver",
          src: "https://image.flaticon.com/icons/svg/695/695122.svg",
          title: "Silver Service",
          subtitle:
            "Four (4) labor-hours provided by two (2) working for two hours.",
          list: [
            "Dusting, mopping and Vacuuming",
            "Kitchen counters/sink, face cabinets, face and inn stove, face and inn fridge, inn/out microwave oven, light fixtures",
            "Put dishes in dishwasher and turn on",
            "Bathroom vanity, tub and toilet cleaning, light fixtures",
            "Bedroom desk, light fixtures, ceiling fans, pictures and mirrors",
            "“If provided” Change lines and make bed",
            "Empty garbage and replace liner"
          ]
        }
      ]
    };
  },
  methods: {
    active(type) {
      this.currentType = type;
    },
    changeType() {}
  }
};
</script>

<style scoped>
.notification {
  margin-top: 15vh;
  margin-bottom: 0;
}
</style>
