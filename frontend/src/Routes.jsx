import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Todo from "./components/todo/Todo.jsx";
import About from "./components/about/About.jsx";
import Menu from "./template/menu/Menu.jsx";

function Routes() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/" component={Todo} />
                <Route exact path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;