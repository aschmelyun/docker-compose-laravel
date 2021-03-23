<template>
    <div class = "h-screen w-screen">
       <dashboard-profile>
         <profile-circle/>
       </dashboard-profile>



        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import DashboardProfile from '@/Components/DashboardProfile'
    import ProfileCircle from '@/Components/ProfileCircle'



    export default {
        components: {
            AppLayout,
            DashboardProfile,
            ProfileCircle


        },
    }
</script>
