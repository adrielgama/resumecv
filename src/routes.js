import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./Pages/Index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        {/* <Route path="/404" component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
