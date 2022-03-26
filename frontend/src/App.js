import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Home from "./component/component/Home";
// import {  from "@mui/x-data-grid/models/props/DataGridProps";
import List from "./component/List.js"
import Detail from "./component/Details.js"
import Details from "./component/Detail.js"

import UpdateList from "./component/UpdateList.js"
import NewList from "./component/NewList";
// import NewList from "./component/NewList.js"
import Home from "./component/component/Home.js"
import GetDetails from "./component/component/GetDetails.js"

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/getall" component={Detail} />
        <Route exact path="/getall/:keyword" component={Details} />
        <Route exact path="/all" component={List} />
        <Route exact path="/update/:id" component={UpdateList} />
        <Route exact path="/company" component={NewList} />
        <Route exact path="/company/:id" component={GetDetails} />

      </Switch>
    </Router>

  );
}

export default App;
