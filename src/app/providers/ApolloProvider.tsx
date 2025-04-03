import React, { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@shared/api/apolloClient";

interface Props {
  children: ReactNode;
}

const ApolloClientProvider: React.FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
