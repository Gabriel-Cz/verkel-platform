<template>
    <div>
        <div class="p-5">
            {{ contenidoDelArticulo }}
        </div>
    </div>
</template>

<script>
    export default {
        name : "ThePostContent",
        props: {
            contenidoDelArticulo: String
        }
    }
</script>

<style scoped>

</style>