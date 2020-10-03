import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchAndResults from './app/screens/searchandresults';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact={true} component={SearchAndResults} />
      </div>
    </Router>
  );
}

export default App;
