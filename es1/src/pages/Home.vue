<template>
    <HomeContainer></HomeContainer>
    <div class="row">
        <MoviePreview id="5692a15524de1e0ce2dfcfa3"></MoviePreview>
        <MoviePreview id="5692a51224de1e0ce2dfdc5f"></MoviePreview>
        <MoviePreview id="5692a56d24de1e0ce2dfdd07"></MoviePreview>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import HomeContainer from "@/components/HomeContainer.vue";
import MoviePreview from "@/components/MoviePreview.vue";

export default defineComponent({
    name: "Home",
    components: {MoviePreview, HomeContainer}
})
</script>

<style scoped>

</style>