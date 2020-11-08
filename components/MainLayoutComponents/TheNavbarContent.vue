<template>
        <v-row class="ma-4">
            <v-col
              cols="6" md="4" sm="3" lg="3"
              class="d-flex justify-start"
            >
          
              <v-toolbar-title class="cardTitle">
                <v-img 
                  src="/Logos/verkel-logo.png" 
                  width="190" 
                  height="50"
                >
                </v-img>
              </v-toolbar-title>
            
            </v-col>
            <v-col
              cols="6" md="4" sm="3" lg="5"
              class="d-flex justify-center align-center mt-4"
            >
              
                <v-btn small v-for="btn in btns" :key="btn.name" 
                  class="ma-10 mt-0 mb-0 menuBtns"
                  elevation="0"
                  text
                  tile
                > 
                  <nuxt-link prefetch :to="btn.pagina" style="text-decoration: none;">
                  <v-icon class="pb-1" x-small>mdi-checkbox-blank-circle</v-icon>
                    {{ btn.name }}
                  </nuxt-link>
                </v-btn>
                
            </v-col>
            <v-col
              cols="6" md="4" sm="3" lg="4"
              class="d-flex justify-center align-center"
            >
                <v-btn
                  outlined 
                  color="primary" 
                  class="loginBtns" 
                  small
                  @click="loginFormModalView(false)"
                >
                    Registrarse
                </v-btn>
                <v-btn 
                  text 
                  class="loginBtns ml-4" 
                  small
                  v-bind="attrs"
                  v-on="on"
                  @click="loginFormModalView(true)"
                >
                    Iniciar Sesion
                </v-btn>
                <v-dialog
                  width="400"
                  class="d-flex justify-center"
                  v-model="modal"
                  v-if="modal"
                >
                    <div class="d-flex justify-center">
                       <v-card
                        width="400"
                        class="cardLoginForm"
                       >
                          <v-img src="/VerkelLogoMiniToForm.svg" class="imageBehindForm ma-8">
                            <v-card-title v-if="loginFormView" class="d-flex justify-center">
                              <span 
                                class="mr-3 pointerHover"  
                              >
                                  Iniciar Sesion
                              </span>
                              <v-divider vertical></v-divider>
                              <span 
                                class="ml-3 text-subtitle-2 pt-1 pointerHover" 
                                @click="loginFormView = false"
                              >
                                  Registrarse
                              </span>
                            </v-card-title>
                            <v-card-title v-else class="d-flex justify-center">
                              <span 
                                class="mr-3 pt-2 text-subtitle-2 pointerHover" 
                                @click="loginFormView = true"
                              >
                                  Iniciar Sesion
                              </span>
                              <v-divider vertical></v-divider>
                              <span 
                                class="span-Registrarse ml-3 pt-1 pointerHover"
                              >
                                  Registrarse
                              </span>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                              <v-expand-transition>
                                <TheLoginForm v-show="loginFormView" modal="false"></TheLoginForm>
                              </v-expand-transition>
                              <v-expand-transition>
                                <TheRegisterForm v-show="!loginFormView"></TheRegisterForm>
                              </v-expand-transition>
                            </v-card-text>
                          </v-img>
                       </v-card>
                    </div>
                </v-dialog>
            </v-col>
        </v-row>
</template>

<script>

import TheLoginForm from '@/components/TheLoginForm';
import TheRegisterForm from '@/components/TheRegisterForm';

export default {
    name: "TheNavbarContent",
    components: {
        TheLoginForm,
        TheRegisterForm,
    },
    data () {
      return {
        btns: [
            {
                key: 'uno',
                name: 'Blog',
                pagina: '/blog'
                
            },
            {
                key:  'dos',
                name: 'Cursos',
                pagina: '/cursos'
            },
            {
                key: 'tres',
                name: 'Para Empresas',
                pagina: '/'
            },
        ],
        'modal' : false,
        loginFormView: false,
      }
    },
    methods: {
      loginFormModalView(e) {
        this.modal = true;
        this.loginFormView = e;
      }
    }
}
</script>

<style scoped>
  
  .v-btn.loginBtns{
    text-transform: capitalize;
  }

  .menuBtns {
    padding: 12px 24px;
    background-color: transparent;
    border-radius: 3px;
    position: relative;
    overflow: hidden;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
}

.menuBtns {
    color: #42509e;
    position: relative;
    transition: font-size 0.2s ease-in;
}

.menuBtns:hover {
    color: hsl(222, 87%, 33%);
    opacity: 0.7;
    border-bottom: none;
    font-size: 17px;
    text-shadow: 0px 2px 5px hsla(210, 3%, 15%, 0.562);
}

.imageBehindForm{
  backdrop-filter: opacity(0.5);
}

.pointerHover{
  cursor: pointer;
}


</style>