<template>
<div class="login-right">
  <div class="login-right__head">
    <p class="logo-mobile">COOPAX</p>
    <v-icon class="icon">mdi-close</v-icon>
  </div>
  <div class="login-right__form">

    <h3>{{title}}</h3>
    <p>Please enter your username and password</p>
    <p>
      <v-text-field
          label="User name"
          variant="solo"
      ></v-text-field>
    </p>
    <p>
      <v-text-field
          label="Password"
          variant="solo"
      ></v-text-field>
    </p>
    <p><a href="">Forgot your username?</a>/<a href="">Forgot your password?</a></p>
    <v-btn
        elevation="2"
    >{{title}}</v-btn>
  </div>
  <div class="login-right__register">
    <p>Don't have an account ? <a href="">Register</a></p>
  </div>
</div>
</template>

<script>
export default {
  name: "LoginRight.vue",
  data(){
    return{
      title: 'Log in',
    }
  }
}
</script>

<style scoped>

.logo-mobile{
  display: none;
}
.login-right{
  display: flex;
  flex-direction: column;
}
.icon{
  position: absolute;
  top: 0;
  right:0;
  padding: 1%;
  font-size: 30px;
}
.logo-mobile{
  display: none;
}
.icon{
  display: flex;
  float: right;
  padding: 2% ;
}
.login-right__form{
  width: 50%;
  margin: auto;
}
.login-right__form h3{
  font-size: 30px;
}
.login-right__form input{
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  padding: 0 2%;

  background: #FFFFFF;
  border: 1px solid rgba(120, 144, 156, 0.5);
  border-radius: 3px;
}
.login-right__form button{
  display: flex;
  float: right;
  background-color: #d43636;
  padding: 2% 4%;
  color: white;
  border: none;
  border-radius: 5px;
}
.login-right__form a{
  color: #0059ff;
}
.login-right__form p{
  margin: 2% 0;
}
.login-right__register p{
  display: flex;
  justify-content: center;
  padding: 2%;
}
@media only screen and (max-width: 500px) {
  .login-right__head {
    border: 1px solid lightgrey;
    box-shadow: lightgrey 5px 5px 5px;
    padding: 3% 0 ;
  }
  .login-right{
    width: 100%;
  }
  .login-right__form{
    width: 90%;
  }
  .login-right__form p{
    margin: 5% 0;
  }
  .login-right__register{
    padding: 4%;
  }
  .login-right__form button{
    display: block;
    width: 100%;
    text-align: center;
  }
  .icon{
    padding: 8% 5%;
  }
  .logo-mobile{
    display: block;
    padding: 2%;
  }
  }
</style>