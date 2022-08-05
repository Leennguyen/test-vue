<template>
 <div class="login-left">
   <img alt="" :src="require('@/assets/left-image.png')">
   <p>COOPAX</p>
   <h2>{{text}}</h2>
 </div>
</template>

<script>
export default {
  name: 'login-left',
// dsfjhjdk
  data() {
    return {
      text: 'The most beautiful venue for your event at your fingertips'
    };
  },
};
</script>

<style scoped>
.login-left{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-left p{
  color: white;
  font-weight: bolder;
  margin: 0;
  padding: 1%;
  position: absolute;
  top: 0;
  left: 0;
}
.login-left h2{
  position: absolute;
  color: white;
  text-align: left;
  font-size: 50px;
  line-height: 63px;
  width: 380px;
  height: 300px;
  /*margin: auto;*/

}
.login-left img {
  margin: 0;
  height: 100%;
}

@media only screen and (max-width: 500px) {
  .login-left {
    display: none;
  }
}
</style>