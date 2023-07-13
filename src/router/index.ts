import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TimeTable from "@/pages/TimeTable.vue";
import TimeTableLines from "@/pages/TimeTable/TimeTableLines.vue";
import TimeTableStops from "@/pages/TimeTable/TimeTableStops.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TimeTable,
    children: [
      { path: '/lines', component: TimeTableLines },
      { path: '/stops', component: TimeTableStops }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
