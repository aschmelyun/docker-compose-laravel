<template>
<app-layout>
    <div class="w-screen h-screen bg-white">
<div class="w-full h-4/5 ">


<div class="flex w-full h-full items-end  bg-center bg-cover bg-no-repeat" v-bind:style="backgroundImage">
<nav-circle>
</nav-circle>
<div class="absolute opacity-40 w-full h-full" v-bind:style="backgroundOverlay"></div>
  <div class="opacity-95 w-11/12  md:w-3/5  border-2  h-56 md:h-80 xl:h-96 bg-white mx-auto my-5 ">

    <img  class="h-2/3 w-auto bottom-1/3 mx-2 border-white border-4 relative rounded-full bg-white " src = "/storage/profile-photos/sZDiTg7ubgQIXifuBZ1dZQ7L8aM3DOHPtsO2n3RJ.jpg"
      />

 <div class="flex">
 <profile-info>
 </profile-info>
 <div class="flex flex-col w-1/2 right-3 space-y-2 items-end relative bottom-10  xl:bottom-20">
      <div v-for="(category,i) in categories" v-bind:key="i">
       <category v-bind:category="category" v-bind:categoryColor="categoryColors[i]">
       </category>
      </div>
 </div>
 </div>

 <div class="w-full flex justify-end space-x-2 -my-8 xxs:-my-16 xs:-my-8 sm:-my-14 md:-my-8  xl:-my-16">
 <instagram-icon>
 </instagram-icon>
 <tiktok-icon>
 </tiktok-icon>
 <youtube-icon>
 </youtube-icon>
 </div>

 </div>
 </div>
</div>
<profile-media>
</profile-media>
</div>



</app-layout>
</template>


<script>

import ProfileInfo from '@/Components/ProfileInfo'
import NavCircle from '@/Components/NavCircle'
import InstagramIcon from '@/Components/InstagramIcon'
import TiktokIcon from '@/Components/TiktokIcon'
import YoutubeIcon from '@/Components/YoutubeIcon'
import Category from '@/Components/Category'
import AppLayout from   '@/Layouts/AppLayout'
import ProfileMedia from '@/Components/ProfileMedia'

export default {
  components:{
      AppLayout,
      ProfileInfo,
      NavCircle,
      InstagramIcon,
      TiktokIcon,
      YoutubeIcon,
      Category,
      ProfileMedia,
    },
    data(){
        return {
           categories:['fitness','travel'],
           categoryColors:[1,2],
           backgroundImage:"background-image: url(/storage/profile-photos/sZDiTg7ubgQIXifuBZ1dZQ7L8aM3DOHPtsO2n3RJ.jpg)",
           backgroundOverlay:"background: rgb(10,6,122);background: linear-gradient(0deg, rgba(10,6,122,1) 0%, rgba(6,235,190,1) 25%, rgba(18,119,211,0) 39%); "
        }
    },


}
</script>
