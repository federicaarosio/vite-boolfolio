<template lang="">
    <main class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="my-3">
                    Projects
                </h1>

                <section class="cards-wrapper d-flex flex-wrap justify justify-content-between">
                    <SingleCard v-for="project in projects"
                    :title="project.title"
                    :imageUrl="project.cover_image"
                    :description="project.description"
                    :author="project.author"
                    :creationDate="project.creation_date"
                    :type="project.type.name"
                    :technologies="project.technologies"
                    :socials="project.socials"
                    />
                </section>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import SingleCard from '../components/SingleCard.vue';
export default {
    name: 'ProjectsList',

    components: {
        SingleCard,
    },

    data(){
        return{
            projects: [],
        }
    },

    methods:{
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.projects = response.data.results.data
            })
            .catch(function (error) {
                console.warn(error);
            })
        }
    },

    created(){
        this.getProjects();
    }
}
</script>
<style lang="scss" scoped>
</style>