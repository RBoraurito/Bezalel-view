<template>
  <div class="section notification">
    <div class="container">
      <div class="section">
        <h4
          class="has-text-centered has-text-dark is-size-2 is-size-3-touch has-text-warning"
        >
          Contact us
        </h4>
        <h4 class="has-text-centered has-text-grey is-size-4 is-size-5-mobile">
          -we are waiting for you-
        </h4>
      </div>
      <div class="columns is-vcentered">
        <figure class="image column is-3">
          <img
            src="https://image.flaticon.com/icons/svg/1033/1033949.svg"
            alt="Contact Image"
          />
        </figure>
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="onSubmit" class="column is-9">
            <div class="field is-full-mobile">
              <label class="label">Name</label>
              <div class="control">
                <ValidationProvider
                  name="email"
                  rules="required|email"
                  v-slot="{ errors }"
                  class="field"
                >
                  <input class="input" type="text" placeholder="Your name" />
                  <br />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="field is-full-mobile">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input is-danger"
                  type="email"
                  placeholder="Example@mail.com"
                />
              </div>
            </div>
            <div class="control">
              <button class="button is-warning" :disabled="invalid">
                <strong>Submit</strong>
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style>
figure {
  max-width: 300px;
  border-radius: 20px;
}
.notification {
  margin-bottom: 0;
}
</style>
