<template>

<div id="box">
	<div class="audioPlayer">
		<a class="nav-icon" @click="isPlaylistActive=!isPlaylistActive" :class="{'isActive': isPlaylistActive}" title="Music List">
				<span></span>
				<span></span>
				<span></span>
		</a>
		<div class="audioPlayerList" :class="{'isActive': isPlaylistActive}">
			<div class="item" v-for="(item,index) in musicPlaylist" :class="{ 'isActive':isCurrentSong(index) }" @click="changeSong(index),isPlaylistActive=!isPlaylistActive" :key="index">
				<p class="title">{{ item.title }}</p>
				<p class="artist">{{ item.artist }}</p>
			</div>
		</div>
		<div class="audioPlayerUI" :class="{'isDisabled': isPlaylistActive}">
			<div class="albumImage">
				<transition name="fade" mode="out-in" type='transition' appear>
					<div :class="['disc-back', currentlyPlaying ? '' : 'paused']" :key="currentSong">
						<img src="../assets/img/disc.png" ondragstart="return false;" class="disc">
						<img v-if="posterLoad" :src="musicPlaylist[currentSong].image" ondragstart="return false;" class="poster">
					</div>
				</transition>
				<!-- <div class="loader" :key="currentSong">Loading...</div> -->
			</div>
			<div class="albumDetails">
				<transition name="slide-fade" mode="out-in" appear>
					<p class="title" :key="currentSong">{{ musicPlaylist[currentSong].title }}</p>
				</transition>
				<transition name="slide-fade" mode="out-in" appear>
					<p class="artist" :key="currentSong">{{ musicPlaylist[currentSong].artist }}</p>
				</transition>
				<transition name="slide-fade" mode="out-in" type='transition' appear>
					<div class="page-container" :key="currentSong">
						<div :class="['wave-container', currentlyPlaying ? '' : 'paused']">
							<div v-for="index in 20" :key="index" class="wave-bar"></div>
						</div>
						<div class="lyric-container-wrapper">
							<div :class="['lyric-container', currentlyPlaying ? '' : 'paused']" :style="{ transform: 'translateY(' + lyricHeight[Math.max(lyricIndex, 0)] + 'px)'}">
								<div v-for="(item, index) in lyric" :key="index" :class="['lyric-item', {'isActive': (index==lyricIndex)}]">{{item.text}}</div>
							</div>
						</div>
					</div>
				</transition>
			</div>

			<div class="playerButtons">
				<el-button class="button" icon="el-icon-caret-left" @click="prevSong()" title="Previous Song"></el-button>
				<transition name="fade" mode="out-in" appear>
					<el-button :icon="currentlyPlaying ? 'el-icon-video-pause' : 'el-icon-video-play'" class="button play" @click="playPauseAudio()" title="Play/Pause Song" :key="currentSong + currentlyPlaying  || 1">
	
					</el-button>
				</transition>
				<el-button class="button" icon="el-icon-caret-right"  @click="nextSong()" title="Next Song"></el-button>
				<transition name="mode-slide-fade" mode="out-in">
					<el-button class="button" :icon="Mode[modeIndex].icon" id="mode" @click="nextMode()" :title="Mode[modeIndex].title" :key="modeIndex"></el-button>
				</transition>
			</div>

			<div class="timeAndProgress">
				<div class="currentTimeContainer">
					<span class="currentTime">{{ currentTimeShow }}</span>
					<span class="totalTime"> {{ trackDurationShow }}</span>
				</div>

				<div class="currentProgressBar" ref="progress" @click="clickProgress">
					<div class="currentProgress" :style="{ width: currentProgressBar + '%' }"></div>
				</div>
			</div>
		</div>
		
		<el-button type="primary" style="margin:1%; align:center;" @click="goToHome" plain>Home</el-button>
	</div>
 
</div>
</template>

<script>

