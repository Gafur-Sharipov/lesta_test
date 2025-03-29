import React from "react";
import ApolloClientProvider from "./providers/ApolloProvider";
import ShipPage from "@pages/ShipPages";

const App: React.FC = (): JSX.Element => {
  return (
    <ApolloClientProvider>
      <ShipPage />
    </ApolloClientProvider>
  );
};

export default App;
