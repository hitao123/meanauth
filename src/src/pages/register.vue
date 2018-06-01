<template>
  <div>
    <nav-bar></nav-bar>
    <h2 class="page-header">Register</h2>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" v-model="name" name="name" class="form-control" id="name" placeholder="Enter Name">
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" v-model="username" name="username" class="form-control" id="username" placeholder="Enter Username">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" v-model="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" v-model="password" name="password" class="form-control" id="password" placeholder=" Enter Password">
    </div>
    <button type="button" class="btn btn-primary" @click="handleRegister">Register</button>
  </div>
</template>

<script>

import navBar from '../components/navbar'

export default {
  data () {
    return {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  },
  components: {
    navBar
  },
  methods: {
    handleRegister () {
      let params = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('REGISTER', { params })
        .then((res) => {
          if (res && res.code === '0000') {
            this.$router.push({
              name: 'dashboard'
            })
          }
        })
    }
  }
}
</script>

<style>

</style>