export default {
	name: "MusicPlayer",
	data() {
		return {
				audio: "",
				loading: false,
				lyric: [],
				lyricIndex: -1,
				lyricHeight: [],
				lyricHeightUpdateTime: 3,
				posterLoad: false,
				currentlyPlaying: false,
				isPlaylistActive: false,
				modeIndex: 0,
				currentSong: 0,
				currentTime: 0,
				trackDuration: 0,
				currentProgressBar: 0,
				checkingCurrentPositionInTrack: "",
				// itemRefs: [],
				musicPlaylist: [
					{
						id: "2006550946",
						title: "Classical Music",
						artist: "Classical Music"
					},
				
				],
				Mode: [
					{
						title: "Order Play",
						icon: "el-icon-finished"
					},
					{
						title: "Shuffle Play",
						icon: "el-icon-refresh"
					},
					{
						title: "Repeat One",
						icon: "el-icon-refresh-left"
					},
				],
		};
	},
	methods: {

	goToHome () {
    this.loading="true"
     this.$router.push('/')
 this.stopAudio();
     },
		timeFormat: function(s) {
			return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
		},
		timeMillisecond: function(s) {
			const splitTime = s.split(":").map((item) => Number(item));
			return splitTime[0] * 60 + splitTime[1];
		},
		// formatLyric: function(url) {
		// 	var that = this;
		// 	this.jsonp(url).then(response => {
		// 		if(response.nolyric) that.lyric = [];
		// 		else if(response.lyric){
		// 			var lyric = response.lyric;
		// 			lyric = lyric.split("\n");
		// 			lyric = lyric.map((item) => {
		// 				var splitLyric = item.split("]");
		// 				var result = {
		// 					time: this.timeMillisecond(splitLyric[0].slice(1)),
		// 					text: splitLyric[1]
		// 				}
		// 				return result;
		// 			});
		// 			if(lyric[0].text == "") lyric = lyric.slice(1);
		// 			that.lyric = lyric;
		// 			that.lyricIndex = -1;
		// 			that.lyricHeightUpdateTime = 3;
		// 			// that.$nextTick(function() {
		// 			// 	console.log(that.lyric)
		// 			// });
		// 		}
		// 	});
		// 	// return this.axios.get(url).then(response => response.data);
		// },
		// 大于i的最小index
		binarySearch: function(L, R) {
			while(L < R){
				var mid = Math.floor((L + R) / 2);
				if(Number(this.lyric[mid].time) <= Number(this.audio.currentTime)) {
					L = mid + 1;
				} else {
					R = mid;
				}
			}
			if(Number(this.lyric[L].time) <= Number(this.audio.currentTime)) return L;
			return L - 1;
		},
		nextMode: function() {
			this.modeIndex = (this.modeIndex + 1) % this.Mode.length;
		},
		nextIndex: function() {
			switch (this.modeIndex) {
				case 0:
					this.currentSong = (this.currentSong + 1) % this.musicPlaylist.length;
					break;
				case 1:
					this.currentSong = Math.floor(Math.random() * this.musicPlaylist.length);
					break;
			}
			return this.currentSong;
		},
		prevIndex: function() {
			switch (this.modeIndex) {
				case 0:
					this.currentSong = (this.currentSong - 1 + this.musicPlaylist.length) % this.musicPlaylist.length;
					break;
				case 1:
					this.currentSong = Math.floor(Math.random() * this.musicPlaylist.length);
					break;
			}
			return this.currentSong;
		},
		nextSong: function() {
			this.changeSong(this.nextIndex());
		},
		prevSong: function() {
			this.changeSong(this.prevIndex());
		},
		changeSong: function(index, pausePrev = true) {
			var wasPlaying = this.currentlyPlaying;
			if (pausePrev == true) {
				this.stopAudio();
			}
			this.currentSong = index;

			var audioFile = "http://music.163.com/song/media/outer/url?id=" + 
								this.musicPlaylist[this.currentSong].id + ".mp3";
			this.audio = new Audio(audioFile);

			// var lyricFile = "http://music.163.com/api/song/media?id=" + this.musicPlaylist[this.currentSong].id;
			// this.formatLyric(lyricFile);

			this.posterLoad = false;
			if(this.musicPlaylist[this.currentSong].image !== undefined) this.posterLoad = true;

			var that = this;
			this.audio.addEventListener("loadedmetadata", function() {
				that.trackDuration = Math.round(this.duration);
			});
			this.audio.addEventListener("ended", this.handleEnded);
			if (wasPlaying) {
				this.playPauseAudio();
			}
		},
		isCurrentSong: function(index) {
			if (this.currentSong == index) {
				return true;
			}
			return false;
		},
		playPauseAudio: function() {
			if (!this.currentlyPlaying) {
				this.playAudio();
			} else {
				this.stopAudio();
			}
		},
		playAudio: function() {
			this.getCurrentTimeEverySecond();
			this.currentlyPlaying = true;
			this.audio.play();
		},
		stopAudio: function() {
			this.audio.pause();
			this.currentlyPlaying = false;
			clearTimeout(this.checkingCurrentPositionInTrack);
		},
		handleEnded: function() {
			this.changeSong(this.nextIndex());
		},
		getCurrentTimeEverySecond: function() {
			var that = this;
			this.checkingCurrentPositionInTrack = setTimeout(
				function() {
					that.currentTime = that.audio.currentTime;
					that.currentProgressBar =
						that.audio.currentTime / that.trackDuration * 100;
					that.getCurrentTimeEverySecond();
				}.bind(this),
				1000
			);
		},
		clickProgress: function(event){
			if(this.currentlyPlaying == true){
				this.stopAudio();
			}
			this.updateBar(event.pageX);
		},
		updateBar: function(x){
			var progress = this.$refs.progress;
			var maxduration = this.audio.duration;
			var position = x - progress.getBoundingClientRect().left;
			var percentage = (100 * position) / progress.offsetWidth;
			if (percentage > 100) {
				percentage = 100;
			}
			if (percentage < 0) {
				percentage = 0;
			}
			this.audio.currentTime = (maxduration * percentage) / 100;
			this.currentTime = this.audio.currentTime;
			this.currentProgressBar = this.currentTime / this.trackDuration * 100;
			this.lyricIndex = this.binarySearch(0, this.lyric.length - 1);
			this.playPauseAudio();
		},
		// setItemRef(element) {
		// 	this.itemRefs.push(element);
		// },
		updateHeight: function() {
			var lyricElement = document.querySelectorAll(".lyric-item");
			var lyricWrapper = document.querySelector(".lyric-container-wrapper");
			this.lyricHeight = [];
			for(var i = 0; i < this.lyric.length; i++){
				if(i == 0){
					this.lyricHeight.push(lyricWrapper.getBoundingClientRect().height*0.42);
					continue;
				}
				this.lyricHeight.push(this.lyricHeight[i-1] -
				lyricElement[i-1].getBoundingClientRect().height);
			}
			console.log(this.lyricHeight[this.lyricHeight.length-1])
		},
	},
	mounted() {
		this.changeSong(this.currentSong, false);
		this.audio.loop = false;
	},
	beforeUpdate() {
// this.itemRefs = [];
},
	updated() {
		if(this.lyricHeightUpdateTime){
			this.$nextTick(function(){
				this.updateHeight();
			})
			this.lyricHeightUpdateTime --;
		}
},
	watch: {
		currentTime: function() {
			if(this.lyricIndex + 1 <= this.lyric.length - 1 && 
			this.currentTime >= this.lyric[this.lyricIndex + 1].time){
				this.lyricIndex++;
				console.log(this.lyricIndex);
			}
			this.currentTime = Math.round(this.currentTime);
		},
		// lyric: function() {
		// 	this.$nextTick(function(){
		// 		this.updateHeight();
		// 	})
		// },
	},
	computed: {
		currentTimeShow() {
			return this.timeFormat(this.currentTime);
		},
		trackDurationShow() {
			return this.timeFormat(this.trackDuration);
		},
	},
	beforeUnmount: function() {
		this.audio.removeEventListener("ended", this.handleEnded);
		this.audio.removeEventListener("loadedmetadata", this.handleEnded);

		clearTimeout(this.checkingCurrentPositionInTrack);
	}
};
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Montserrat&family=Raleway&display=swap');
@font-face
	font-family Bender
	src url(../assets/fonts/Bender.woff)
