<template>
    <div>
        <div class="pa-5 pa-lg-10 body-1 cardBody">
            {{ contenidoDelArticulo }}
        </div>
    </div>
</template>

<script>
    export default {
        name : "PostContent",
        props: {
            contenidoDelArticulo: String
        }
    }
</script>

<style lang="scss" scoped>

.cardBody {
    border-bottom: 1px solid #BDBDBD;
}

</style>