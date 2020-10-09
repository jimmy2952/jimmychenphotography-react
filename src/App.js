import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import Carousel from './components/Carousel/Carousel'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Map from './components/Map/Map'


class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Layout>
                
            </Layout>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/map" component={Map} />
              <Route exact path="/" component={Carousel} />
            </Switch>
          </BrowserRouter>
        </div>
    )
  }
}


export default App;
