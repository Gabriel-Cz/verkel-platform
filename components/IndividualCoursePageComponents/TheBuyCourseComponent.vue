<template>
    <div>
        <v-row class="mt-16 theRowOfBuyComponent">
            <v-col 
              cols="6"
              class="d-flex justify-center"  
            >
                <v-card
                class="pa-16"
                width="500"
                elevation="0"
                color="transparent"
                >   
                <span class="ribbon5 mt-10">Adquiere el curso de por vida por $***</span>
                    <v-img 
                      class="img"
                      src="../cursos/norma035.jpg"
                      height="350"
                    >                       
                    </v-img>
                    <v-card-actions class="d-flex justify-end">
                    <v-btn 
                      style="margin-top: -35px; margin-right: -64px;"
                      large
                      class="pa-4 buyBtn"
                    >   Comprar Ahora
                    </v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col 
              cols="6"
            >
              <v-row class="">
                  <v-col 
                    cols="12"
                  >
                    <p class=" mt-4 listTitle">¿Que Habilidades requiero para aprender correctamente en este curso?</p>  
                    <v-card 
                      class="mr-16 cardListRequirementsWrapper"
                      elevation="0" 
                    >
                      <v-card-text>
                        <v-row class="listRequirements">
                          <v-col cols="3">
                              <ul>
                                <li 
                                  v-for="i in 3" :key="i"
                                  class="pa-3"
                                > Lorem Ipsum </li>
                              </ul>
                          </v-col>
                          <v-col cols="3">
                              <ul>
                                <li 
                                  v-for="i in 3" :key="i"
                                  class="pa-3"
                                > Lorem Ipsum </li>
                              </ul>
                          </v-col>
                          <v-col cols="3">
                              <ul>
                                <li 
                                  v-for="i in 2" :key="i"
                                  class="pa-3"
                                > Lorem Ipsum </li>
                              </ul>
                          </v-col>
                        </v-row>
                      </v-card-text> 
                    </v-card>
                    <p class="mt-8 listTitle">¿Que Habilidades nuevas Aprenderas con este curso?</p>  
                    <v-card 
                      class="mr-16 mt-4 cardListNewSkillsWrapper"
                      elevation="0"
                    >
                      <v-card-text>
                        <v-row class="listNewSkills">
                          <v-col cols="3">
                            <ul>
                                <li 
                                  v-for="i in 3" :key="i"
                                  class="pa-3"
                                > Lorem Ipsum </li>
                              </ul>
                          </v-col>
                          <v-col cols="3">
                            <ul>
                                <li 
                                  v-for="i in 3" :key="i"
                                  class="pa-3"
                                > Lorem Ipsum </li>
                              </ul>
                          </v-col>
                          <v-col cols="3">
                            <ul>
                                <li 
                                  v-for="i in 3" :key="i"
                                  class="pa-3"
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
    </div>
</template>

<script>
export default {
    name: "TheBuyCourseComponent",
    data () {
      return {
        curso: {
          cursoNombre: ""
        }
      }
    }
}
</script>

<style scoped>

.theRowOfBuyComponent{
  background-color: rgba(128, 128, 128, 0.2);
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
  background: #EDBA19;
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

.buyBtn{
  background-image: linear-gradient(265.88deg, #6FA2D1 1.18%, #88ADD0 47.83%, #9CC6EE 95.49%);
  border: rgba(128, 128, 128, 0.2) 1px solid;
  color: floralwhite;
}

.img{
  background-size: cover;
  position: relative;
  box-shadow: -5px 5px 2px rgba(128, 128, 128, 0.5);
}

.listRequerimentsContent{
  color: #3EA7F3;
}

.listNewSkills{
  color: #3EA7F3;
}

.listRequirements{
  color: #cd8d11;
}

.cardListRequirementsWrapper{
  border: 1px solid #cd8d11;
  background-color: transparent;
}

.cardListNewSkillsWrapper{
  border: 1px solid #3EA7F3;
  background-color: transparent;
}

.listTitle{
  color: rgba(128, 128, 128, 0.9);
}
</style>