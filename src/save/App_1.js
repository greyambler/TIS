import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MainWindow from './MainWindow.jsx'

import Header from './core/Header';

import './index.css';


const _Debuge = true;

class Main extends Component {
   render() {
      return (
         <MainWindow />
      );
   }
}

class About extends Component {
   render() {
      return <center><h2>О сайте</h2></center>;
   }
}
class Users extends Component {
   render() {
      return <center><h2>Пользователи</h2></center>;
   }
}
class NotFound extends Component {
   render() {
      return <center><h2>Ресурс не найден</h2></center>;
   }
}

class Nav extends React.Component {
   render() {
      return <nav>
         <Link to="/">Главная</Link>
         <Link to="/products">Товары</Link>
         <Link to="/about">О сайте</Link>
      </nav>;
   }
}
class Nav_1 extends React.Component {
   render() {
      return (
         <nav>
            <ul className="topmenu">
               <li>
                  <div className="header_Inner">

                     <a href="/" className="active">
                        <img className="header_Img" src={'../images/favicon.ico'} alt="React"
                           width="30" height="30" />
                     </a>

                     <div className="header_Text">
                        <h3> Временная ИС по системным инцидентам</h3>
                     </div>
                     <div className="header_Text">
                        <a href="/" className="active">
                           <img className="header_Img" src={'../images/Repeat.png'} alt="React"
                              width="20" height="20" />
                        </a>
                     </div>
                     <div className="header_Text">
                     <a href="/users/" className="active">
                        <img className="header_Img" src={'../images/User.png'} alt="React"
                           width="20" height="20" />
                     </a>
                     </div>
                  </div>

                  <ul className="submenu">
                     <li><Link to="/">Главная</Link></li>
                     <li><a href="/users/">Пользователи</a></li>
                     <li><Link to="/about/">О сайте</Link></li>
                  </ul>
               </li>
            </ul>
         </nav>
      );
   }
}

class App extends Component {
   render() {
      return (
         <div>
            {_Debuge ?
               (
                  <div>
                     <Router>
                        <Nav_1 />
                        <div className="content">
                           <Switch>
                              <Route exact path="/" component={Main} />
                              <Route path="/about" component={About} />
                              <Route path="/users" component={Users} />
                              <Route component={NotFound} />
                           </Switch>
                        </div>
                     </Router>
                  </div>
               ) : (
                  <div>
                     <div className="header">

                        <div className="header_Inner">

                           <img className="header_Img"
                              src={'../images/favicon.ico'}
                              alt="React"
                              width="30"
                              height="30"
                           />
                           <div className="header_Text">
                              <h3> Временная ИС по системным инцидентам</h3>
                           </div>

                        </div>
                     </div>

                     <div>
                        <Router>
                           <Nav_1 />
                           <div className="content">
                              <Switch>
                                 <Route exact path="/" component={Main} />
                                 <Route path="/about" component={About} />
                                 <Route path="/users" component={Users} />
                                 <Route component={NotFound} />
                              </Switch>
                           </div>
                        </Router>
                     </div>

                  </div>
               )
            }
         </div>
      );
   }
}
export default App;
