<template>
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
        <div class="container container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <nav-button route-name="Home" @counter-clicked="onChildClicked"></nav-button>
                    <nav-button route-name="Movies" @counter-clicked="onChildClicked"></nav-button>
                </ul>
            </div>
            <div>Total click: {{ count }}</div>
        </div>
    </nav>

</template>

<script>
import NavButton from "@/components/NavButton.vue";

export default {
    name: "NavBar",
    components: {NavButton},
    data() {
        return {
            count: 0
        }
    },
    methods: {
        onChildClicked() {
            this.count++;
        }
    }
}
</script>

<style scoped>

</style>