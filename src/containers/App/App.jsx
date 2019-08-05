import React from "react";
import { Header } from "../Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllTasks from "../SortedTaskPages/AllTasks";
import ActiveTasks from "../SortedTaskPages/ActiveTasks";
import DoneTasks from "../SortedTaskPages/DoneTasks";

import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={AllTasks} exact />
        <Route path="/active-tasks" component={ActiveTasks} />
        <Route path="/done-tasks" component={DoneTasks} />
      </Switch>
    </BrowserRouter>
  );
}
