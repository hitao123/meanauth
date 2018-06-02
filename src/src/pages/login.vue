<template>
  <div>
    <nav-bar></nav-bar>
    <h2 class="page-header">Login</h2>
    <div class="form-group">
      <label for="Username">Username</label>
      <input type="text" class="form-control" placeholder="Enter Username" v-model="username" name="username">
    </div>
    <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" placeholder="Enter Password" v-model="password" name="password">
    </div>
    <!-- <div class="checkbox">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div> -->
    <button type="button" class="btn btn-primary" @click="handleLogin">Login</button>
  </div>
</template>

<script>

import { storeUserData } from '../services'
import navBar from '../components/navbar'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    navBar
  },
  methods: {
    handleLogin () {
      let parmas = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('AUTHENTIC', parmas)
        .then((res) => {
          if (res && res.code === '0000') {
            storeUserData(res.token, res.user)
            this.$router.push({
              name: 'dashboard'
            })
          } else {
            alert(res.message)
          }
        })
    }
  }
}
</script>

<style>

</style>
