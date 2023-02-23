<template>
  <div class="home">
   <el-card class="header-card" style="background:#0091FA; margin-bottom:.2%;">
     <div class="nav" mode="horizontal">
       
      <div class="header">
       <img src="../assets/aidchordlogo.png" style="width:100px; height: auto; border-radius: 50%; background: white; margin: 1%;"> 
      </div>   
      <div class="button-text" >
    <el-button  style="color:white;">Login</el-button>
     <el-button style="color:white;">Sign Up</el-button>
      </div>
    </div>
   </el-card>
    <el-card class="box-card">

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1> HOW DO YOU FEEL TODAY?</h1>

 
    <div class="buttons">

      <el-button type="primary" style="margin:1%; align:center;" plain @click="handleStressOrAnxietyPage"> <img style="width:15%; height: auto;" src="../assets/stress.png"><br/>Getting stress or anxiety</el-button>
      <el-button type="primary" style="margin:1%; align:center;" plain @click="handleSleepPage"><img style="width:15%; height: auto;" src="../assets/sleep.png"><br/>Can’t Sleep</el-button>
      <el-button type="primary" style="margin:1%; align:center;" plain @click="handleFocusPage"><img style="width:15%; height: auto;" src="../assets/focus.png"><br/>Want to focus</el-button>
      <el-button type="primary" style="margin:1%; align:center;" plain><img style="width:15%; height: auto;" src="../assets/learnmusic.png"><br/>Learn a song</el-button>
      <el-button type="primary" style="margin:1%; align:center;" plain @click="handleRoomDialogVisible"><img style="width:15%; height: auto;" src="../assets/join.png"><br/>Join a room</el-button>

    </div>

    </el-card>


    
<el-dialog
  :close-on-click-modal="false"
  :title="title"
  :visible.sync="moodDialogVisible"
  width="400"
  alignt="center"
  :before-close="beforeCloseDialog"
  >
  <span class="text-span" style="text-align:center;">Before listening to music how is your mood today? 
choose one of the emoticons that suite your mood</span>
<div class="emojis" align="center" >
    <el-radio-group v-model="moodBefore">
<el-radio-button class="emoji-buttons" label="Sob" value="1" key="Sob" default><img src="../assets/emojis/sobemoji.png" style="width:50px;height:50px; "/><br/>Sob</el-radio-button>
<el-radio-button class="emoji-buttons"  label="Weary" value="2" key="Weary" default ><img src="../assets/emojis/sicktired.png" style="width:50px;height:50px;"/><br/>Weary</el-radio-button>
<el-radio-button class="emoji-buttons"  label="Sad" value="3" key="Sad" default ><img src="../assets/emojis/sad.png" style="width:50px;height:50px;"/><br/>Sad</el-radio-button>
<el-radio-button class="emoji-buttons"  label="Meh" value="4" key="Meh" default ><img src="../assets/emojis/meh.png" style="width:50px;height:50px;"/><br/>Meh</el-radio-button>
<el-radio-button  class="emoji-buttons" label="Nervous" value="5" key="Nervous" default ><img src="../assets/emojis/nervous.png" style="width:50px;height:50px;"/><br/>Nervous</el-radio-button>
<el-radio-button class="emoji-buttons"  label="Anxious" value="6" key="Anxious"  default ><img src="../assets/emojis/anxious.png" style="width:50px;height:50px;"/><br/>Anxious</el-radio-button>
<el-radio-button class="emoji-buttons" label="Angry" value="7"  key="Angry" default><img src="../assets/emojis/angry.png" style="width:50px;height:50px;"/><br/>Angry</el-radio-button>
 </el-radio-group>
</div>
  <span class="text-span" style="text-align:center;" >It is recommended to stay at the Music Room at least 15 mins to get the best result</span>
  <br/><br/>
  Your mood: <span style="color:#0091FA;">{{moodBefore}}</span>
  <br/><br/>
  Music Genre Recommendation: <span v-if="this.moodBefore === 'Sob' || this.moodBefore === 'Weary' || this.moodBefore === 'Sad' || this.moodBefore === 'Meh'" style="color:#0091FA;">Jazz , Classical , Instrumental Music</span>
  <span v-else-if="this.moodBefore === 'Nervous' || this.moodBefore === 'Anxious' || this.moodBefore === 'Angry'" style="color:#0091FA;">Meditation Music</span>
  <span slot="footer" class="dialog-footer" style="flex 2 1 auto;">
    <el-button  @click="handleRoomDialogVisible">Join Room Instead &nbsp;<i class="el-icon-chat-line-round"></i></el-button>
     &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
    <el-button  @click="moodDialogVisible =false;beforeCloseDialog(() => {})">Cancel</el-button>
    <el-button @click="onSubmit">Confirm</el-button>
  </span>
</el-dialog>

<!-- 
Join Room Dialog -->

