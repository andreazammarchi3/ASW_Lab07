<script>

import {defineComponent} from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
    components: {NavBar}
})
</script>

<template>
    <div class="container-fluid">
        <h1>Amazing Movies</h1>
    </div>
    <NavBar/>
    <router-view/>
</template>

<style>

</style>
