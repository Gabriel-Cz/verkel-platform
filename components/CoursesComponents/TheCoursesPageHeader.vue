<template>
    <div>
        <v-row :id="height" class="headerRow mt-16">
            <v-col cols="12" class="d-flex">
                <div class="headerDiv">
                    <p class="headerText d-flex ma-2 text-center text-md-left ml-md-16 mt-2 text-h4 text-md-h3">Explora en Nuestros Cursos</p>
                    
                        <p class="d-flex mt-10 ml-md-16 headerDescriptionText text-sm-left text-center text-md-left pl-sm-3 pl-md-2 text-body-1">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                             <br/>
                             tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "TheCoursesPageHeader",
    data () {
        return {
            recursosHumanos: {
                title: "Recursos Humanos",
                image: "ContenedorRecursosHumanos.jpg"
            },
            equiposAgiles: {
                title: "Equipos Agiles",
                image: "EngranesParaEA.jpg"
            }
        }
    },
    computed: {
        height() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return "heightXs";
                case 'sm': return "heightXs";
                case 'md': return "heightMd";
                case 'lg': return "heightMd";
                case 'xl': return "heightMd";
            }
        }
    } 
}
</script>

<style lang="scss" scoped>

 .headerText {
    font: 'Roboto', sans-serif
 }

#heightXs {
    height: 275px;
}

#heightMd {
    height: 400px;
}

 .headerRow {
    background-image: url('/TheHeaderSvg.svg');
 }

</style>