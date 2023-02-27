<template>
  <div class="login-app">
   <el-card class="header-card" style="background:#0091FA; margin-bottom:.2%;">
     <div class="nav" mode="horizontal">
       
      <div class="header">
       <img src="../assets/aidchordlogo.png" style="width:100px; height: auto; border-radius: 50%; background: white; margin: 1%;"> 
      </div>   

    </div>
   </el-card>
    <el-card class="box-card">

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>AIDCHORD MUSIC THERAPY APP</h1>

 
    <div class="buttons">

      <el-button type="primary" style="margin:1%; align:center;" plain @click="handleLoginDialog"> <img style="width:15%; height: auto;" src="../assets/login.png"><br/>LOGIN</el-button>
      <el-button type="primary" style="margin:1%; align:center;" plain @click="handleRegistrationDialog"><img style="width:15%; height: auto;" src="../assets/register.png"><br/>REGISTER</el-button>
  
    </div>

    </el-card>

<el-dialog
  title="Login"
  :visible.sync="loginDialogVisible"
  width="450px"
  class="dialog-class"
  :before-close="beforeCloseDialog"
  align="center">

 <el-form :model="form">
  
   <el-form-item label="Username">
      <el-input v-model="form.username" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="Password">
      <el-input v-model="form.password" autocomplete="off"></el-input>
    </el-form-item>
  
 <el-form-item>
    <el-button type="primary" @click="submitForm">Login</el-button>
    <span> No account? <el-button type="default" @click="handleRegistrationDialog">Register Here</el-button></span>
  </el-form-item>
 </el-form>
</el-dialog>


<el-dialog
  title="Registration"
  :visible.sync="registerDialogVisible"
  width="450px"
  class="dialog-class"
  :before-close="beforeCloseDialog"
  align="center">
  
 <el-form :model="form" ref="form">
      <el-form-item label="Fullname">
      <el-input v-model="form.fullName" autocomplete="off"></el-input>
    </el-form-item>
 
     <el-form-item label="Contact Number">
      <el-input v-model="form.contactNum" autocomplete="off"></el-input>
    </el-form-item>

      <el-form-item label="Email">
      <el-input v-model="form.email" autocomplete="off"></el-input>
    </el-form-item>
      
      <el-form-item label="Username">
      <el-input v-model="form.username" autocomplete="off"></el-input>
    </el-form-item>
    
    <el-form-item label="Password">
    <el-input v-model="form.password" autocomplete="off"></el-input>
    </el-form-item>
       <el-form-item label="Confirm Password">
      <el-input v-model="form.confirmPassword" autocomplete="off"></el-input>
    </el-form-item>
 

 <el-form-item>
    <el-button type="primary" @click="submitForm">Login</el-button>
    <el-button type="default">Cancel</el-button>
  </el-form-item>

 </el-form>
</el-dialog> 


  </div>
</template>



<script>
// @ is an alias to /src


export default {
  name: 'LoginView',
  components: {
   
  },

  data(){

    return {

          loading: false,
          loginDialogVisible: false,
          registerDialogVisible: false,
          form: {
          username: '',
          fullName: '',
          password: '',
          confirmPassword: '',
          email:'',

          },
          

     }
  },

  methods: {

      submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
             this.$router.push('/home')
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

  
     goToFocusPage () {
     this.$router.push('/focus')
     },
      goToRoomView () {
     this.$router.push('/chatroom')
     },

     joinRoomInstead() {
      this.$router.push ('/globalroom')
     },


    beforeCloseDialog(done){
   done()
    },

     handleLoginDialog(){
      this.loginDialogVisible = true
      this.reset()
      this.registerDialogVisible = false
      
     },

     
     handleRegistrationDialog(){
      this.registerDialogVisible = true
       this.reset()
      this.loginDialogVisible = false
     },

    reset() {
      this.form = {
          username: null,
          fullName: null,
          password: null,
          confirmPassword: null,
          email: null
      }
      this.$resetForm('form')
    }     
  }
}

</script>

<style>

.nav{
  padding: 10px;
  display: flex;
  background:#0091FA;
}
.button-text{
  
  display: flex;

  padding: 1.5em;
  justify-content: flex-end;
  flex: 2 1 auto;
   font-weight: bold;
}
.header{
  display: flex;
}
.box-card {
    border-radius: 50%;
    width: 100%;
    height: auto;
  }

  
h1{

    color: #0091FA;

}

</style>>
