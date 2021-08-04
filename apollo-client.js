import React from "react"
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://plasma-prime.com/graphql",
    cache: new InMemoryCache(),
});

export default client;
