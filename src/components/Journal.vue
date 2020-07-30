<template>
  <div class="journal col-12">
    <div class="row justify-content-around border rounded shadow-sm my-5">
      <h1>{{journalData.brand_name}}</h1>
      <img class="img-fluid f-height" :src="journalData.photo.thumb" />
      <h1>Calories: {{journalData.nf_calories}}</h1>
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
  max-height: 100px;
}
</style>