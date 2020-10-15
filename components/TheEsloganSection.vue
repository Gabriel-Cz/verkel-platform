<template>
    <div>
        <v-container height="400" class="mt-16" ></v-container>
        <v-row class="rowEsloganSection mt-16">
            <v-col 
              cols="12"
              class="d-flex align-center justify-center">
                
                <span class="redLetter">C</span><span>o</span><span>n</span><span>o</span><span>c</span><span>i</span><span>m</span><span>i</span><span>e</span><span>n</span><span>t</span><span>o</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br>
                <span class="redLetter">A</span><span>g</span><span>i</span><span>l</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>P</span><span>a</span><span>r</span><span>a</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>E</span><span>l</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="redLetter">F</span><span>u</span><span>t</span><span>u</span><span>r</span><span>o</span>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    name: "TheEsloganSection",
}
</script>

<style scoped>

span{
    color: rgba(255, 250, 240, 0.795);
    font-size: 10vh;
    text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.35);
}

.randomContainer{
    height: 200px;
}

.redLetter{
    color: #bb4131a4;
}

.containerOfEsloganSection {
    border: 1px ridge rgba(80, 80, 80, 0.2);
    height: 600px;
    background: linear-gradient(178deg,#7a780d9a, #174a6d96, #51136d94, #6816169d);
    background-size: 1200% 1200%;

   
}

.rowEsloganSection{
    background-image: linear-gradient(178deg,#a09f839a, #35688a96, #5d575f94, #7c33339d);
    -webkit-animation: AnimationName 10s ease infinite;
    -moz-animation: AnimationName 10s ease infinite;
    animation: AnimationName 10s ease infinite;
    height: 500px;
    background-size: 1200% 1200%;
}

@-webkit-keyframes AnimationName {
    0%{background-position:50% 0%}
    50%{background-position:51% 100%}
    100%{background-position:50% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:50% 0%}
    50%{background-position:51% 100%}
    100%{background-position:50% 0%}
}
@keyframes AnimationName {
    0%{background-position:50% 0%}
    50%{background-position:51% 100%}
    100%{background-position:50% 0%}
}

</style>