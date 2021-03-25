<template>
    <div class="h-screen w-screen">
       <dashboard-profile>

       </dashboard-profile>



        <div class="py-12 ">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import DashboardProfile from '@/Jetstream/DashboardProfile'




    export default {
        components: {
            AppLayout,
            DashboardProfile,



        },
    }
</script>
