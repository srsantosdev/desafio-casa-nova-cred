import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://casanova-backend-staging.herokuapp.com/graphql",
});

export default client;
