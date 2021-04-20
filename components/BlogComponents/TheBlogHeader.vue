<<template>
    <div>
        <v-row justify="center" align="center" style="background-image: url('/ImageBlogHeader.svg'); height: 500px;" class="mt-8">
            <v-col cols="12" sm="10" md="6" lg="5">
                <div class="text-center textHeader text-h5 text-md-h4 text-primary">Mantente al dia en los temas mas relevantes de Capital Humano.</div>
            </v-col>
        </v-row>
        <v-divider></v-divider>
    </div>
</template>
 
<script>
    export default {
        name: "TheBlogHeader",
        data () {
            return {
                // 
            }
        }
    }
</script>

<style scoped>

.colImageWrapper{
    background-image: url('/ImageBlogHeader.svg');
}

.textHeader{
    font-family: 'Roboto', sans-serif;
    line-height: 70px;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
}

.ImageBlogHeaderOne, .ImageBlogHeaderTwo{
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
 
</style>