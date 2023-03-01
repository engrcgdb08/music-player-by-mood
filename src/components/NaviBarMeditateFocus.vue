<template>
<div class="Tab">
 <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><el-button @click="roomDialogVisible = true" :disabled="hidden"> Create Room </el-button>&nbsp;&nbsp;<i class="el-icon-headset"></i>&nbsp; Songs</span>
    <div class="home">
  <MusicPlayerMeditateFocus/>
     
        <!-- <MusicPlayer/> -->
  </div> 
  </el-tab-pane>
  <el-tab-pane v-if="hidden">
    <span slot="label" > <i class="el-icon-chat-line-round"></i>&nbsp;Room</span>
     <div class="home">
      <el-button @click="handleMoodDialogVisible">End Room</el-button>
     <StressChatRoom/>
     </div>
     </el-tab-pane>


  <el-dialog
  title="Create Room"
  :visible.sync="roomDialogVisible"
  width="40%"
  class="dialog-class"
  :before-close="handleClose"
  align="center">
  Invitation Code : <span>{{invitationCode}}</span>
  <br/> <br/>
  <span style="align:center"> Use this invitation code to invite people to your room</span>
  <span slot="footer" class="dialog-footer">

    <el-button slot="reference">Copy Invitation</el-button>
        <el-button type="default" @click="roomDialogVisible = false" style="background:white; color:black;">Cancel</el-button>
    <el-button type="primary" slot="reference" @click="goToRoomView">Confirm</el-button>

  </span>
</el-dialog>

<el-dialog
  :close-on-click-modal="false"
  title="PROGRESS REPORT"
  :visible.sync="moodDialogVisible"
  width="400"
  :before-close="beforeCloseDialog"
  align="left"
  >
   <span class="text-span" style="text-align:center;">The Personal Information below is auto-generated from our database 
    saved after you registered, note that you are the one and the system will only know this information. 
    So, rest assured that your Data Privacy is protected.
    </span>
   
    <br/>
    <br/>
  <span class="text-span" style="color:#0091FA;"><h2>Personal Information</h2></span>

  
    <br/>
    Fullname : <span style="color:#0091FA;"> {{fullName}} </span>
       <br/> <br/>
    Contact Number: <span style="color:#0091FA;">{{contactNum}}</span>
       <br/> <br/>
    Email: <span  style="color:#0091FA;">{{email}} </span>
       <br/> <br/>
    Date: <span style="color:#0091FA;"> {{date}} </span>
       <br/> <br/>

    Mood Before: <span style="color:#0091FA;"> {{moodBefore}} </span>
<div class="emojis" align="center" >
    <el-radio-group v-model="moodNow">
<el-radio-button class="emoji-buttons" label="Same" value="1" key="Same" default><img src="../assets/emojis/meh.png" style="width:50px;height:50px; "/><br/>Same</el-radio-button>
<el-radio-button class="emoji-buttons"  label="Worse" value="2" key="Worse" default ><img src="../assets/emojis/irritable.png" style="width:50px;height:50px;"/><br/>Worse</el-radio-button>
<el-radio-button class="emoji-buttons"  label="Better" value="3" key="Better" default ><img src="../assets/emojis/slightlybetter.png" style="width:50px;height:50px;"/><br/>Better</el-radio-button>
<el-radio-button class="emoji-buttons"  label="Relieved" value="4" key="Relieved" default ><img src="../assets/emojis/relieved.png" style="width:50px;height:50px;"/><br/>Relieved</el-radio-button>
<el-radio-button  class="emoji-buttons" label="Happy" value="5" key="Happy" default ><img src="../assets/emojis/happy.png" style="width:50px;height:50px;"/><br/>Happy</el-radio-button>

 </el-radio-group>
</div>

  <br/><br/>
  Your Mood Now: <span style="color:#0091FA;">{{moodNow}}</span>

    <br/><br/>
    <el-alert
    title="Disclaimer: "
    type="warning"
    description="The result is intended for the improvement of coping mechanisms for stress and anxiety. 
    The report is not reliable for any possible health problems or medical conditions."
    show-icon>
  </el-alert>
  
  <span slot="footer" class="dialog-footer" style="flex 2 1 auto;">
    <el-button  @click="moodDialogVisible =false;beforeCloseDialog(() => {})">Cancel</el-button>
    <el-button @click="onSubmitProgress">Confirm</el-button>
  </span>
</el-dialog>



<el-dialog
  :close-on-click-modal="false"
  title="Oh no!"
  :visible.sync="disclaimerDialog"
  width="400"
  :before-close="beforeCloseDialog"
  align="left"
  >
   <span class="text-span" style="text-align:center;"> We see that your current mood is <span style="color:#0091FA;">{{moodNow}} </span>indication that 
    we failed to help you right now. Please rest assured that we are doing everything that we can 
    to help you ease what you feel. Please write some recommendations for us to do better. I hope on your
    next Music Therapy session we will be able to help you. Thank you so much! 
    </span>
    <br/> <br/>
   <span>Recommendation:</span>
     <br/> <br/>
   <el-input type="textarea"   :rows="2" v-model="recommendation"> </el-input>

  <span slot="footer" class="dialog-footer" style="flex 2 1 auto;">
    <el-button  @click="disclaimerDialog =false;beforeCloseDialog(() => {})">Cancel</el-button>
    <el-button @click="onSubmitProgress">Confirm</el-button>
  </span>
</el-dialog>



</el-tabs>

</div>
</template>

<script>
// import MusicPlayer from '@/components/MusicPlayer.vue'
import MusicPlayerMeditateFocus from '@/components/MusicPlayerMeditateFocus.vue'
import StressChatRoom from '@/components/StressChatRoom.vue'
  export default {
    components: {
//  MusicPlayer,
 MusicPlayerMeditateFocus,
 StressChatRoom,

    },
    data() {
      return {
        fullName: '',
        contactNum: '',
        date: '',
        email: '',
        disclaimerDialog: false,
        loading: false,
        hidden: false,
        roomDialogVisible: false,
        invitationCode: '12312321321231',
        moodDialogVisible: false,
        moodNow: ' ',
        moodBefore: this.moodBefore,
        recommendation:''

      }
    },

    methods: {

     goToAnxiousStressPage () {
     this.$router.push('/calming')
     },
       goToCantSleepPage () {
     this.$router.push('/cantsleep')
     },
     goToFocusPage () {
     this.$router.push('/focus')
     },

     goToRoomView(){
      this.roomDialogVisible = false
      this.hidden = !this.hidden   
     }, 
     onSubmit(){
       this.$router.go(this.$router.currentRoute)
       this.MusicPlayer = false

         this.$message({
          message: 'Music Room has been ended',
          type: 'success'
        });
     },

     handleMoodDialogVisible(){
       this.moodDialogVisible = true
     },

     handleClose(){
      this.roomDialogVisible = false
     },
     onSubmitProgress(){
          this.loading = true
          if (this.moodNow === 'Better' || this.moodNow === 'Relieved' || this.moodNow === 'Happy')
          {
             this.onSubmit()
          } else {
            this.disclaimerDialog = true
          }
            
          
        

     },
    beforeCloseDialog(done){
   done()
    },
     }

  }



</script>

<style>
.home{
  width: 100;
  height: auto;
}
.Tab{
  height: 300px;
}

.el-button:disabled{
  color: gray;
}
</style>>
