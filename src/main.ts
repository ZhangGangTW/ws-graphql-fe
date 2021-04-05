import Vue from 'vue'
import App from './App.vue'
import VueApollo from "vue-apollo";
import ApolloClient from 'apollo-boost';

Vue.config.productionTip = false
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: new ApolloClient({
        uri: 'http://localhost:8080/graphql',
    }),
})

new Vue({
    apolloProvider,
    render: h => h(App),
}).$mount('#app')

