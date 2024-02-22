<template lang="">
    <main class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <h1 class="my-3">
                    Searching projects
                </h1>

                <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" v-model="queryString" @keyup.enter="getProjects(queryString)">
                        <label for="floatingInput">Search a project by title</label>
                    </div>
                </div>

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
                    :linkRoute="{ name: 'single-project', params: { id: project.id}}"
                    linkLabel="Read more..."
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
            queryString: '',
        }
    },

    methods:{
        getProjects(query){
            axios.get('http://127.0.0.1:8000/api/projects/search', {
                params: {
                    title: query,
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.projects = response.data.results
            })
            .catch(function (error) {
                console.warn(error);
            })
        }
    },

}
</script>
<style lang="scss" scoped>
</style>