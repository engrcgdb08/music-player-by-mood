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
    <el-divider>This is Wanted to Focus Music Room</el-divider>
     <NaviBar/>
</div>
  </div>
    </div>
    

</template>



<script>
// @ is an alias to /src
import NaviBar from '@/components/NaviBar.vue'

export default {
  name: 'FocusView',
  components: {
    NaviBar
  },

  data(){

    return {
          activeIndex: '',
          loading: false,
         isCollapse: true,

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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

  }
}
</script>

<style lang="scss">
.music-player{
  margin-top: 10px;
  width:100%;
  display: block;
  height: auto;
}
.button{
  background-color: #0091FA !important;
}
.button-nav{
   display: flex;

  justify-content: center;


}
</style>>
