<template>
  <div>
    <label>
      ID:
      <input v-model="id"/>
    </label>
    <button @click="getUserById">Search</button>
    <h3>{{ user.id }}</h3>
    <h3>{{ user.username }}</h3>
    <h3>{{ user.role }}</h3>
    <h3>{{ user.email }}</h3>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import queryUserById from './../api/gql/queryUserById.gql'
import {Query, User} from '@/api/types/types'

@Component
export default class HelloWorld extends Vue {
  id: String = '1'
  user: User | {} = {}

  getUserById() {
    this.$apollo.query<Query>({
      query: queryUserById,
      variables: {
        id: this.id
      }
    }).then(result => {
      this.user = result.data.user
    })
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
