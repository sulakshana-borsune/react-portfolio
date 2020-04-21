import React from 'react';
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Route exact path="/portfolio/" component={Home} />
      <Route exact path="/portfolio/portfolio" component={Portfolio} />
      <Route exact path="/portfolio/contact" component={Contact} />
    </>
  );
}

export default App;
