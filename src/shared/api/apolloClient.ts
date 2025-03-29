import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://vortex.korabli.su/api/graphql/glossary/",
  }),
  cache: new InMemoryCache(),
});

export default client;
