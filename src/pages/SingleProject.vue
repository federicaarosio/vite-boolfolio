<template lang="">
    <main class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <h1 class="my-5">
                    {{ project.title }}
                </h1>
                
                <div class="row">
                    <div class="col-6">
                        <img :src="project.cover_image" alt="">
                    </div>
                    <div class="col-6">
                        <p>
                            <strong>Author: </strong>{{ project.author }}
                        </p>
                        <p>
                            <strong>Creation date: </strong>{{ project.creation_date }}
                        </p>
                        <p>
                            <strong>Type: </strong>{{ project.type.name }}
                        </p>
                        <p>
                            <strong>Technologies: </strong>
                            <span v-for="(tech, index) in project.technologies" :key="tech.id">
                                {{ tech.name }}<span v-if="index !== project.technologies.length - 1">, </span>
                            </span>                     
                        </p>
                        <p>
                            <strong>Socials: </strong>
                            <span v-for="(social, index) in project.socials" :key="social.id">
                                {{ social.name }}<span v-if="index !== project.socials.length - 1">, </span>
                            </span>                     
                        </p>
                        <p>
                            <strong>Description: </strong>{{ project.description }}
                        </p>
                    </div>
                </div>

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
            project: {},
        }
    },

    methods:{
        getProject(){
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`, {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.project = response.data.results
            })
            .catch(function (error) {
                console.warn(error);
            })
        }
    },

    created(){
        this.getProject();
    }
}
</script>
<style lang="scss" scoped>
</style>