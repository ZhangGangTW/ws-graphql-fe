<template>
  <div>
    <label>
      ID:
      <input v-model="id"/>
    </label>
    <button @click="getUserById">Search</button>
    <h3>{{ user.username }}</h3>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {ApolloClient, gql, InMemoryCache} from '@apollo/client';
import {User} from '@/api/types/types'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

@Component
export default class HelloWorld extends Vue {
  id: String = '1'
  user: User | {} = {}

  getUserById() {
    this.user = client.query<User>({
      query: gql`
          query Query($id: ID!){
              user(id: $id){
                  id
                  username
                  group{
                      id
                      name
                  }
              }
          }
      `,
      variables: {
        id: this.id
      }
    })

  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
