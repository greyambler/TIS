import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MainWindow from './MainWindow.jsx'
import MainTable from './MainTable.jsx'


import MainWindow_Save from './MainWindow_Save.jsx'
import MainWindow_N2 from './MainWindow_N2.jsx'



//import Header from './core/Header';

const _Debuge = false;

class Main extends Component {
   render() {
      return (
         <MainWindow w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}

class Table extends Component {
   render() {
      return (
         <MainTable w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}


class Main_Save extends Component {
   render() {
      return (
         <MainWindow_Save w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}
class Main_N2 extends Component {
   render() {
      return (
         <MainWindow_N2 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
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
class Nav extends Component {
   render() {
      return (
         <nav>
            <ul className="topmenu">
               <li>
                  <div className="header_Inner">
                     <div className="header_Text">
                        <Link to="/">
                           <img className="header_Img" src={'../images/favicon.ico'} alt="React"
                              width="30" height="30" />
                        </Link>
                     </div>
                     <div className="header_Text">
                        <h3> Временная ИС по системным инцидентам</h3>
                     </div>

                     <div className="header_Text">
                        <Link to="/">
                           <img className="header_Img" src={'../images/Repeat.png'} alt="React"
                              width="20" height="20" />
                        </Link>
                     </div>
                     <div className="header_Text">
                        <Link to="/users/">
                           <img className="header_Img" src={'../images/User.png'} alt="React"
                              width="20" height="20" />
                        </Link>
                     </div>
                  </div>

                  <ul className="submenu">
                     <li><Link to="/" >Главная</Link></li>
                     <li><Link to="/Table" >Таблица</Link></li>
                     <li><Link to="/Save" >Главная_Save</Link></li>
                     <li><Link to="/N2" >Главная_N2</Link></li>
                     <li><Link to="/users/">Пользователи</Link></li>
                     <li><Link to="/about/">О сайте</Link></li>
                  </ul>
               </li>
            </ul>
         </nav>
      );
   }
}


class App extends Component {
   constructor() {
      super();
      this.state = {
         W_Width: window.innerWidth,
         W_Height: window.innerHeight,
      }
      this.handleResize = this.handleResize.bind(this);
   }
   handleResize(WindowSize, event) {
      this.setState({ W_Width: window.innerWidth, W_Height: window.innerHeight })
   }
   componentDidMount() {
      window.addEventListener("resize", this.handleResize);
   }
   componentWillUnmount() {
      window.addEventListener("resize", null);
   }

   render() {
      return (
         <div>

            <Router>
               <Nav w_Height={this.state.W_Height} w_Width={this.state.W_Width} />
               <div className="content">
                  <Switch>
                     <Route path="/" exact
                        render={() =>
                           <Main w_Height={this.state.W_Height} w_Width={this.state.W_Width} />
                        } />
                     <Route path="/Save" exact
                        render={() =>
                           <Main_Save w_Height={this.state.W_Height} w_Width={this.state.W_Width} />
                        } />
                     <Route path="/N2" exact
                        render={() =>
                           <Main_N2 w_Height={this.state.W_Height} w_Width={this.state.W_Width} />
                        } />
                     <Route path="/Table" exact
                        render={() =>
                           <Table w_Height={this.state.W_Height} w_Width={this.state.W_Width} />
                        } />

                     <Route path="/about" component={About} />
                     <Route path="/users" component={Users} />
                     <Route component={NotFound} />
                  </Switch>
               </div>
            </Router>
         </div>
      );
   }
}
export default App;
