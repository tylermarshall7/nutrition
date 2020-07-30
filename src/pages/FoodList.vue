
<template>
  <div class="foodList">
    <input type="text" v-model="food.query">
    <button @click="getFood"> submit </button>
    <food v-for="food in foodList" :foodData="food" :key="food.name"/>

  </div>
</template>


<script>

import food from "../components/Food";

export default {
  name: 'foodList',
  data(){
    return {food:{query: ""} }
  },

  mounted() {
    
  },

  computed:{
    foodList() {
      return this.$store.state.foods
    }
  },

  methods:{
    getFood() {
      this.$store.dispatch("getNutrients", this.food)
    }
  },

  components:{
    food
  }
}
</script>


<style scoped>

</style>