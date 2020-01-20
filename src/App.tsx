import React from 'react';
import Lander from './Components/Lander';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Lander} />
      </Switch>
    </Router>
  );
}

export default App;
