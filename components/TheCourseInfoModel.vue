<template>
    <div class="divCategorias-info">          
        <h2 class="divProfesiones-titulo text-center text-md-left ma-md-16 mb-0 pl-2 pr-2">{{ divInfoTitle }}</h2>
        <p class="divProfesiones-descripcion text-center text-md-left ma-md-16 mt-4 pl-2 pr-2">
          {{ divInfoDescripcion }}
        </p>
    </div>
</template>

<script>
export default {
    name: "TheCourseInfoModel",
    data () {
        return {
            //
        }
    },
    props: {
        divInfoTitle: "",
        divInfoDescripcion: "",
    }
}
</script>

<style scoped>

  .divProfesiones-titulo {
    border-radius: 5px;
  }

</style>