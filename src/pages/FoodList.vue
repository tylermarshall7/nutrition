
<template>
  <div class="foodList">
    <input type="text" v-model="query">
    <button @click="getFood"> submit </button>

  </div>
</template>


<script>
export default {
  name: 'foodList',
  data(){
    return {query:""}
  },

  mounted() {
    
  },

  computed:{},

  methods:{
    getFood() {
      this.$store.dispatch("getNutrients", this.query)
    }
  },

  components:{}
}
</script>


<style scoped>

</style>