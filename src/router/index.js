import {createRouter, createWebHistory} from 'vue-router'
import cns_mac from '../views/cns_mac'

const routes = [
    {
        path: '/cns-mac',
        name:'cns_mac',
        component: cns_mac
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router