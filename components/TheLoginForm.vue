<template>
    <div>
        <v-form class="mt-8 loginForm">
            <v-row>
                <v-col cols="12">
                    <v-text-field 
                      class=""
                      type="email"
                      single-line
                      v-model="formData.email"
                      placeholder="Correo Electronico"
                      dense
                    />
                </v-col>
                <v-col cols="12">
                    <v-text-field
                      class=""
                      :type="showPassword ? 'text' : 'password' "
                      :append-icon="showPassword ? 'mdi-eye mb-1' : 'mdi-eye-off mb-1' " 
                      @click:append=" showPassword = !showPassword "
                      single-line
                      v-model="formData.password"
                      placeholder="Contraseña"
                      dense
                    />
                </v-col>
                <v-col cols="12 d-flex justify-center">
                    <v-btn color="primary" x-small text style="text-transform: capitalize;">¿Nuevo?, Registrate Ahora</v-btn>
                </v-col>
            </v-row>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-center">
            <v-btn color="primary" class="mt-8" type="submit" small @click="createUser()">Iniciar Sesion</v-btn>
            <v-btn color="error" class="ml-4 mt-8" small outlined @click="modal = !modal">Cancelar</v-btn>
        </v-card-actions>
    </div>
</template>

<script>

import auth from 'firebase/auth';

export default {
    name: "TheLoginForm",
    data () {
        return {
            showPassword: false,
            formData: {
                email: "",
                password: "",
            },
            userProfile: false,
            props: {
              modal: false,
            }
        }
    },
    methods: {
    async createUser() {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.formData.email,
          this.formData.password,
        ).then(data => {
          console.log('Iniciando Sesion')
          this.$router.push('/user/usuario1')
        })
      } catch(error) {
        this.error = error
      }
    }
  }
}


</script>

<style scoped>

</style>