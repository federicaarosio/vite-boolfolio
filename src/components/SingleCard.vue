<template lang="">
    <div class="card mb-5" style="width: 18rem;">
        <img :src="imageUrl" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <strong>Author:</strong> {{ author }}
            </li>
            <li class="list-group-item">
                <strong>Creation date:</strong> {{ creationDate }}
            </li>
            <li class="list-group-item">
                <strong>Type:</strong> {{ type }}
            </li>
            <li class="list-group-item">
                <strong>Technologies: </strong>
                <span v-for="(tech, index) in technologies" :key="tech.id">
                    {{ tech.name }}<span v-if="index !== technologies.length - 1">, </span>
                </span>
            </li>
            <li class="list-group-item">
                <strong>Socials: </strong>
                <span v-for="(social, index) in socials" :key="social.id">
                    {{ social.name }}<span v-if="index !== socials.length - 1">, </span>
                </span>
                <div class="my-4" v-if="linkRoute">
                    <router-link :to="linkRoute" class="btn btn-primary">
                        {{ linkLabel }}
                    </router-link>
                </div>
            </li>
        </ul>



    </div>
    <div>
        
    </div>
</template>
<script>
export default {
    name: 'SingleCard',

    props: {
        title: String,
        imageUrl: String,
        description: String,
        author: String,
        creationDate: String,
        type: String,
        technologies: Array,
        socials: Array,
        linkRoute: Object, String,
        linkLabel: String,
    },
}
</script>
<style lang="">
    
</style>