<template>
    <div>
        <div style="height: 100px"></div>
        <v-container fluid class="mt-16 containerOfToolSection">
            <div class="custom-shape-divider-top-1602172901">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
              </svg>
            </div>
            <v-row class="mt-5 mb-10 rowView d-flex justify-center">
                <v-col cols="8">
                    <v-row class="divCard">
                        <v-col 
                          cols="12"
                          class="d-flex justify-end">
                            <div class="cardTitleWrapper mr-16 pa-10 pt-6">
                              Afiliate a Verkel
                            </div>
                        </v-col>
                        <v-col cols="6"
                          class="mt-10 ml-10 pb-16"
                        >
                            <p class="afiliadosDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure
                            </p>
                        </v-col>
                        <v-col cols="5" class="d-flex justify-center">
                            <v-img 
                              max-width="300"
                              class="mt-16 mb-16"
                              max-height="300"
                              src="verkelAfiliados.png"></v-img>
                        </v-col>
                    </v-row>
                    <v-row class="secondCardRow ml-16 mr-16 mt-5 d-flex justify-center">
                        <v-col 
                          cols="12"
                          class="d-flex">
                            <div class="cardTitleWrapper ml-16 pa-10 pt-6">
                              Afiliate a Verkel
                            </div>
                        </v-col>
                        <v-col cols="6"
                          class="mt-10 ml-10 pb-16 secondCardDescription"
                        >
                            <p class="afiliadosDescription text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            </p>
                            <v-btn 
                             rounded
                             outlined
                              color="#5e949f"
                              class="d-flex justify-self-center mt-10"
                            >
                               Afiliate Ahora
                            </v-btn>
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

.containerOfToolSection{
    border-bottom: ridge 0.2px rgba(0, 0, 0, 0.2);
}

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




.customShape{
    transform: rotate(90deg);
    height: 150px;
}

.custom-shape-divider-top-1602172901 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1602172901 svg {
    position: relative;
    display: block;
    width: calc(153% + 1.3px);
    height: 158px;
}

.custom-shape-divider-top-1602172901 .shape-fill {
    fill: #FFFFFF;
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
    font-weight: 300;
    height: 100px;
    border-radius: 10px;
    font-size: 4vh;
    border: 1px solid rgba(184, 183, 183, 0.7);
    background: linear-gradient(to top, #d6d6d6 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #e0e0e0 0%, rgba(255, 255, 255, 0) 100%), #f8f8f8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.cardDescription, .divCard{
    border: 0.5px solid #696666;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.afiliadosDescription{
    font-size: 1.8vh;
    font-family: 'Intern', sans-serif;
}

  
</style>