@font-face
	font-family Geometos
	src url(../assets/fonts/Geometos.woff)
* 
	box-sizing border-box
.animated 
	animation-duration 0.5s
.github-corner-out
	display none
.github-corner-in
	display inline-block
#box
	margin-top auto
	width 100%
	height 50rem
	.audioPlayer
		background-color #FFF
		position absolute
		width 100%
		height auto
		overflow hidden
		padding 1.5rem
		margin auto 0
		border 1px solid #eaeaea
		border-radius 0.5rem
		transition all ease .3s 
		user-select none
		left 50%
		top 40%
		transform translate(-50%,-50%)
		&:hover
			border 1px solid transparent 
			transform translate(-50%, -51%)
			box-shadow 0 2px 16px 0 rgba(27, 35, 47, .2)
		.nav-icon 
			width 15px
			height 12px
			position absolute
			top 1.125rem
			left 1.5rem
			transform rotate(0deg)
			transition 0.25s ease-in-out
			cursor pointer
			span 
				display block
				position absolute
				height 1.8px
				width 100%
				background rgba(0, 0, 0, 0.75)
				border-radius 6px
				opacity 1
				left 0
				transform rotate(0deg)
				transition 0.5s ease-in-out
				&:nth-child(1) 
					top 0px
				&:nth-child(2) 
					top 5px
				&:nth-child(3) 
					top 10px
			&.isActive 
				span 
					&:nth-child(1) 
						top 5px
						transform rotate(135deg)
					&:nth-child(2) 
						opacity 0
						left -60px
					&:nth-child(3) 
						top 5px
						transform rotate(-135deg)
		.audioPlayerList 
			color rgba(0, 0, 0, 0.75)
		
			height auto
			transition 0.5s
			transform translateX(-200%)
			position absolute
			margin-top 1.5rem
			overflow scroll
			z-index 10
			will-change transform
			&.isActive 
				transform translateX(0)
			.item 
				margin-bottom 1.5rem
				border-left 0.1rem solid transparent
				transition 0.2s
				&:hover 
					padding-left 0.5rem
					cursor pointer
				.title 
					color rgba(0, 0, 0, 1)
					font-family 'Montserrat'
					font-size 1.2rem
					margin 0.2rem 0
				.artist 
					color rgba(0, 0, 0, 0.5)
					font-family 'Montserrat'
					font-size 0.8rem
					margin 0.2rem 0
				&.isActive 
					border-left-color black
					padding-left 1rem
		.audioPlayerUI 
			margin-top 1.5rem
			overflow hidden
			will-change transform
			transition 0.5s
			&.isDisabled 
				transform scale(0.75) translateX(50%)
			.albumDetails 
				text-align center
				margin 2rem 0 1.5rem 0
				p
					line-height 1.7 
					margin 0px
					&.title
						font-family Geometos 
						font-size 1.2rem
						color rgba(0, 0, 0, 1)
						margin 0.2rem 0
					&.artist 
						margin 0.2rem 0
						font-family 'Montserrat'
						font-size 0.8rem
						font-weight none
						color rgba(0, 0, 0, 0.75)
						transition-delay 100ms
				.page-container
					// display none
					display inline-block
					margin 0.2rem 0
					position relative
					background-color #FFF
					.lyric-container-wrapper
						margin 1rem 0
						height 5px
						overflow hidden
						mask linear-gradient(180deg,transparent,#fff 10%,#fff 90%,transparent) top
						.lyric-container
							font-family 'Montserrat'
							transition ease 0.3s
							height 800vh
							display inline-block
							position relative
							overflow scroll
							.isActive
								color #FF0000
					.wave-container
						position relative
						.wave-bar
							display inline-block
							width 10px
							height 50px
							margin auto 0.07rem
							background-color #0091FA !important;
							animation beat1 1s infinite
							transform-origin 0 100%
							transform scaleY(0.1)
							&:nth-child(2n) 
								animation-name beat2
								animation-delay 0.2s
								background-color #FF0000
							&:nth-child(3n) 
								animation-name beat3
								animation-delay 0.5s
								animation-duration 0.5s
								background-color #BBB
							&:nth-child(4n) 
								animation-name beat2
								animation-delay 0.4s
								animation-duration 0.8s
							&:nth-child(5n) 
								animation-delay 0.6s
							&:nth-child(6n) 
								animation-delay 0.2s
								background-color #DDD
						&.paused
							.wave-bar
								animation-play-state paused
			.albumImage 
				width 17rem
				height 17rem
				overflow hidden
				margin 0 auto
				.disc-back
					animation rotate 20s linear infinite
					width 17rem
					height 17rem
					border-radius 50%
					background rgba(0, 0, 0, 0.2)
					display flex
					justify-content center
					align-items center
					.disc
						width 90%
						height 90%
						z-index 10
						object-fit cover
						object-position 50% 50%
						border-radius 50%
						margin 0 auto
					.poster
						position absolute
						width 50%
						height 50%
						z-index 15
						object-fit cover
						object-position 50% 50%
						border-radius 50%
						margin 0 auto
					&.paused
						animation-play-state paused
			.playerButtons 
				position relative
				margin 0 auto
				text-align center
				.button
					display inline-block
					position relative
					vertical-align middle
					padding 0.5rem
					margin 0 0.25rem
					color rgba(0, 0, 0, 0.75)
					border-radius 50%
					outline 0
					text-decoration none
					cursor pointer
					transition 0.5s
					&#mode
						transition 0.3s ease-in-out
					&.play
						margin 0 auto
					&:active 
						opacity 0.75
						transform scale(0.75)
					&.isDisabled 
						color rgba(0, 0, 0, 0.2)
						cursor initial
						&:active 
							transform none
					.icon
						display flex
			.currentTimeContainer
				width 100%
				height 1rem
				display flex
				justify-content space-between
			.currentProgressBar 
				width 100%
				background-color rgba(0, 0, 0, 0.1)
				margin 0.75rem 0
				.currentProgress 
					background-color rgba(0, 0, 0, 0.75)
					width 0px
					height 2px
					transition 100ms
.audioPlayer .audioPlayerUI .currentTimeContainer .currentTime, .audioPlayer .audioPlayerUI .currentTimeContainer .totalTime 
	font-size 0.8rem
	font-family Bender !important
	color rgba(0, 0, 0, 0.75)

.slide-fade-enter-active 
	transition all 0.3s ease
.slide-fade-leave-active 
	transition all 0.2s cubic-bezier(1, 0.5, 0.8, 1)
.slide-fade-enter-from, .slide-fade-leave-to 
	transform translateY(10px)
	opacity 0
.fade-enter-active, .fade-leave-active 
	transition opacity 0.5s
.fade-enter-from, .fade-leave-to 
	opacity 0

.mode-slide-fade-enter-active, .mode-slide-fade-leave-active
	transition all 0.3s ease
.mode-slide-fade-enter-from, .mode-slide-fade-leave-active
	opacity 0
.mode-slide-fade-enter-from
	transform translateY(10px)
.mode-slide-fade-leave-active
	transform translateY(-10px)

::-webkit-scrollbar
	width 0 !important
	height 0
	display none

@keyframes rotate 
	from
		transform rotate(0deg)
	to
		transform rotate(359deg)
@keyframes beat1
	0% 
		transform scaleY(0)
	50%
		transform scaleY(0.7)
	100%
		transform scaleY(0)

@keyframes beat2
	0%
		transform scaleY(0)
	50%
		transform scaleY(0.5)
	100% 
		transform scaleY(0)

@keyframes beat3
	0%
		transform scaleY(0)
	50% 
		transform scaleY(0.3)
	100% 
		transform scaleY(0)

@media (min-width: 719px)
	.github-corner-out
		display inline-block
	.github-corner-in
		display none
	.audioPlayerUI
		display grid
		grid-template-columns 1fr 1fr
		grid-template-areas "a b" "c d"
		.albumDetails 
			text-align left !important
			margin 0 0 0 3.6rem !important
			.page-container
				display inline-block !important
		.albumImage 
			width 17rem
			height 17rem
			overflow hidden
			margin 0 auto
		.playerButtons
			width 18rem
			position relative
			margin 0 0.7rem !important
			text-align center
		.timeAndProgress
			grid-area c
			margin auto 0.2rem
</style>