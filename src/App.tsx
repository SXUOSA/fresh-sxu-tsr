import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Index from './pages/index';
import Info from './pages/info';
import Menu from './pages/menu';
import './index.css';

const browserHistory = createBrowserHistory();
const setFontBase = ():void => {
  let windowWidth = document.documentElement.clientWidth;
  document.getElementsByTagName('html')[0].style.fontSize = windowWidth / 10 + 'px';
};

window.addEventListener('resize', ():void => {
  setFontBase(); 
});

window.onload = ():void => {
  setFontBase();
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Route path="/" component={Index} exact/>
        <Route path="/info" component={Info} exact/>
        <Route path="/menu" component={Menu}/>
      </Router>
    </div>
  );
}

export default App;
