<template>
    <div>
        <v-row class="thePreviewRow mt-16 d-flex justify-center">
            <v-col 
            cols="12" md="6" lg="5"
            class="d-flex justify-center align-center"
            >
             
                <span class="ml-16">
                    <p class="previewText">Dale un vistazo a la presentacion del curso <br> <span class="courseTitle">Norma 035</span>
                    </p>
                </span>
            </v-col>
            <v-col cols="12" md="6" lg="5"  class="d-flex justify-center align-center">
                <div class="d-flex mt-16">
                    <video width=420  height=240 controls poster="/MiniaturaNorma035.jpg">
                 <source src="https://www.youtube.com/watch?v=PuM34db3Jn4.webm" type="video/webm">
                   <source src="https://www.youtube.com/watch?v=PuM34db3Jn4.ogg"  type="video/ogg">
                     <source src="https://www.youtube.com/watch?v=PuM34db3Jn4.mp4" type="video/mp4">
                </video>
                </div>
            </v-col>
        </v-row>
        <div class="divSpacer"></div>
    </div>
</template>

<script>
export default {
    name: "TheCoursesPreview",
    
}
</script>

<style scoped>

  .thePreviewRow{
    background-image: url("/BubblesBG.svg");
    height: 400px;
  }

  .previewText{
      font-size: 32px;
      font-family: 'IBM Plex Serif', serif;
      font-weight: 400;
  }

  .courseTitle{
      font-size: 24px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300; 
      text-decoration-line: underline;
  }
</style>