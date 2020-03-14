<template>
  <section class="container is-fluid">
    <div class="section">
      <h4 class="has-text-centered has-text-dark is-size-2 is-size-3-touch">
        What is Bezalel Group?
      </h4>
      <h4 class="has-text-centered has-text-grey is-size-4 is-size-5-touch">
        -your confident handyman-
      </h4>
    </div>
    <div class="section is-fluid">
      <div class="columns is-v-centered">
        <figure class="image img-container column is-4 is-5-widescreen is-hidden-touch">
          <houses />
        </figure>
        <div class="column">
          <div class="">
            <p class=" has-text-grey is-size-4-touch is-size-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a urna
              sagittis, commodo lectus ac, ultricies nibh. Donec lacinia
              hendrerit lacinia. Etiam non dui nec nisl congue sollicitudin in
              non urna. Integer at metus sollicitudin, suscipit metus vitae,
              tincidunt lectus. Donec imperdiet tortor in arcu semper gravida.
              Sed id enim non nulla tincidunt pellentesque in vel ante. Vivamus
              quis nisl nisl. Integer porta viverra dictum. Suspendisse quis
              malesuada felis. Curabitur non elementum dui.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import houses from "../icons/houses";
export default {
  name: "about-us",
  components: {
    houses
  }
};
</script>

<style>
.img-container {
  max-width: 500px;
  max-height: 500px;
}
</style>
