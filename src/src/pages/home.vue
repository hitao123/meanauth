<template>
  <div>
    <nav-bar></nav-bar>
    <div class="jumbotron text-center">
      <h1>MEAN Authentication App</h1>
      <p class="lead">Welcome to our custom MEAN authentication application built from scratch </p>
      <div>
        <router-link class="btn btn-primary" to="/register">Register</router-link>
        <router-link class="btn btn-dark" to="/login">Login</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h3>Express Backend</h3>
        <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>
      </div>
      <div class="col-md-4">
        <h3>Vue-CLI</h3>
        <p>Vue-CLI to generate components, services and more. Local dev server and easy compilation</p>
      </div>
      <div class="col-md-4">
        <h3>JWT Tokens</h3>
        <p>Full featured authentication using JSON web tokens. Login and store user data</p>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '../components/navbar'
export default {
  components: {
    navBar
  }
}
</script>

<style>

</style>
