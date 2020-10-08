import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import Carousel from './components/Carousel/Carousel'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'


class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Layout>
                
            </Layout>
            <Switch>
              {/* <Route path="/contact" component={asyncAuth} /> */}
              <Route path="/about" component={About} />
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
