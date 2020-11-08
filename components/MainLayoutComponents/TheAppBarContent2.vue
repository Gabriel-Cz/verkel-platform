<template>
  <div class="navbar-content d-flex justify-center">
    <v-toolbar-title>
        <v-img src="/Logos/verkel-logo.png"></v-img>
    </v-toolbar-title>
    <v-toolbar-items>
        <button v-for="btn in btns" :key="btn.name" 
                  class="ma-10 mt-0 mb-0 menuBtns"
                  elevation="0"
                  text
                  tile
                > 
                  <nuxt-link to="/cursos" style="text-decoration: none;">
                    <v-icon>mdi-dots</v-icon>
                    {{ btn.name }}
                  </nuxt-link>
                </button>       
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-divider vertical></v-divider>
    <v-toolbar-items>
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
    </v-toolbar-items>
  </div>
</template>

<script>

import TheLoginForm from '@/components/TheLoginForm';
import TheRegisterForm from '@/components/TheRegisterForm';

export default {
    name: "TheAppBarContent2",
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
                
            },
            {
                key:  'dos',
                name: 'Cursos',
                link: '../cursos/index'
            },
            {
                key: 'tres',
                name: 'Para Empresas'
            },
        ],
        props: {
          modal: false
        },
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