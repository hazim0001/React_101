import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            {/* when u wanna pass props from the route */}
            <Route path="/products" render={(props) => <Products sortBy="test prop" {...props} />} />
            {/* the question mark ? in the below line meaning that the params are optional.. not a good practise though */}
            <Route path="/posts/:year?/:month?" component={Posts} />
            {/* redirection from to */}
            <Redirect from="/messages" to="/posts" />
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            {/* redirection in case the url not found */}
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
