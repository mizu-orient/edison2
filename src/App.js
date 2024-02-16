import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import LoggedInComponent from "./Main";
const LoggedInComponent = lazy(() => import("./Main"));
const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fragment />}>
        <Switch>
          <Route exact path="/" component={LoggedInComponent} />
          <Route path="/c/*" component={LoggedOutComponent} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
