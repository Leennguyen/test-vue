// import VueRouter from 'vue-router'
// import ShowEmployee from "@/components/ShowEmployee";
// import FormCreate from "@/components/FormCreate";
//
//
//
// export const router = new VueRouter({
//     routes: [
//         {path: '/ShowEmployee', component: ShowEmployee},
//         {path: '/FormCreate', component: FormCreate}
//     ]
// })

import { createRouter, createWebHistory } from 'vue-router'
import ShowEmployee from "@/components/ShowEmployee";
import FormCreate from "@/components/FormCreate";


const routes = [
    {
        path: '/ShowEmployee',
        name: 'employees',
        component: ShowEmployee
    },
    {
        path: '/FormCreate/:employeeId',
        name: 'employee',
        component: FormCreate,
        props: true,
    },
    // {
    //     path: '/:catchAll(.*)',
    //     component: Error
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
