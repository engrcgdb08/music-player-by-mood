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
import Login from '../components/Login.vue'
import StressChatRoom from '../components/StressChatRoom.vue'
import GlobalRoomServer from '../components/GlobalRoomServer.vue'
import MusicPlayerTwo from '../components/MusicPlayerTwo.vue'
import SleepSelector from '../views/SleepSelector.vue'
import MeditateViewSleep from '../views/MeditateViewSleep.vue'
import ClassicalSleepView from '../views/ClassicalSleepView.vue'
import AmbientView from '../views/AmbientView.vue'
import FocusSelector from '../views/FocusSelector.vue'
import MeditateViewFocus from '../views/MeditateViewFocus.vue'



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
    path: '/home',
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
  {
    path: '/musicplayertwo',
    name: 'musicplayertwo',
    component: MusicPlayerTwo
    
  },
  {
    path: '/sleepselector',
    name: 'sleepselector',
    component: SleepSelector
    
  },
  {
    path: '/meditatesleep',
    name: 'meditatesleep',
    component: MeditateViewSleep
    
  },
  {
    path: '/classicalsleep',
    name: 'classicalsleep',
    component: ClassicalSleepView
    
  },
  {
    path: '/ambient',
    name: 'ambient',
    component: AmbientView
    
  },
  {
    path: '/focusselector',
    name: 'focusselector',
    component: FocusSelector
    
  },
  {
    path: '/meditatefocus',
    name: 'meditatefocus',
    component: MeditateViewFocus
    
  },

  {
    path: '/',
    name: 'login',
    component: Login
    
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
