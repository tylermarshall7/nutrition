<template>
  <div class="journal col-5">
    <div class="row justify-content-between border rounded shadow-sm my-5">
      <h1>{{journalData.brand_name}}</h1>
      <h1>Calories: {{journalData.nf_calories}}</h1>
      <img class="img-fluid f-height" :src="journalData.photo.thumb" />
    </div>
  </div>
</template>


<script>
export default {
  name: "journal",
  data() {
    return {};
  },
  props: ["journalData"],
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
.f-height {
  max-height: 200px;
}
</style>