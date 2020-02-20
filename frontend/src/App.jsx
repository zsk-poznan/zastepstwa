import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Teacher from './view/Teacher';
import Home from './view/Home';
import AllSubstitutions from './view/AllSubstitutions';
import SubstitutionDate from './components/SubstitutionDate'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/teacher/:name">
        <Teacher />
      </Route>
      <Route path="/all">
        <AllSubstitutions />
      </Route>
    </Switch>
    <SubstitutionDate />
  </Router>
);

export default App;
