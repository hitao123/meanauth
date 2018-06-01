<template>
  <div class="hello">
    <nav-bar></nav-bar>
    <div v-if="user">
      <h2 class="page-header">{{ user.name }}</h2>
      <ul class="list-group">
        <li class="list-group-item">Username : {{ user.username }}</li>
        <li class="list-group-item">Email : {{ user.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

import navBar from '../components/navbar'

export default {
  name: 'profile',
  data () {
    return {
      user: null
    }
  },
  components: {
    navBar
  },
  mounted () {
    this.$store.dispatch('GETPROFILE', {})
      .then((res) => {
        if (res && res.code === '0000') {
          this.user = res.user
        } else {
          alert(res.message)
        }
      })
  }
}
</script>

<style>

</style>
