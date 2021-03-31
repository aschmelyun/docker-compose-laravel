<template>
  <div class="w-20 h-8 rounded-lg text-center" v-bind:class="colorArray[categoryColor - 1]">
  <h3 class="profiletext font-bold" v-bind:class="textColorArray[categoryColor -1]">{{category}}</h3>
  </div>

</template>

<script>
    export default {
    
    data(){
      return {
        colorArray:['bg-red-300','bg-green-300'],
        textColorArray:['text-red-600','text-green-600']
      }
    },
    props:{
        category:String,
        categoryColor:Number 
    },

    }

</script>