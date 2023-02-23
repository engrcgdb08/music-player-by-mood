import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StressView from '../views/StressView.vue'
import CantSleepView from '../views/CantSleepView.vue'
import FocusView from '../views/FocusView.vue'
import MusicPlayer from '../components/MusicPlayer.vue'
import AnxiousStressSelector from '../views/AnxiousStressSelector.vue'
import NaviBar from '../components/NaviBar.vue'
import CantSleepViewAdmin from '../views/AdminSide/CantSleepViewAdmin.vue'
import MeditateView from '../views/MeditateView.vue'
import ChatRoomView from '../views/JoinRoomView.vue'
import StressChatRoom from '../components/StressChatRoom.vue'
import GlobalRoomServer from '../components/GlobalRoomServer.vue'



Vue.use(VueRouter)



const routes = [

  {
    path: '/music',
    name: 'MusicPlayer',
    component: MusicPlayer,
    meta: {
        title: "",
        content: {
            name: "referrer", content: "no-referrer"
        }
    }
},
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calming',
    name: 'calming',
    component: AnxiousStressSelector
  },
  {
    path: '/cantsleep',
    name: 'cantsleep',
    component: CantSleepView
  },
  {
    path: '/focus',
    name: 'focus',
    component: FocusView
  },
  {
    path: '/stress',
    name: 'stress',
    component: StressView
    
  },
  {
    path: '/nav',
    name: 'nav',
    component: NaviBar
    
  },

  {
    path: '/sleepadmin',
    name: 'sleepadmin',
    component: CantSleepViewAdmin
    
  },
  {
    path: '/meditate',
    name: 'meditate',
    component: MeditateView
    
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: ChatRoomView
    
  },
  {
    path: '/stressroom',
    name: 'stressroom',
    component: StressChatRoom
    
  },
  {
    path: '/globalroom',
    name: 'globalroom',
    component: GlobalRoomServer
    
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
