<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid tab">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="../assets/tec.png" class="logo">
          </a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <!-- <form class="navbar-form navbar-left searchbox">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" name="search">
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                  <i class="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form> -->
          <ul class="nav navbar-nav navbar-right">
            <li><a :href="urlin"><span class="glyphicon glyphicon-log-out"></span> Signout</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
      <div class="col-lg-5 col-md-5 col-sm-8 col-xs-10">
        <h3><center>Edit your Techi Videos</center></h3>
        <div>
          <center>
            <input id="title" class="letter" type="text" v-model="title"  value=""/>
          </center>
        </div>
        <div>
          <center>
            <textarea rows="6" cols="50" id="descri" class="letter1" v-model="descri" >
            </textarea>
          </center>
        </div>
        <div>
          <center>
            <input id="ode" class="letter" type="text" v-model="code" value=""/>
          </center>
        </div>
        <center>
          <div class="btn_lg" v-on:click="add()">
            Save Changes
          </div>
        </center>
      </div>
      <div class="col-lg-5 col-md-5 col-sm-8 col-xs-10">
        <div>
          <h3>{{t}}</h3>
        </div>
        <div>
          <iframe  v-bind:src="y" frameborder="0">
          </iframe>
        </div>
        <div>
          <p>{{d}}</p>
        </div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'edit',
  data () {
    return {
      y: '',
      t: '',
      d: '',
      auto: '?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1',
      title: '',
      descri: '',
      code: ''
    }
  },
  methods: {
    add: function () {
      this.t = this.title
      this.d = this.descri
      var u = this.code
      var to = this.code.split('=')[1]
      alert(this.t)
      alert(u)
      alert(this.d)
      alert(to)
      this.y = 'https://www.youtube.com/embed/' + to
    }
  }
}
</script>
<style scoped>
  .logo {
    width: 95%;
    height: 75px;
    margin-top: -12px;
    margin-left: 25px;
  }

  .tab {
    border-radius: 0px;
    border-radius: 0px;
    background-color: #fff;
    height: 85px;
    margin-top: -61px;
    box-shadow: 0px 5px 5px #e7e7e7;
  }

  .navbar-default {
    background-color: #fff;
    border-color: #fff;
  }

  .navbar-right {
    float: right!important;
    margin-right: -15px;
    margin-top: 15px;
    font-size: 1.3em;
  }

  .navbar-nav>li>a {
    color: #ff7517;
  }

  .active {
    color: #252422;
  }

  .navbar-toggle {
    border-color: #ff7517;
    margin-top: 25px;
  }

  .letter {
    padding-left: 20px;
    height: 3.3em;
    width: 90%;
    margin-top: .2em;
    border-radius: 1px;
    border: 2px solid #eeeeee
  }

  .letter1 {
    padding-left: 20px;
    width: 90%;
    margin-top: .2em;
    border-radius: 1px;
    border: 2px solid #eeeeee
  }

  .btn_lg {
    margin-top: 35px;
    padding-top: 5%;
    color:#fff;
    background-color: #ff7517;
    width: 90%;
    height: 46px;
    font-size: 23px;
    text-align: center;
    padding-top: 6px;
    border-radius: 2px;
    font-family: 'Slack-Lato','Roboto',Arial, Helvetica, sans-serif;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.3);
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 25px;
  }

  html {
    overflow-x: hidden !important;
  }
</style>
