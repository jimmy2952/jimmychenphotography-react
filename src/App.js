import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import Carousel from './components/Carousel/Carousel'
import Portfolio from './components/Portfolio/Portfolio'


class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Layout>
                
            </Layout>
            <Switch>
              {/* <Route path="/contact" component={asyncAuth} /> */}
              {/* <Route path="/about" component={asyncAuth} /> */}
              <Route path="/portfolio" exact>
                <Portfolio />
              </Route>
              {/* <Route path="/map" component={asyncAuth} /> */}
              <Route exact path="/">
                <Carousel />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
    )
  }
}


export default App;
