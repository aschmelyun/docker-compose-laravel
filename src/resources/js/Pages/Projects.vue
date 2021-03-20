<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
               Active Projects
            </h2>

        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <h1>{{user?.role_id}}</h1>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import {computed} from 'vue'
    import {usePage} from '@inertiajs/inertia-vue3'


    export default {
        components: {
            AppLayout,

        },
        setup(){
            const user = computed(()=> usePage().props.user)
            return {user}
        }
    }
</script>