<el-dialog
  title="Join room via Invitation Code"
  :visible.sync="roomDialogVisible"
  width="40%"
  class="dialog-class"
  :before-close="handleClose"
  center>
  <el-form-item prop="invitationCode" label="Invitation Code:"> </el-form-item>
  <el-input v-model="invitationCode"></el-input>
  <span slot="footer" class="dialog-footer">

  <el-popconfirm
  placement="top"
  width="400"
  confirm-button-text='OK'
  @confirm="joinRoomInstead"
  cancel-button-text='Cancel'
  hide-icon
  center
  title="
  Joining Global Room directly does not require you to track your 
  mood but will give you more options to really choose what you feel.
  System will not be able to help you regarding your emotions but gives you space to be free.
  You are not alone. JOIN AT YOUR OWN RISK!!!"
>
    <el-button slot="reference">Global Room</el-button>
    </el-popconfirm>

     <el-popconfirm
  placement="top"
  width="400"
  confirm-button-text='OK'
  @confirm="goToRoomView"
  cancel-button-text='Cancel'
  hide-icon
  center
  title="Joining room via invitation doesn't give you control to the room, you can interact with room's owner, 
  listen to their choice of music depends on their mood. But NOTE, that room owner have 
  full control with the room's music, and people inside it, similar to Administrator. 
  Your actions might help or worsen the emotions of the Room's Owner. 
  You must be careful with your behavior"
>
    <el-button type="primary" slot="reference" >Join via Code</el-button>

        </el-popconfirm>
  </span>
</el-dialog>



  </div>
</template>



<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
   
  },

  data(){

    return {
          activeIndex: '',
          loading: false,
          roomDialogVisible: false,
          moodDialogVisible: false,
          Sob: '',
          Weary: '',
          Sad: '',
          Meh: '',
          Nervous: '',
          Anxious: '',
          Angry: '',
          moodBefore: '',
          
          invitationCode: '',
          globalRoomRiskDialogVisible: false  

     }
  },

  methods: {

  
     goToFocusPage () {
     this.$router.push('/focus')
     },
      goToRoomView () {
     this.$router.push('/chatroom')
     },

     joinRoomInstead() {
      this.$router.push ('/globalroom')
     },

     onSubmit() {
        try {
          this.loading = true
          if(this.title === 'GETTING STRESS OR AXIETY PAGE' || this.title === 'CAN`T SLEEP' || this.title === 'WANT TO FOCUS' ){
          this.goToAnxiousStressPage(this.$router.push('/calming'))
          // } else if (this.title === 'CAN`T SLEEP') {
          //  this.goToCantSleepPage(this.$router.push('/cantsleep')) 
          // } else if (this.title === 'WANT TO FOCUS') {
          //     this.goToFocusPage(this.$router.push('/focus')) 
          // }
          }
          this.moodDialogVisible = false
          }
          catch(e){
            console.log('error')
          }finally {
            this.loading = false
          }
          
    },
    goToRoomSubmit(){
      
    },
    beforeCloseDialog(done){
   done()
    },
     goToMeditatePage () {
      this.loading = true
     this.$router.push('/meditate')
     },

     handleStressOrAnxietyPage(){
      this.reset()
      this.title ='GETTING STRESS OR AXIETY PAGE'
      this.moodDialogVisible = true
      },
     
     handleSleepPage(){
      this.reset()
      this.title = 'CAN`T SLEEP'
      this.moodDialogVisible = true
      },

      handleFocusPage(){
      this.reset()
      this.title ='WANT TO FOCUS'
      this.moodDialogVisible = true
      },

      reset() {
      this.moodBefore = ''  
      this.id = ''
      },
   
     handleRoomDialogVisible(){
      this.roomDialogVisible=true
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
  background-color: #f6fbff !important;
  color: #0091FA !important;
   font-weight: bold;
}
.el-button {
    font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
   background-color: #0091FA !important;
    color: white !important;
    text-transform: uppercase;
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
.emoji-buttons:hover{
   box-shadow: 2px 0.2px 10px rgb(255, 219, 57);
   -webkit-animation: popover 3s ease;
    animation: popover 3s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
      
}

.el-radio-button__orig-radio:checked+.el-radio-button__inner {
       color: #0091FA !important;
    background-color: #40a0ff00 !important;
    border-color: #40a0ff00 !important;
    box-shadow: -1px 0 0 0 #40a0ff00 !important;
    padding: 0;
       padding: 0;
}

.el-radio-button__inner {
    background: #40a0ff00 !important;
    border: 1px solid #40a0ff00 !important;
    color: #60626600;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    text-transform: capitalize;
    outline: 0;
    margin: 0;
    cursor: pointer;
    padding: 2px 5px;
    border-radius: 0;
}
.emoji-buttons{

 font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
    text-transform: uppercase;
    color: #0091FA !important;
  font-weight: bold;
  font-size: 10px;
background-color: transparent !important;
  margin-left: 15px;
  justify-content: space-between;
  display: inline-block;
  padding: 0%;
  border: none;
}
.emojis{
  margin: 25px,
}

</style>>
