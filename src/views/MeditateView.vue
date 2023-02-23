<template>

<div class="app-sleep">
  <div class="viewstress">
    <el-card class="header-card" style="background:#0091FA; margin-bottom:.2%;">
     <div class="nav" mode="horizontal">
      <div class="header">
       <img src="../assets/aidchordlogo.png" style="width:100px; height: auto; border-radius: 50%; background: white; margin: 1%;"> 
      </div>   
    </div>
   </el-card>
  <div class="tabs">
    <el-divider>This is Meditate Music Room</el-divider>
     <NaviBar/>
</div>
  </div>
    </div>
    

</template>



<script>
// @ is an alias to /src
import NaviBar from '@/components/NaviBar.vue'

export default {
  name: 'MeditateView',
  components: {
    NaviBar
  },

  data(){

    return {
          loading: false,
  
         form: {
          chatbox: ''
         }

     }
  },

  methods: {

     goToHome () {
    this.loading="true"
     this.$router.push('/home')
     },
  }
}
</script>

<style lang="scss">

.button{
  background-color: #0091FA !important;
}
.button-nav{
   display: flex;
  justify-content: center;
}
</style>>
