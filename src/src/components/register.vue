<template>
  <div>
    <h2 class="page-header">Register</h2>
    <form>
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
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  }
}
</script>

<style>

</style>
