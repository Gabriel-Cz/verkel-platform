<template>
        <v-row class="pt-5 pb-5">
            <v-col
              cols="6" sm="5" md="2" lg="4"
              class="d-flex align-start justify-start"
            >
          
              <v-toolbar-title class="pa-2 mt-3">
                <nuxt-link to="/">
                  <v-img 
                    src="/Logos/verkel-logo.svg" 
                  >
                  </v-img>
                </nuxt-link>
              </v-toolbar-title>
            
            </v-col>
            <v-col
              cols="6" sm="5" md="7" lg="4"
              class="d-flex justify-center align-center"
            >
              
                <v-btn small v-for="btn in btns" :key="btn.name" 
                  class="ma-10 mt-5 mb-5 menuBtns"
                  elevation="0"
                  text
                  tile
                  nuxt-link :to="btn.pagina"
                > 
                  <nuxt-link :to="btn.pagina" style="text-decoration: none;">
                    {{ btn.name }}
                  </nuxt-link>
                </v-btn>
                
            </v-col>
            <v-col
              cols="6" md="3" sm="2" lg="4"
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
               key: 'cero',
               name: 'Principal',
               pagina: '/'
            },
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
                pagina: '/empresas'
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
    },
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

.menuBtns:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: rgb(25, 60, 175);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.menuBtns:hover:after { 
  width: 100%; 
  left: 0; 
}

.imageBehindForm{
  backdrop-filter: opacity(0.5);
}

.pointerHover{
  cursor: pointer;
}


</style>