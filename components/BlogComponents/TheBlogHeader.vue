<<template>
    <div>
        <v-row justify="center" align="center" style="background-image: url('/SvgBlogHeader.svg'); height: 500px;" class="mt-8">
            <v-col cols="5">
                <div class="text-center textHeader">Mantente al dia en los temas mas relevantes de Capital Humano.</div>
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

.colTextWrapper{
}

.colImageWrapper{
    background-image: url('/ImageBlogHeader.png');
    border-bottom-left-radius: 20px; 
    border-bottom-right-radius: 20px;
    filter: blur(1px);
}

.textHeader{
    font-family: 'Lora', sans-serif;
    font-size: 2.3rem;
    text-decoration: underline;
    line-height: 70px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.ImageBlogHeaderOne, .ImageBlogHeaderTwo{
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
 
</style>