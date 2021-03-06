import {createRouter, createWebHistory} from 'vue-router'

import home from '../views/home'
import wifi from '../views/wifi'
import email from '../views/email'
import printer from '../views/printer'

import cns_mac from '../views/cns_mac'
import cns_mac_delete from '../views/cns_mac_delete'
import cns_pc from '../views/cns_pc'
import cns_pc_delete from '../views/cns_pc_delete'
import cns_ios from '../views/cns_ios'
import cns_android from '../views/cns_android'

import cns_email_mac from '../views/cns_email_mac'
import cns_email_pc from '../views/cns_email_pc'
import cns_email_ios from '../views/cns_email_ios'
import cns_email_android from '../views/cns_email_android'

import cns_printer_mac from '../views/cns_printer_mac'
import cns_printer_pc from '../views/cns_printer_pc'

import faq from '../views/faq'
import sitemap from '../views/sitemap'
import privacy_policy from '../views/privacy_policy'
import site_policy from '../views/site_policy'

const routes = [
    {
        path: '/',
        name:'home',
        component: home
    },
    {
        path: '/wifi',
        name:'wi-fi',
        component: wifi
    },
    {
        path: '/email',
        name:'email',
        component: email
    },
    {
        path: '/printer',
        name:'printer',
        component: printer
    },
    {
        path: '/wifi/cns-mac',
        name:'cns_mac',
        component: cns_mac
    },
    {
        path: '/wifi/cns-mac/del-certificate',
        name:'cns_mac_delete',
        component: cns_mac_delete
    },
    {
        path: '/wifi/cns-pc',
        name:'cns_pc',
        component: cns_pc
    },
    {
        path: '/wifi/cns-pc/del-certificate',
        name:'cns_pc_delete',
        component: cns_pc_delete
    },
    {
        path: '/wifi/cns-ios',
        name:'cns_ios',
        component: cns_ios
    },
    {
        path: '/wifi/cns-android',
        name:'cns_android',
        component: cns_android
    },
    {
        path: '/email/cns-email-mac',
        name:'cns_email_mac',
        component: cns_email_mac
    },
    {
        path: '/email/cns-email-pc',
        name:'cns_email_pc',
        component: cns_email_pc
    },
    {
        path: '/email/cns-email-ios',
        name:'cns_email_ios',
        component: cns_email_ios
    },
    {
        path: '/email/cns-email-android',
        name:'cns_email_android',
        component: cns_email_android
    },
    {
        path: '/printer/cns-printer-mac',
        name:'cns_printer_mac',
        component: cns_printer_mac
    },
    {
        path: '/printer/cns-printer-pc',
        name:'cns_printer_pc',
        component: cns_printer_pc
    },
    {
        path: '/faq',
        name: 'faq',
        component: faq
    },
    {
        path: '/sitemap',
        name:'sitemap',
        component: sitemap
    },
    {
        path: '/privacy-policy',
        name:'privacy_policy',
        component: privacy_policy
    },
    {
        path: '/site-policy',
        name:'site_policy',
        component: site_policy
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router