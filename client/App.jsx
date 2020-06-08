/**
 * @module  App.jsx
 * @author Katty Polyak and
 * @date Sat, Jun 6, 2020
 * @description main rendering component
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import ProjectPageContainer from './containers/ProjectPageContainer.jsx';
import DashboardContainer from './containers/DashboardContainer.jsx';
import LoginPage from './components/LoginPage.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <LoginPage />} />
        {/* Working on landing page container still */}
        <Route exact path="/dashboard" component={() => <DashboardContainer />} />
        {/* <Route exact path="/dashboard" component={() => <h1>Logged in</h1>} /> */}
        <Route exact path="/project-board" component={() => <ProjectPageContainer />} />
      </Switch>
    </Provider>
  );
}

export default App;
