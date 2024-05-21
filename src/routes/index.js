import TaskFile1 from '@/components/TaskFile1.vue';
import TaskFile2 from '@/components/TaskFile2.vue';
import TaskFile3 from '@/components/TaskFile3.vue';

import {createRouter , createWebHistory} from 'vue-router'

const routes = [
       
         {
            path: '/',
        
            component: TaskFile1
           
        },
        {
            path: '/TaskFile2',
           
            component: TaskFile2
        },
        {
            path: '/TaskFile3',
           
            component: TaskFile3
        }
    ];

    const router = createRouter({
        history : createWebHistory(),
        routes
    });
    export default router;
