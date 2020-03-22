<template>
  <div id="container">
    <header class="header">
      <b-navbar class = "notification is-success">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  <img src="@/assets/IMG_4168.jpg">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link to="/signin" class="button is-primary">
                      <strong>Mypage</strong>
                    </router-link>
                    <router-link to="/signin" class="button is-light">
                      <strong>Sign in</strong>
                    </router-link>
                </div>
            </b-navbar-item>
        </template>
      </b-navbar>
    </header>

    <div id="main">
      <section class="hero is-light">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Profile
            </h1>
            <h2 class="subtitle">
              {{profile}}
            </h2>
            <ul class="follow">
              <li><a href="https://twitter.com/k_onshitsu" class="flowbtn7 fl_tw7"><i><font-awesome-icon :icon = "['fab','twitter']"></font-awesome-icon></i></a></li>
              <li><a href="https://www.youtube.com/channel/UCoOnBhAiccYdkJUbgwdorxg/" class="flowbtn7 fl_yu7"><i><font-awesome-icon :icon = "['fab','youtube']"></font-awesome-icon></i></a></li>
              <li><a href="FacebookページのURL" class="flowbtn7 fl_fb7"><i><font-awesome-icon :icon = "['fab','facebook']"></font-awesome-icon></i></a></li>
            </ul>
          </div>
        </div>
      </section>
        <div class="tile">
          <div class="tile is-parent is-vertical is-8">
            <article class="tile is-child notification is-light">
              <p class="title">YouTube</p>
              <div class="content">
                <div class="movie-wrap">
                  <iframe width="854" height="480" :src="this.videoID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-light">
              <p class="title">Twitter</p>
              <div class="content" style="width:832px;" :options="{ cards: 'hidden' }">
                    <!-- Content -->
                <Tweet :id="tweetID" :key="tweetID"></Tweet>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-light">
              <div class="content">
                <p class="title">Sound sample</p>
                <div class="soundcloud">
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.soundID}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`"></iframe>
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/633309999&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/568198284&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/679809245&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </div>
                <div class="content">
                  <!-- Content -->
                </div>
              </div>
            </article>
          </div>
        </div>
    </div>

    <footer class="footer">
      <div class="tile">
        <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-light">
              <p class="title">sairilab</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import {Tweet} from 'vue-tweet-embed'

export default {
  name: 'Main',
  data () {
    return {
      profile: '',
      videoID: '',
      tweetID: '',
      soundID: '',
      slash: '/'
      // userid: firebase.auth().currentUser.uid
    }
  },
  components: {
    Tweet: Tweet
  },
  created () {
    let self = this
    const db = firebase.firestore()
    const collectionRef = db.collection('uid')
    const docRef = collectionRef.where('twuserid', '==', this.$route.params.id)
    docRef.get().then(function (querySnapshot) {
      querySnapshot.forEach(doc => {
        if (doc.exists) {
          console.log('Document data:', doc.data().pfcontent)
          console.log('Document data:', doc.data().yturl)
          console.log('Document data:', doc.data().twid)
          console.log('Document data:', doc.data().scid)
          console.log(self.$route.params.id)
          self.profile = doc.data().pfcontent
          self.videoID = doc.data().yturl
          self.tweetID = doc.data().twid
          self.soundID = doc.data().scid
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      })
    }).catch(function (error) {
      console.log('Error getting document:', error)
    })
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.notification.is-success{
  height: 50px
}

#container{
  background-color: #dcdcdc;
}

/* -----------------------フォローボタンのstylesheet----------------------------- */
.follow{
  text-align : right;
}

/* ボタン全体 */
.flowbtn7{
border-radius:50%;
position:relative;
display:inline-block;
width:50px;
height:50px;
font-size:30px;
color:#fff!important;
text-decoration:none;
transition:.5s;
}
/* アイコンをど真ん中に*/
.flowbtn7 i{
position:absolute;
top:50%;
left:50%;
-ms-transform:translate(-50%,-50%);
-webkit-transform:translate(-50%,-50%);
transform:translate(-50%,-50%);
}
/* ulタグの内側余白を０にする */
ul.snsbtniti{
padding:0!important;
}
/* ボタン全体の位置 */
.snsbtniti{
display:flex;
flex-flow:row wrap;
justify-content:space-around;
}

/* ボタン同士の余白 */
.snsbtniti li{
flex:0 0 33%;
text-align:center !important;
}

/* ボタンにマウスを乗せた時 */
.flowbtn7:hover{
-webkit-transform:translateY(-5px);
-ms-transform:translateY(-5px);
transform:translateY(-5px);
}

/* Twitter */
.fl_tw7{
background:linear-gradient(135deg, #13f1fc 0%,#0470dc 100%);
}

/* Facebook */
.fl_fb7{
background: linear-gradient(135deg, #6699ff 0%,#3b5998 100%);
}

/* YouTube */
.fl_yu7{
background:linear-gradient(135deg, #f5515f 0%,#c9293c 100%);
font-size:26px;
}
/* -----------------------フォローボタンのstylesheet----------------------------- */
.movie-wrap {
  position: relative;
  padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
  height: 0;
  overflow: hidden;
}
.movie-wrap iframe {
  position: absolute;
  top: 0;
  left: 20px;
  width: 100%;
  height: 100%;
}

.soundcloud{
  margin-top: 50px;
  padding: 30px 10px;
  background-color: #dcdcdc
}

.tile.is-child{
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.4);
}

</style>
