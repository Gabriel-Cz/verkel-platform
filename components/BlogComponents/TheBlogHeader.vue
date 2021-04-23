<<template>
    <div>
        <v-row id="row" justify="center" align="center" style="background-image: url('/ImageBlogHeader.svg'); " class="mt-4 mt-md-8">
            <v-col cols="12" sm="10" md="6" lg="5">
                <div class="text-center textHeader text-h5 text-xl-h4 pa-lg-4 text-primary font-weight-light">Mantente al dia en los temas mas relevantes de Capital Humano.</div>
            </v-col>
        </v-row>
        <v-divider></v-divider>
    </div>
</template>
 
<script>
    export default {
        name: "TheBlogHeader",
    }
</script>

<style lang="scss" scoped>

#row {
    @media screen and (max-width: 800px) {
        height: 250px;
    }
    height: 500px;
}

.colImageWrapper{
    background-image: url('/ImageBlogHeader.svg');
}

.textHeader{
    font-family: 'Roboto', sans-serif;
    line-height: 70px;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
}

 
</style>