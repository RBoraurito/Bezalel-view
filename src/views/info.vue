<template>
  <div>
    <about-us style="margin-top:15vh" />
    <contact />
  </div>
</template>

<script>
import aboutUs from "../components/about-us";
import contact from "../components/contact";
export default {
  name: "info",
  components: {
    aboutUs,
    contact
  }
};
</script>

<style></style>
