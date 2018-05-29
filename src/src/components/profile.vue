<template>
  <div class="hello">
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
export default {
  name: 'profile',
  data () {
    return {
      user: {

      }
    }
  }
}
</script>

<style>

</style>
