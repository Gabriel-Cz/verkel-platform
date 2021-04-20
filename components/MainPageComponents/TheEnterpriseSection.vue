<template>
  <div>
    <v-container fluid class="mt-16 pt-md-16 pb-md-16 customContainer">
      <div class="svgWrapper">
            <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="250" cy="250" r="250" fill="url(#paint0_linear)"/>
<g filter="url(#filter0_d)">
<path d="M13 332L90.7654 272.627L123.138 322.489L244.889 229.107L281.132 306.925L481 151" stroke="white"/>
</g>
<circle cx="250" cy="250" r="250" fill="url(#paint1_linear)"/>
<defs>
<filter id="filter0_d" x="8.69678" y="150.606" width="476.611" height="189.792" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
<stop stop-color="#808080"/>
<stop offset="1" stop-color="#808080" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="381" y1="38" x2="148" y2="473.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#EBEBEB"/>
            <stop offset="1" stop-color="#EEEEEE" stop-opacity="0"/>
            </linearGradient>
            </defs>
           </svg>
          </div>
      <v-row class="justify-center">
        <v-col cols="12" class="d-flex justify-center text-center">
          <div class="divTextWrapper">
            <p class="planesEmpresasTexto text-md-h3">Planes Para Empresas</p>
          </div>
        </v-col>
        <v-col cols="12" sm="8" md="5" class="d-flex justify-center">
          <p class="descripcionEmpresas text-center text-md-h5">
            Verkel diseña el plan concorde a las necesidades y requerimientos de tu empresa. Consulta el plan que podemos diseñar para ti
            sin ningun costo de por medio.
          </p>
        </v-col>
        <v-col 
          cols="12"
          class="d-flex justify-center">
          <v-btn
            outlined
            rounded
            small
            color="#FFA726"
          >
            Consultar Planes
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    name: "TheEnterpriseSection"
}
</script>

<style scoped>

.customContainer {
  z-index: 9;
  position: relative;
}

.svgWrapper {
  position: absolute;
  overflow: hidden;
  z-index: 5;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

</style>