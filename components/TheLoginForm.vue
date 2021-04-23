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
            <v-btn color="primary" class="mt-8" type="submit" small @click="alert('No disponible el inicio de sesion por el momento.')">Iniciar Sesion</v-btn>
            <v-btn color="error" class="ml-4 mt-8" small outlined @click="modal = false">Cancelar</v-btn>
        </v-card-actions>
    </div>
</template>

<script>

export default {
    name: "TheLoginForm",
    data () {
        return {
            showPassword: false,
            formData: {
                email: "",
                password: "",
            },
            props: {
              modal: false,
            }
        }
    },
}

</script>

<style scoped>

</style>