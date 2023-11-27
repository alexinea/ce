import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";

const baseRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue")
    },
    {
        path: "/project-join-ncc",
        name: "project-join-ncc",
        component: () => import("../views/ProjectJoinsNCC.vue")
    },
    {
        path: "/contribute-to-project",
        name: "contribute-to-project",
        component: () => import("../views/Contribute2Project.vue")
    },
    {
        path: "/attend-ncc",
        name: "attend-ncc",
        component: () => import("../views/AttendTheNCC.vue")
    },
    {
        "path": "/make-ncc-better",
        "name": "make-ncc-better",
        component: () => import("../views/HelpTheNCCBetter.vue")
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
