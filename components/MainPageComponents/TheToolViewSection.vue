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
                            <div class="cardTitleWrapper mr-16 pa-md-5 pl-md-7 pr-md-7 pa-3 pl-4 pr-4 text-h5">
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
                            <div>
                                <svg width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0381 11.1698L31.7741 53.1698L48.0381 11.1698" stroke="black" stroke-width="2"/>
<path d="M10.415 12.3019L26.151 54.3019L42.415 12.3019" stroke="black"/>
<g filter="url(#filter0_d)">
<circle cx="29.0986" cy="56.7217" r="1.25" fill="black"/>
</g>
<circle cx="30" cy="30" r="29.5" stroke="black"/>
<g clip-path="url(#clip0)">
<circle cx="83" cy="30" r="29.5" stroke="black"/>
<path d="M83.4737 2.19644C83.3967 2.19644 83.324 2.21568 83.2513 2.21568C83.0246 2.20927 82.8 2.1943 82.5712 2.19644H83.4737ZM83.123 37.0009C83.0823 37.0009 83.046 36.9945 83.0053 36.9945C82.9754 36.9945 82.9476 37.0009 82.9177 37.0009H83.123ZM70.4022 24.1947C70.4343 24.1882 70.4578 24.154 70.4921 24.1455C72.5045 31.4276 77.7143 36.8769 83.0075 36.9924C87.828 36.77 93.7478 31.419 95.7197 24.1733C96.6264 24.2289 97.5332 23.1595 97.7877 21.671C98.0508 20.1184 97.499 18.7325 96.5644 18.5721C96.5045 18.5614 96.4425 18.5999 96.3848 18.6021C96.1132 6.61918 90.4201 2.39319 83.2513 2.21141C75.858 2.24776 69.2388 7.38481 69.658 18.6063C69.5874 18.6063 69.5211 18.5614 69.4527 18.5743C68.5138 18.7347 67.9663 20.1205 68.2294 21.6732C68.486 23.2216 69.4612 24.3508 70.4022 24.1947ZM92.9672 39.0733L86.2497 52.2175L85.1889 43.6693L86.8464 42.3091H82.83H79.1579L80.8175 43.6693L79.7546 52.2175L73.0456 39.0733C61.3771 40.6452 53 45.6454 53 57.8015H113C113.004 45.6432 104.629 40.6473 92.9672 39.0733Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d" x="23.8486" y="55.4717" width="10.5" height="10.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<clipPath id="clip0">
<rect width="60" height="60" fill="white" transform="translate(53)"/>
</clipPath>
</defs>
</svg>

                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="divCard ml-2 mr-2 ml-lg-16 mr-lg-16 mt-md-9 d-flex justify-center">
                        <v-col 
                          cols="12"
                          class="d-flex justify-center">
                            <div class="cardTitleWrapper pa-md-5 pl-md-7 pr-md-7 pa-3 pl-4 pr-4 text-h5">
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
    border-radius: 5px;
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