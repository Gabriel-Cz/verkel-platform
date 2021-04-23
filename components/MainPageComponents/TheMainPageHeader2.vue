<template>
    <div >
        <div class="custom-shape-divider-top-1601490863">
          <svg :height="svgHeight" :width="svgWidth" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shapeWhite"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shapeWhite"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shapeWhite"></path>
          </svg> 
        </div>
        <v-row class="d-flex justify-center mt-n9 mt-sm-0 mt-lg-0 mt-xl-16 pb-16"> 
            <v-col v-show="notShowDecorativeCol" cols="1" sm="0" md="1" lg="2"></v-col>
            <v-col cols="11" sm="10" md="10" lg="8" class="d-flex justify-center">
                <div class="text-center divOverlay">
                    <h1 class="pa-4 mt-2 mt-sm-5 pb-0 white--text text-body-1 text-md-h4 font-weight-medium font-sm-weight-bold">Bienvenido a Verkel <br /> Plataforma de Capacitacion #1 de Mexico.</h1>
                    <p v-show="notShowInMobile" class="mt-0 mt-sm-8 pa-4 pb-0 pt-0 pa-md-16 mx-lg-16 pb-md-0 pt-md-0 text-caption white--text text-md-body-1">Lorem Ipsum Dolor asitem asimet lorem ipsum dolom asimet ipsum asimet lorem ipsum dolem asim.
                       Lorem Ipsum Dolor asitem asimet lorem ipsum dolom asimet ipsum asimet lorem ipsum dolem asim.
                    </p>
                    <p v-show="notShowSmPlus" class="mt-8 font-weight-semi-bold pa-4 pb-0 pt-0 pa-md-16 pb-md-0 pt-md-0 font-weight-regular text-caption white--text text-md-body-1">
                       Lorem Ipsum Dolor asitem asimet lorem.
                       Lorem Ipsum Dolor asitem asimet lorem.
                       Lorem Ipsum Dolor asitem asimet lorem.
                    </p>
                    <v-btn class="mt-5 mb-7 mt-md-10 mb-md-14" 
                      :x-small="$vuetify.breakpoint.name === 'xs' ? true : false" 
                      dark 
                      color="light-blue accent-4"
                      nuxt-link to="/about"
                    >
                        Descubre Mas Sobre Verkel
                    </v-btn>
                </div>
            </v-col>
            <v-col v-show="notShowDecorativeCol" cols="2" sm="0" md="1" lg="2"></v-col>              
            
            <v-col cols="6" sm="3" lg="2"><v-img src="../MainPageImages/BackImage2.jpg" :height="imageHeight" class="BackImageUpLeft mt-10"></v-img></v-col>
            <v-col v-show="notShowInMobile"  cols="2" sm="3" lg="2"><v-img src="../MainPageImages/BackImage.jpg" :height="imageHeight" class="BackImageDownLeft"></v-img></v-col>
            
            <v-col v-show="notShowDecorativeCol" cols="2" sm="0" lg="2"></v-col>

            <v-col v-show="notShowInMobile" cols="6" sm="3" lg="2"><v-img src="/MainPageImages/BackImage3.jpg" :height="imageHeight" class="BackImageUpRight"></v-img></v-col>
            <v-col cols="6" sm="3" lg="2"><v-img src="/MainPageImages/BackImage4.jpg" :height="imageHeight" class="BackImageDownRight mt-10"></v-img></v-col>

        </v-row>
    </div>
</template>

<script>
export default {
    name: "TheMainPageHeader2",
    computed: {
        notShowInMobile() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return false
                case 'sm': return true 
                case 'md': return true
                case 'lg': return true
                case 'xl': return true
                default: false;
            }
        },
        notShowSmPlus() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return true
                case 'sm': return false
                case 'md': return false
                case 'lg': return false
                case 'xl': return false
                default: false;
            }
        },
        notShowDecorativeCol() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return false
                case 'sm': return false
                case 'md': return false
                case 'lg': return true
                case 'xl': return true
                default: false;
            }
        },
        imageHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return "225"
                case 'sm': return "250"
                case 'md': return "350"
                case 'lg': return "350"
                case 'xl': return "350"
                default: "350"
            }
        },
        svgHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return "100"
                case 'sm': return "150"
                case 'md': return "200"
                case 'lg': return "200"
                case 'xl': return "200"
                default: false;
            }
        },
    },
    beforeMount() {
        this.notShowInMobile,
        this.notShowSmPlus,
        this.notShowDecorativeCol,
        this.imageHeight,
        this.svgHeight
    }
}
</script>

<style lang="scss" scoped>

$divOverlayBg: linear-gradient(180deg, #537CE3 0%, rgba(114, 138, 202, 0.858843) 29.69%, rgba(83, 124, 227, 0.536458) 97.49%, rgba(83, 124, 227, 0) 100%);
$divOverlayMobileBg: linear-gradient(180deg, #537CE3 0%, #728ACA 29.69%, rgba(87, 125, 225, 0.8) 90.1%, rgba(83, 124, 227, 0.536458) 97.49%);

.custom-shape-divider-top-1601490863 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1601490863 svg {
    position: relative;
    display: block;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1601490863 .shape-fill {
    fill: #42509e;
}

.shapeWhite {
    fill: #FFFFFF;
}

.BackImageUpRight{
    position: relative;
    overflow: hidden;
    margin-right: -84px;
}

.BackImageDownLeft, .BackImageUpLeft {
    border-radius: 5px;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.25);
}

.BackImageDownRight, .BackImageUpRight {
    border-radius: 5px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
}

.BackImageUpRight, .BackImageUpLeft, .BackImageDownRight, .BackImageDownLeft {
    filter: brightness(60%);
}

.divOverlay{
    @media screen and (max-width: 600px) {
        background: $divOverlayMobileBg;
    }
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin-bottom: -280px;
    margin-top: 64px;
    background: $divOverlayBg;
    border-radius: 5px;
    backdrop-filter: blur(1px);
}

</style>