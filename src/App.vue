<template>
  <v-app>
    <v-main>
      <div class="login-dialog">
        <login-left></login-left>
        <login-right ></login-right>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import LoginLeft from "@/components/LoginLeft";
import LoginRight from "@/components/LoginRight";
export default {
  name: 'App',

  components: {
    LoginLeft,
    LoginRight,
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>
.login-dialog {
  height: 100%;
  display: grid;
  /*grid-template-columns: 455px 1fr;*/
  grid-template-columns: 25% 75%;
}
@media only screen and (max-width: 500px) {
  .login-dialog {
    display: flex;
  }
}
</style>
