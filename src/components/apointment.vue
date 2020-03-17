<template>
  <div class="modal is-clipped" style="z-index:1">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head is-warning">
        <p class="modal-card-title has-text-centered ">Make an apointment</p>
        <button class="delete" @click="close" aria-label="close"></button>
      </header>
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="onSubmit">
          <section class="modal-card-body">
            <div class="section">
              <div class="columns">
                <div class="column">
                  <label for="name" class=""><strong>Your Name</strong></label>
                  <br />
                  <ValidationProvider
                    name="name"
                    rules="required|alpha_spaces"
                    v-slot="{ errors }"
                    class="field"
                  >
                    <input
                      v-model="name"
                      type="text"
                      placeholder="Name"
                      class="input"
                    />
                    <br />
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="column">
                  <label for="cel" class=""
                    ><strong>Your phone number</strong></label
                  >
                  <br />
                  <ValidationProvider
                    name="cel"
                    rules="required"
                    v-slot="{ errors }"
                    class="field"
                  >
                    <input
                      v-model="cel"
                      type="number"
                      placeholder="Number"
                      class="input"
                    />
                    <br />
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="container">
                <label for="email" class=""><strong>Your Email</strong></label>
                <br />
                <ValidationProvider
                  name="email"
                  rules="required|email"
                  v-slot="{ errors }"
                  class="field"
                >
                  <input
                    v-model="email"
                    type="text"
                    placeholder="example@mail.com"
                    class="input"
                  />
                  <br />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="">
                <label for="name" class=""
                  ><strong>Extra Information</strong></label
                >
                <br />
                <textarea
                  v-model="extraInfo"
                  type="text"
                  placeholder="Put here extra information"
                  class="input"
                  style="max-height: 50px"
                />
                <br />
              </div>
              <div></div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-warning" :disabled="invalid">
              Contact
            </button>
            <button class="button" @click="close">Cancel</button>
          </footer>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import { required, email, alpha_spaces } from "vee-validate/dist/rules";

// No message specified.
extend("email", email);
extend("alpha_spaces", alpha_spaces);

// Override the default message.
extend("required", {
  ...required,
  message: "This field is required"
});
export default {
  name: "apointment",
  data() {
    return {
      name: "",
      cel: false,
      email: "",
      extraInfo: ""
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onSubmit() {
      alert("Form has been submitted!");
    }
  }
};
</script>

<style></style>
