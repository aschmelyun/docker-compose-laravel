<template>
    <div>
        <div class="flex mx-auto w-11/12 h-16 md:w-3/5  rounded-lg bg-customgrey items-center m-14">
             <div class="flex justify-center items-center w-1/2 h-3/5 text-center " >
             <p class="profiletext bg-grey-500 text-xl w-3/5 h-full font-bold" :class="[selectedTab===0? classes.active:'']" @click="selectedTab=0">Profile</p>
             </div>
             <div class="flex justify-center items-center w-1/2 h-3/5 text-center "  >
             <p class="profiletext bg-grey-500 text-xl w-3/5 h-full font-bold " :class="[selectedTab===1? classes.active:'']" @click="selectedTab=1">Reviews</p>
             </div>

       

        </div>
 
    </div>
</template>


<script>
export default {
    data(){
        return {

        selectedTab:0,
        classes:{
            active:'bg-white rounded-xl'
        }
        
        }
    },
}
</script>