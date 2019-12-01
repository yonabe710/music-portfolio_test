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
                    <a href="https://music-portfolio.netlify.com/#/signup" class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a href="https://music-portfolio.netlify.com/#/signin" class="button is-light">
                        Sign in
                    </a>
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
              幼少期より14年間ピアノを嗜む。大学からバンドサークルにてボーカル・ギターを担当。基本的にコピーバンド専門で、作曲もたまに行っている。楽器はドラム以外全て演奏可能。
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
              <div class = "movie-wrap">
                <iframe id = "player"  width="854" height="400" :src="`https://youtube.com/embed/${videoID}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <textarea v-model = "yturl"></textarea>
              <button type=“submit” @click="getVideoID">change</button>
              <router-link to="/mypage"><button type=“submit” @click="sendItem" >save</button></router-link>
            </article>

            <article class="tile is-child notification is-light">
              <p class="title">Twitter</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-light">
              <div class="content">
                <p class="title">Sound sample</p>
                <div class="soundcloud">
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/666328004&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
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

<script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-firestore.js"></script>

<script>
import firebase from 'firebase'
/* eslint-disable no-new */
export default {
  data: function () {
    return {
      yturl: 'https://www.youtube.com/watch?v=jis7E_mbwPw&list=PLjUYRJfqz5WsaAcHvdt6Qv5gaERy75fej',
      videoID: ''
    }
  },
  methods: {
    getVideoID () {
      this.videoID = this.$youtube.getIdFromURL(this.yturl)
    },
    jumptoMypage () {
      location.href = 'https://music-portfolio.netlify.com/#/mypage'
    },
    sendItem () {
      var db = firebase.firestore()
      db.collection('formcontent').add({
        formcontent: `https://youtube.com/embed/${this.videoID}`
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
      // const colref = firebase.firestore().collection("formcontent"); // "formcontent"という名前のコレクションへの参照を作成
      // const saveData = {
      //   videoID: `https://youtube.com/embed/${this.videoID}`
      // }
      // // addの引数に保存したいデータを渡す
      // colref.add(saveData).then(function (docRef) {
      // // 正常にデータ保存できた時の処理
      //   console.log('Document written with ID: ', docRef.id)
      // })
      // .catch(function (error) {
      //   // エラー発生時の処理
      //   console.error('Error adding document: ', error)
      // })

    }
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
  /* height: 0; */
  overflow: hidden;
}
.movie-wrap iframe {
  position: absolute;
  top: 0;
  left: 20px;
  width: 100%;
  height: 1000px  !important;
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
