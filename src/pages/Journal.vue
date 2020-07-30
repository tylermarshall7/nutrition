<template>
  <div class="journalPage">
    <div class="row bg-secondary text-white">
      <h1 class="mx-3">Your Journal</h1>
      <h1 class="ml-auto mx-3">Total Calories: {{calorieCount}}</h1>
    </div>
    <div>
      <journal v-for="food in foodsJournal" :journalData="food" :key="food.nix_item_id" />
    </div>
  </div>
</template>





<script>
import journal from "../components/Journal";
export default {
  name: "journalPage",
  data() {
    return {
      calorieCount: 0,
    };
  },
  mounted() {
    this.$store.state.journal.forEach((food) => {
      this.calorieCount += food.nf_calories;
    });
  },
  computed: {
    foodsJournal() {
      return this.$store.state.journal;
    },
  },
  methods: {},
  components: { journal },
};
</script>


<style scoped>
</style>