<script>
export default {
    name: "NavButton",
    props: ['routeName'],
    data() {
        return {
            count: 0
        }
    },
    methods: {
        onClickButton() {
            this.count++;
            this.$emit('counter-clicked')
        }
    }
}
</script>

<template>
    <li class="nav-item">
        <RouterLink class="nav-link" :to="{name:routeName}" v-on:click.prevent="onClickButton()">{{ routeName }} (Count: {{count}})</RouterLink>
    </li>
</template>
<style scoped>

</style>