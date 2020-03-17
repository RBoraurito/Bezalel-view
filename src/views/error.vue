<template>
  <div class="section notification">
    <div class="container">
      <div class="section">
        <h4
          class="has-text-centered has-text-dark is-size-2 is-size-3-tablet is-size-4-mobile"
        >
          Ruta Invalida
        </h4>
        <h4 class="has-text-centered has-text-grey is-size-4 is-size-5-touch">
          -Contenido no encontrado-
        </h4>
      </div>
      <div class="container imgContainer">
        <not-found />
      </div>
    </div>
  </div>
</template>

<script>
import notFound from "../icons/notFound";
export default {
  name: "error",
  components: {
    notFound
  }
};
</script>

<style scoped>
.notification {
  margin-top: 15vh;
}
.imgContainer {
  height: 50vh;
}</style
>>
