<template>
  <div class="home">
   <el-card class="header-card" style="background:#0091FA; margin-bottom:.2%;">
     <div class="nav" mode="horizontal">
      <div class="header">
       <img src="../assets/aidchordlogo.png" @click="goToHome" :loading="loading" style="width:100px; height: auto; border-radius: 50%; background: white; margin: 1%;"> 
      </div>  
     </div> 
   </el-card>
    <el-card class="box-card">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1> GENRE</h1>

    <div class="buttons">

        <el-popover
    class="popover"
    placement="bottom"
    title="Classical Music"
    width="300"
    trigger="hover"
    align="center"
   
    el-fade-in-linear
    content="Classical music has been shown to be one of the most calming genres of music. It has been found to be helpful in managing stress due to its slow tempo and intricate harmonies. Studies have shown that listening to classical music can lead to decreased levels of cortisol, a hormone associated with stress.">
    <el-button slot="reference" type="primary" style="margin:1%; align:center;" plain @click="goToClassicalPage"><img style="width:15%; height: auto;" src="../assets/classic.png"><br/>Classical Music</el-button>
  </el-popover>

      <el-popover
    class="popover"
    placement="bottom"
    title="Meditation Music"
    width="300"
    trigger="hover"
    align="center"
   
    el-fade-in-linear
    content="Meditation can give you a sense of calm, peace and balance that can benefit both your emotional well-being and your overall health. You can also use it to relax and cope with stress by refocusing your attention on something calming. Meditation can help you learn to stay centered and keep inner peace.">
    <el-button slot="reference" type="primary" style="margin:1%; align:center;" plain @click="goToMeditatePage"><img style="width:15%; height: auto;" src="../assets/meditate.png"><br/>Meditate</el-button>
  </el-popover>


    </div>

    </el-card>
  </div>
</template>



<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  
  data(){

    return {
          activeIndex: '',
          loading: false,
          moodDialogVisible: false,
          mood: ' '
      
  

     }
  },

  methods: {


     goToHome() {
      this.loading = true
      this.$router.push('/')
     },
    
     goToMeditatePage () {
      this.loading = true
     this.$router.push('/meditate')
     },
     goToClassicalPage(){
       this.loading = true
     this.$router.push('/stress')
     }

  }
}
</script>

<style lang="scss">
.nav{
  padding: 10px;
 display: flex;
  background:#0091FA;
  // justify-content: center;
}
.button-text{
  
  display: flex;
  padding: 1.5em;
  justify-content: flex-end;
  flex: 2 1 auto;
   font-weight: bold;
}
.el-button:hover {
  color: #0091FA !important;
   font-weight: bold;
     -webkit-animation: popover 3s ease;
    animation: popover 3s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}
.el-button {
    font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
    text-transform: uppercase;
  font-weight: bold;
}

.header{
  display: flex;
}
span.text-span{

   font-family:  Helvetica, Arial, sans-serif;
  text-align: center;
  word-break: break-all;
}
.el-popover__title{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    color:#0091FA !important;
    font-weight: bold !important;
}
 .el-popover{
      font-family:  Helvetica, Arial, sans-serif;
    
 } 

.box-card {
    border-radius: 50%;
    width: 100%;
    height: auto;
  }

  
h1{

    color: #0091FA;

}

@-webkit-keyframes popover {
    15% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
    }
    30% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
    }
    50% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    65% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
    }
    80% {
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}
@keyframes popover {
    15% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
    }
    30% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
    }
    50% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    65% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
    }
    80% {
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

</style>>
