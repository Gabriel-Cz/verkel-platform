<template>
  <div>
    <v-container class="mt-16 pt-16">
      <v-row>
        <v-col cols="10" class="d-flex justify-end">
          <div class="max-height d-flex align-end divTextWrapper">
            <p class="planesEmpresasTexto">Planes Para Empresas</p>
          </div>
          <div class="mr-16">
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="250" fill="url(#paint0_linear)"/>
         <g filter="url(#filter0_d)">
         <path d="M13 332L90.7654 272.627L123.138 322.489L244.889 229.107L281.132 306.925L481 151" stroke="white"/>
         </g>
         <defs>
          <filter id="filter0_d" x="8.69658" y="150.606" width="476.611" height="189.792" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
          </defs>
         </svg>
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <p class="descripcionEmpresas text-left ml-8">
            Verkel diseña el plan concorde a las necesidades y requerimientos de tu empresa. Consulta el plan que podemos diseñar para ti
            sin ningun costo de por medio.
          </p>
        </v-col>
        <v-col 
          cols="9"
          class="d-flex justify-end pr-12">
          <v-btn
            outlined
            rounded
            large
            color="#BD3636"
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

.planesEmpresasTexto{
      font-size: 50px;
      color: #808080;
  }

.divTextWrapper{
  overflow: hidden;
  z-index: 1;
  position: relative;
  margin-right: -200px;
  margin-bottom: 30px;
}

.descripcionEmpresas{
  font-family: 'Roboto' sans-serif;
  font-size: 20px;
  width: 800px;
}

</style>