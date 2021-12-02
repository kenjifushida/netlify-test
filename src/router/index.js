import {createRouter, createWebHistory} from 'vue-router'
import cns_mac from '../views/cns_mac'
import cns_pc from '../views/cns_pc'
import cns_ios from '../views/cns_ios'
import cns_android from '../views/cns_android'

const routes = [
    {
        path: '/cns-mac',
        name:'cns_mac',
        component: cns_mac
    },
    {
        path: '/cns-pc',
        name:'cns_pc',
        component: cns_pc
    },
    {
        path: '/cns-ios',
        name:'cns_ios',
        component: cns_ios
    },
    {
        path: '/cns-android',
        name:'cns_android',
        component: cns_android
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router