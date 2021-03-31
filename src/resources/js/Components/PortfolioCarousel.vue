<template>
  <div class="bg-white w-full h-64">
         <div class="flex flex-row z-1000 w-4/5 h-4/5 my-auto mx-auto border-4 overflow-x-auto space-x-6 overflow-hidden" v-for="(image,i) in images" v-bind:key="i">
                <img class="rounded-lg  " src="image" alt=i/>
         </div>
  </div>
</template>




<script>
export default {

data(){
    return {
        images:['','','','']
    }
}

}
</script>

<style>

</style>
