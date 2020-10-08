import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import Carousel from './components/Carousel/Carousel'
import Portfolio from './components/Portfolio/Portfolio'


class App extends Component {
  render() {
    return (
        <div>
          <Layout>

          </Layout>
          <Carousel />
          <Portfolio />
        </div>
    )
  }
}


export default App;
