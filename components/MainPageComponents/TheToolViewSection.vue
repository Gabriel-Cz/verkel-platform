<template>
    <div>
        <div style="height: 100px"></div>
        <v-container fluid class="mt-16 containerOfToolSection">
            <v-row class="mt-5 mb-10 rowView d-flex justify-center">
                <v-col cols="12" sm="11" md="10" lg="8">
                    <v-row class="divCard justify-center">
                        <v-col 
                          cols="12"
                          class="d-flex">
                            <div class="cardTitleWrapper mr-16 pa-md-5 pl-md-7 pr-md-7 pa-3 pl-4 pr-4">
                              Verkel Afiliados
                            </div>
                        </v-col>
                        <v-col cols="11" md="6"
                          class="mt-10 ml-lg-0 pb-md-16 text-center text-md-left"
                          style="font-family: Latee;"
                        >
                            <p class="afiliadosDescription text-caption text-md-subtitle-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure
                            </p>
                        </v-col>
                        <v-col cols="5" md="5" class="d-flex justify-center">
                            <div class="divSvgVerkelAfiliados"></div>
                        </v-col>
                    </v-row>
                    <v-row class="divCard ml-2 mr-2 ml-lg-16 mr-lg-16 mt-md-9 d-flex justify-center">
                        <v-col 
                          cols="12"
                          class="d-flex justify-center">
                            <div class="cardTitleWrapper pa-md-5 pl-md-7 pr-md-7 pa-3 pl-4 pr-4">
                              Afiliate a Verkel
                            </div>
                        </v-col>
                        <v-col cols="10" md="8" lg="6"
                          class="mt-10 mt-lg-10 ml-lg-10 pb-lg-16 d-flex flex-column justify-center"
                        >
                            <p class="afiliadosDescription text-center text-lg-left text-caption text-md-subtitle-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            </p>
                            <div class="d-flex justify-center">
                                <v-btn 
                              rounded
                              :small="this.$vuetify.breakpoint.name === 'xs' ? true : false" 
                              outlined
                              router-link to="/afiliados"
                              color="#5e949f"
                              class="d-flex justify-self-center mt-7 mb-5 mb-sm-0"
                            >
                               Afiliate Ahora
                            </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'TheToolViewSection',
    data () {
        return {
            //
        }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.OverlayDiv{
    width: 750px;
    height: 180px;
    background-color: rgb(0, 0, 0, 0.7);
    border-radius: 10px;
    z-index: 1;
    overflow: hidden;
    position: relative;
    margin-top: -145px;
    margin-left: 95px;
}

.TextOfOverlayDiv{
    font-size: 26px;
    font-weight: 300;
    color: rgb(255, 255, 255);
    width: 700px;
    height: 200px;
}

.divImage{
    border-radius: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.ImageWrapper{
    border-radius: 10px;
    width: 800px;
    position: relative;
    opacity: 0.7;
    z-index: 0;
}

.TooViewImage{
    border-radius: 10px;
}



.leverageDiv{
    color: #494949;
    width: 650px;
    font-size: 22px;
    border-bottom: 2px solid #935151;
}

.leverageLetters{
    color: #935151;
    font-family: 'Roboto';
}

.divCard{
    border-radius: 5px;
    border: solid 1px rgba(0, 0, 0, 0.5);
}

.secondCardRow{
    border-radius: 5px;
    border: solid 1px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}

.cardTitleWrapper{
    z-index: 1;
    overflow: hidden;
    position: relative;
    margin-top: -60px;
    font-family: 'Roboto';
    font-weight: 400;
    border-radius: 5px;
    font-size: 3.5vh;
    color: rgb(112, 112, 112);
    background: linear-gradient(to top, #d6d6d6 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #e0e0e0 0%, rgba(255, 255, 255, 0) 100%), #f8f8f8;
    box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.25);
}

.cardDescription, .divCard{
    border: 0.5px solid #b4b4b46e;
}

.divSvgVerkelAfiliados {
    background-image: url('/VerkelAfiliados.svg');
    height: 100%;
    width: 100%;
    border: solid;
}

.afiliadosDescription{
    font-family: 'Intern', sans-serif;
}

  
</style>