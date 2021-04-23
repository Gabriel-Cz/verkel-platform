<template>
    <div>
        <v-form class="mt-8 registerForm" @submit.prevent="pressed">
            <v-row>
                <v-col cols="6">
                    <v-text-field 
                      v-model="formData.firstName"
                      single-line
                      placeholder="Primer Nombre"
                      dense
                    />
                </v-col>
                <v-col cols="6">
                    <v-text-field 
                      v-model="formData.secondName"
                      class=""
                      single-line
                      placeholder="Apellido"
                      dense
                    />
                </v-col>
                <v-col cols="12">
                    <v-text-field 
                      v-model="formData.email"
                      class=""
                      type="email"
                      single-line
                      placeholder="Correo Electronico"
                      dense
                    />
                </v-col>
                <v-col cols="12">
                    <v-text-field
                      v-model="formData.password"
                      class=""
                      :type="showPassword ? 'text' : 'password' "
                      :append-icon="showPassword ? 'mdi-eye mb-1' : 'mdi-eye-off mb-1' " 
                      @click:append=" showPassword = !showPassword "
                      single-line
                      placeholder="Contraseña"
                      dense
                    />
                </v-col>
                <v-col cols="12 d-flex justify-center">
                    <v-btn color="primary" x-small text style="text-transform: capitalize;">¿Ya tienes cuenta?, Inicia Sesion Ahora</v-btn>
                </v-col>
            </v-row>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions class="mt-5 mb-0 pb-0 d-flex justify-center">
        <v-btn 
          class="primary" 
          small 
          dark
          @click="alert('No disponible el registro de usuarios por el momento.')"
        >
            Registrarse
        </v-btn>
        <v-btn 
          color="error" 
          class="ml-4" 
          small 
          outlined 
          @click="modal = false">Cancelar</v-btn>
        </v-card-actions>
    </div>
</template>

<script>

export default {
    name: "TheRegisterForm",
    data () {
        return {
            showPassword: false,
            formData: {
                firstName: "",
                secondName: "",
                email: "",
                password: "",
            }
        }
    },
}
</script>