import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

// import LoggedInComponent from "./Main";
const LoggedInComponent = lazy(() => import("./Main"));
const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fragment />}>
        <Switch>
          <Route exact path="/" component={LoggedInComponent} />
          <ThemeProvider theme={theme}>
            <Route path="/c" component={LoggedOutComponent} />
          </ThemeProvider>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
