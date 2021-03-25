<template>
    <div class="bg-dashboard border-dashboardprofile h-1/5 md:h-2/5 w-11/12  mx-auto my-5 rounded-xl flex">

    <div class='flex items-center w-1/2 h-full '>

     <profile-circle>
     </profile-circle>

    </div>

      <div class="flex  items-center  w-1/2 h-full ">

     <div class="flex-row w-full space-y-2 md:space-y-10">
      <p class="profiletext text-lg font-extrabold md:text-4xl ">
        Sahara Santos
      </p>
        <div class="flex">
        <input class="border-input rounded-full  w-11/12  lg:w-3/5 xl:2/5 h-6  lg:h-15 "/>
         <button class="relative bg-black text-white font-sans font-semibold tracking-wide rounded-full w-14 h-6 lg:w-15 lg:h-15 -ml-14">
          claim
        </button>
        </div>
      </div>



    </div>

    </div>
</template>

<script>
 import ProfileCircle from '@/Components/ProfileCircle'

export default {
    components:{
        ProfileCircle
    }


}

</script>

