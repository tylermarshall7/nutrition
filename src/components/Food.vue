<template>
  <div class="food">
    <h4>{{foodData.brand_name}}</h4>
    <img class="img-fluid" :src="foodData.photo.thumb">
    <p>Calories: {{foodData.nf_calories}}</p>

  </div>
</template>


<script>
export default {
  name: 'food',

  props: [
    "foodData",
  ],

  data(){
    return {}
  },

  computed:{},

  methods:{},

  components:{}
}
</script>


<style scoped>

</style>