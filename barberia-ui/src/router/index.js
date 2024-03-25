import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import SearchBarber from '../pages/SearchBarber.vue'
import Favorites from '../pages/Favorites.vue'
import BarberShopInfo from '../pages/BarberShopInfo.vue'
import Bookings from '../pages/Bookings.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/favorites', component: Favorites, name: 'favorites' },
    { path: '/search', component: SearchBarber, name: 'search' },
    { path: '/bookings', component: Bookings, name: 'bookings' },
    { path: '/barbers/:id', component: BarberShopInfo, name: 'barbers' },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})