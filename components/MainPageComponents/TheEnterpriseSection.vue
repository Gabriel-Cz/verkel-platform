<template>
  <div>
    <v-container fluid class="mt-16 pt-16">
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
            color="#FFA726"
          >
            Consultar Planes
          </v-btn>
        </v-col>
      </v-row>
      <svg width="2828" height="171" viewBox="0 0 2828 171" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" d="M2828 171V105.037C2715.37 73.4018 2583.87 59.1945 2455.65 65.1368C2289.83 72.789 2134.36 112.604 1968.29 118.574C1794.27 124.787 1620.59 94.5202 1454.06 68.3287C1290.82 42.6787 1128.14 32.8748 960.577 49.6898C875.384 58.2398 795.964 75.1118 714.424 91.4993C496.102 135.375 205.03 191.363 0.00012207 96.2303V171L2828 171Z" fill="#FFA726"/>
<path opacity="0.5" d="M2828 171V148.471C2797.36 118.389 2762.86 89.9745 2715.61 68.3287C2593.72 12.4402 2439.15 12.825 2298.74 40.4985C2225.33 54.9623 2157.13 77.6483 2087.42 97.2135C1990.98 124.289 1887.74 162.764 1779.09 167.993C1693.64 172.054 1612.01 154.57 1546.73 123.02C1471.86 86.8395 1399.86 34.6703 1302.51 18.9953C1207.2 3.61951 1110.79 28.5285 1021.76 53.5943C932.722 78.66 844.629 109.169 746.215 114.941C605.451 123.277 479.252 82.3365 348.174 59.5935C277.003 47.253 209.131 50.8013 142.932 70.281C90.072 85.7993 29.812 108.656 0.00012207 140.448V171L2828 171Z" fill="#FFA726"/>
<path d="M2828 171V162.977C2474.66 86.925 2087.79 69.369 1706.63 110.338C1605.29 121.225 1508.13 139.009 1405.89 148.043C1266.85 160.341 1140.82 130.601 1015.72 97.5982C876.845 60.9615 739.993 35.283 586.339 42.75C382.416 52.725 179.908 107.887 0.00012207 163.604V171L2828 171Z" fill="#FFA726"/>
</svg>

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