import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";

const baseRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "all",
        component: () => import("../views/Page404.vue")
    }
];

//const routes = baseRoutes;//.concat(peopleRoutes, projectRoutes, mediaRoutes, ruleRoutes, aboutRoutes);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: baseRoutes
});

export default router;
