import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const lazyHome = React.lazy(() => import("./pages/Home"));
const lazyClientList = React.lazy(() => import("./pages/ClientList"));

const link = from([new HttpLink({ uri: "http://localhost:3001/graphql" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  const { t } = useTranslation();

  const loading = t("fallback");

  return (
    <BrowserRouter>
      <Switch>
        <React.Suspense fallback={loading}>
          <ApolloProvider client={client}>
            <Route path="/" exact component={lazyHome} />
            <Route path="/clientes" component={lazyClientList} />
            </ApolloProvider>
        </React.Suspense>  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
