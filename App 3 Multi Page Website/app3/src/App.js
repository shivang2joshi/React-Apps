import React from 'react';
import Home from './components/Home';
import Post from './components/Post';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// npm install react-router-dom --save
// dependency required. for adding routes to different pages

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          {/* just like switch case
              matches first route and call that component
              ignores further Route tags  */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
