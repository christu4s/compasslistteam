import { createWebHistory, createRouter } from "vue-router";
import CreateCustomer from "../components/CreateCustomer.vue";
import EditCustomer from "../components/EditCustomer.vue";
import ListCustomer from "../components/ListCustomer.vue";

const routes = [
  {
    path: "/",
    name: "createcustomer",
    component: CreateCustomer,
  },
  {
    path: "/editcustomer",
    name: "editcustomer",
    component: EditCustomer,
  },
  {
    path: "/listcustomer",  
    name: "listcustomer",
    component: ListCustomer,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;