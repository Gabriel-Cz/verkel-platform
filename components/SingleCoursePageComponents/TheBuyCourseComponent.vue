<template>
    <div class="pb-16">
        <v-card color="transparent" elevation="20" :width="cardHeight" class="container mt-5 mt-lg-16">
          <v-row class="mt-0 theRowOfBuyComponent justify-center">
            <v-col 
              cols="12" lg="6" xl="5"
              class="d-flex justify-center"  
            >
                <v-card
                class="pa-lg-16"
                width="500"
                elevation="0"
                color="transparent"
                >   
                <span class="ribbon5 mt-10">Adquiere el curso de por vida por $***</span>
                    <v-img 
                      class="img"
                      :src="imagenDelCurso"
                      :height="imageHeight"
                    >                       
                    </v-img>
                    <v-card-actions class="d-flex justify-end">
                    <v-btn  
                      class="pa-4 buyBtn ml-n9 ml-md-n16 mt-n7 mt-md-n9"
                      color="#FFEA00"
                      dark
                      large
                    >   Comprar Ahora
                    </v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col 
              cols="12" lg="6" xl="5"
            >
              <v-row class="mt-xl-5 text-center text-lg-left">
                  <v-col 
                    cols="12"
                  >
                    <p class=" mt-4 listTitle">¿Que Habilidades requiero para aprender correctamente en este curso?</p>  
                    <v-card 
                      class="cardListRequirementsWrapper"
                      elevation="0" 
                      color="transparent"
                    >
                      <v-card-text>
                        <v-row justify="center">
                          <v-col cols="6" sm="4">
                              <ul class="listSkillsNeeded">
                                <li 
                                  v-for="i in 3" :key="i"
                                  class="py-2"
                                > Lorem Ipsum </li>
                              </ul>
                          </v-col>
                          <v-col cols="6" sm="4">
                              <ul class="listSkillsNeeded">
                                <li 
                                  v-for="i in 2" :key="i"
                                  class="py-2"
                                > Lorem Ipsum </li>
                              </ul>
                          </v-col>
                        </v-row>
                      </v-card-text> 
                    </v-card>
                    <p class="mt-6 mt-md-8 listTitle">¿Que Habilidades nuevas Aprenderas con este curso?</p>  
                    <v-card 
                      class="mt-4 cardListNewSkillsWrapper"
                      elevation="0"
                      color="transparent"
                    >
                      <v-card-text>
                        <v-row justify="center">
                          <v-col cols="6" sm="4">
                            <ul class="listNewSkills">
                                <li 
                                  v-for="i in 3" :key="i"
                                  class="py-2"
                                > Lorem Ipsum </li>
                              </ul>
                          </v-col>
                          <v-col cols="6" sm="4">
                            <ul class="listNewSkills">
                                <li 
                                  v-for="i in 2" :key="i"
                                  class="py-2"
                                > Lorem Ipsum </li>
                              </ul>
                          </v-col>
                        </v-row>
                      </v-card-text> 
                    </v-card>                        
                  </v-col>
              </v-row>
            </v-col>
        </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "TheBuyCourseComponent",
    props: {
      imagenDelCurso: String
    },
    computed: {
      cardHeight() {
        switch(this.$vuetify.breakpoint.name) {
          case 'xs': return '100%';
          case 'sm': return '90%';
          default: return '75%';
        }
      },
      imageHeight() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 250;
          case 'sm': return 250;
          default: return 350;
        }
      }
    }
}
</script>

<style scoped>

.container {
  border: 1px solid gray;
}

.ribbon5 {
  display: block;
  width: calc(100% + 20px);
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: -50px;
  background: #FDD835;
  position: relative;
  z-index: 1;
  top: 20px;
}
.ribbon5:before, .ribbon5:after {
  content: "";
  position: absolute;
}
.ribbon5:before {
  height: 0;
  width: 0;
  bottom: -10px;
  left: 0;
  border-top: 10px solid #cd8d11;
  border-left: 10px solid transparent;
}
.ribbon5:after {
  height: 0;
  width: 0;
  right: 0;
  bottom: -10px;
  border-top: 10px solid #cd8d11;
  border-right: 10px solid transparent;
}

@media (min-width: 500px) {
  .ribbons-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .ribbon {
    width: 48%;
  }
}

.img{
  background-size: cover;
  position: relative;
  box-shadow: -5px 5px 2px rgba(128, 128, 128, 0.5);
}

.listNewSkills {
  list-style: none; 
}

.listNewSkills li::before {
  content: "\2022";
  color: #9CCC65;
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

.listSkillsNeeded {
  list-style: none;
}

.listSkillsNeeded li::before {
  content: "\2022";
  color: #039BE5;
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

</style>