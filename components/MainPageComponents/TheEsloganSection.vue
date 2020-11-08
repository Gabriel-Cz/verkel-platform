<template>
    <div>
        <v-container height="400" class="mt-16" ></v-container>
        <v-row class="rowEsloganSection mt-10 mb-10">
            <v-col 
              cols="12"
              class="d-flex align-center mt-10 justify-center">
                
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
    color:floralwhite;
    letter-spacing: 5px;
    font-size: 10vh;
    text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.35);
    font-family: 'Helvetica Neue', sans-serif;
}

.randomContainer{
    height: 200px;
}

.redLetter{
    color: #bb4131a4;
}



.rowEsloganSection{
    background-image: linear-gradient(178deg,#9e9e9e, #9e9e9e9a, #9e9e9e63, #9e9e9e4f, #9e9e9e0c);
    -webkit-animation: AnimationName 10s ease infinite;
    -moz-animation: AnimationName 10s ease infinite;
    animation: AnimationName 10s ease infinite;
    height: 480px;
    background-size: 1200% 1200%;
    border: double 6px floralwhite;
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