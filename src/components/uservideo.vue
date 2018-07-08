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
          <form class="navbar-form navbar-left searchbox">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" name="search">
              <!-- <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                  <i class="glyphicon glyphicon-search"></i>
                </button>
              </div> -->
            </div>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><a v-bind:href="urlup"><span class="glyphicon glyphicon-user"></span> Signup</a></li>
            <li><a :href="urlin"><span class="glyphicon glyphicon-log-out"></span> Signin</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
        <div class="row" >
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-10" v-for="tec in videos" :key="tec">
            <a :href="frame">
              <h3>{{tec.name}}</h3>
              <iframe class="video" v-bind:src="y + tec.code + c" allowfullscreen>
              </iframe>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg- col-md-1 col-sm-1 col-xs-1"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'uservideo',
  data () {
    return {
      urlup: '#/s',
      urlin: '#/l',
      frame: '#/h',
      c: '?hd=1&modestbranding=0&showinfo=0&autohide=0&controls=0&rel=0',
      y: 'https://www.youtube.com/embed/',
      tm: 'tgbNymZ7vqY',
      select_video: [
        {name: 'apple', code: 'tgbNymZ7vqY', descri: 'jhdcvjvc'}
      ],
      videos: [
        {name: 'apple', code: 'tgbNymZ7vqY', descri: 'jhdcvjvc'},
        {name: 'orange', code: 'w2rkN_mvOj0', descri: 'jhdcvjvc'},
        {name: 'apple', code: 'tgbNymZ7vqY', descri: 'jhdcvjvc'},
        {name: 'orange', code: 'w2rkN_mvOj0', descri: 'jhdcvjvc'},
        {name: 'apple', code: 'tgbNymZ7vqY', descri: 'jhdcvjvc'},
        {name: 'orange', code: 'w2rkN_mvOj0', descri: 'jhdcvjvc'}
      ],
      u_comment: ['jhj', 'kjwdcvk', 'khgk']
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

  .searchbox {
    margin-left: 70px;
    margin-top: 20px;
  }

  .navbar-form {
    border-color: #fff;
  }

  .form-control {
    width: 500px !important;
    padding: 20px;
  }

  @media screen and (min-width: 820px) and (max-device-width: 840px) {
    .form-control {
      width: 230px !important;
      padding: 20px;
    }
  }

    @media screen and (min-width: 768px) and (max-device-width: 819px) {
    .form-control {
      width: 175px !important;
      padding: 20px;
    }
  }

  @media screen and (min-width: 2001px) and (max-device-width: 2600px) {
      .video {
        width: 100%;
        height: 450px;
      }

      .recomnd {
        width: 100%;
        height: 220px;
      }
  }

    @media screen and (min-width: 1500px) and (max-device-width: 2000px) {
      .video {
        width: 100%;
        height: 450px;
      }

      .recomnd {
        width: 100%;
        height: 240px;
      }
    }

    @media screen and (min-width: 1001px) and (max-device-width: 1499px) {
      .video {
        width: 100%;
        height: 350px;
      }

      .recomnd {
        width: 100%;
        height: 180px;
      }
    }

    @media screen and (min-width: 500px) and (max-device-width: 1000px) {
      .video {
        width: 100%;
        height: 250px;
      }

      .recomnd {
        width: 95%;
        height: 90px;
      }
    }
    @media screen and (min-width: 350px) and (max-device-width: 499px) {
      .video {
        width: 100%;
        height: 180px;
      }

      .recomnd {
        width: 95%;
        height: 60px;
      }
    }

   .letter {
    padding-left: 20px;
    height: 3.3em;
    width: 92%;
    margin-top: 10px;
    margin-bottom: 15px;
    border-radius: 1px;
    border: 2px solid #eeeeee;
    margin-left: 0%
  }

  @media screen and (min-width: 500px) and (max-device-width: 916px) {
     .letter {
    padding-left: 20px;
    height: 3.3em;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 15px;
    border-radius: 1px;
    border: 2px solid #eeeeee;
    margin-left: -7%
  }
  }

  .send {
    width: 50px;
    height: 50px;
  }

  .cmnt {
    color: #ff7517;
    font-size: 2em;
    letter-spacing: 2px;
  }

  html {
    overflow-x: hidden !important;
  }
  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    overflow-x: hidden !important;
}
</style>
