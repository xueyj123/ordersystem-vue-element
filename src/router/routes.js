
import Home from '../views/home'
import Order from '../views/home/views/order'
import OrderManage from '../views/home/views/orderManage'
import StaffManage from '../views/home/views/staffManage'

import Login from '../views/login'

// 创建路由配置信息
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/',
                name: 'order',
                component: Order
            },
            {
                path: 'orderManage',
                name: 'orderManage',
                component: OrderManage,
                meta: {
                    required: true
                }
            },
            {
                path: 'staffManage',
                name: 'staffManage',
                component: StaffManage,
                meta: {
                    required: true
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

export default routes