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
                    <a href="http://serveo.net:8083/#/signup" class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a href="http://serveo.net:8083/#/signin" class="button is-light">
                        Log in
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
              東大理③出身の高学歴イケメン。幼少期より14年間ピアノを嗜む貴族。大学からバンドサークルにてボーカル・ギターを担当。基本的にコピーバンド専門で、作曲もたまに行っている。楽器はドラム以外全て演奏可能。
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
                <!-- Content -->
                <div class="movie-wrap">
                  <iframe width="854" height="480" src="https://www.youtube.com/embed/AygQwF5wfVM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
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

  <!-- <div class="editor">
    <button @click="toggleEditable">
      < editableがtrueであればSaveを表示、そうでなければEditを表示 -->
      <!-- <template v-if="editable">Save</template>
      <template v-else>Edit</template>
    </button> -->
    <!-- <div>
      bio
      <p> -->
        <!-- editableがtrueであればtextareaの中身を表示、そうでなければHelloを表示-->
        <!-- <template v-if="editable">
          <textarea v-model="greet"></textarea>
        </template>
        <template v-else>{{ greet }}</template>
      </p>------------
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data () {
    return {
      editable: false,
      greet: 'hello'
    }
  },
  methods: {
    toggleEditable () {
      this.$data.editable = !this.$data.editable
    }
  }
}
</script>
