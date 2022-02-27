import { createApp, h, provide } from "vue";
import { createPinia } from "pinia";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { DefaultApolloClient } from "@vue/apollo-composable";

import App from "./App.vue";
import router from "./router";

const defaultClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

// const query = gql`
//   query {
//     characters {
//       results {
//         name
//       }
//     }
//   }
// `;

// defaultClient
//   .query({
//     query,
//   })
//   .then((res) => res.data.characters.results)
//   .then((res) => console.log(res));

const app = createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render() {
    return h(App);
  },
});

app.use(createPinia());
app.use(router);

app.mount("#app");
