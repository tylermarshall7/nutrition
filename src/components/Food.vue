<template>
  <div class="food">
    <h4>{{foodData.brand_name}}</h4>
    <img class="img-fluid" :src="foodData.photo.thumb" />
    <p>Calories: {{foodData.nf_calories}}</p>
    <button @click="addToJournal" class="btn btn-primary btn-block">Add to Journal</button>
  </div>
</template>


<script>
export default {
  name: "food",

  props: ["foodData"],

  data() {
    return {};
  },

  computed: {},

  methods: {
    addToJournal() {
      this.$store.dispatch("addToJournal", this.foodData);
    },
  },

  components: {},
};
</script>


<style scoped>
</style>