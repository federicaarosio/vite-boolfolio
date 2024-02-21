<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Boolfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(link, index) in linkItems" :key="index">
                            <router-link :to="{ name: link.routerName }" class="nav-link">
                                {{ link.label }}
                            </router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link :to="{ name: 'projects'}" class="nav-link active">
                                Projects
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'types'}" class="nav-link active">
                                Types
                            </router-link>
                        </li> -->

                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            linkItems: [
                {
                    label: 'Home',
                    routerName: 'home'
                },
                {
                    label: 'Projects',
                    routerName: 'projects'
                },
                {
                    label: 'Types',
                    routerName: 'types'
                },

            ]
        }
    },
}
</script>
<style lang="">
    
</style>