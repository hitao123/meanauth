<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">MEAN Auth App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link">Home<span></span></a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="isLogin">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item" v-if="isLogin">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <router-link class="nav-item" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isLogin"  >
            <router-link class="nav-item" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="isLogin">
            <a class="nav-item logout" @click="handleLogout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { logout, isTokenExpired } from '../services'

export default {
  name: 'navBar',
  computed: {
    isLogin () {
      return isTokenExpired()
    }
  },
  methods: {
    handleLogout () {
      logout()
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style>
  .logout {
    line-height: 36px;
    cursor: pointer;
  }
  .nav-item {
    margin-left: 0.20rem;
  }
</style>
