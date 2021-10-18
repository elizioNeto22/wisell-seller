import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:9092/graphql",
  //uri: "http://localhost:5000/",
  //uri: "https://compras-springboot.herokuapp.com/"
});

export default client;
