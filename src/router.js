import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import TypesList from './pages/TypesList.vue';


// Assegno a una variabile costante il valore che mi restituirà createRouter
    // history: permette a Vue Router di integrarsi con la navigazione del browser
    // route: contiene array di oggetti. Ogni oggetto ha rotta e specifica l'URL richiesto, il nome della rotta ed il componente che sarà caricato.
    const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: HomePage
            },
            {
                path: '/projects',
                name: 'projects',
                component: ProjectsList
            },
            {
                path: '/types',
                name: 'types',
                component: TypesList
            },
        ]
    });

// Chiunque chiama questo file deve ricevere questa variabile
export { router }