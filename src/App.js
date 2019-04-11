import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MainWindow from './MainWindow.jsx'
import MainTable from './MainTable.jsx'



import MainWindow_Save1 from './MainWindow_Save1.jsx'
import MainWindow_Save2 from './MainWindow_Save2.jsx'
import MainTable_Save1 from './MainTable_Save1.jsx'


import './index_Menu.css';

//import Header from './core/Header';

const _Debuge = true;

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


/********DEBUGE*****/

class Main_Save1 extends Component {
   render() {
      return (
         <MainWindow_Save1 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}
class Main_Save2 extends Component {
   render() {
      return (
         <MainWindow_Save2 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}
class Table_Save1 extends Component {
   render() {
      return (
         <MainTable_Save1 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}

/********DEBUGE*****/


class Nav extends Component {
   render() {
      return (
         <nav>
            <ul className="topmenu">
               <li>

                  <div className="header_Inner">

                     <Link to="/">
                        <img className="header_Img" src={'../images/favicon.ico'} alt="React"
                           width="30" height="30" />
                     </Link>

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
                     {_Debuge &&
                        <li><Link><center>Технические >></center></Link>
                           <ul className="submenu">
                              <li><Link to="/Table_Save1" >Таблица_Save1</Link></li>
                              <li><Link to="/Main_Save1" >Главная_Save1</Link></li>
                              <li><Link to="/Main_Save2" >Главная_Save2</Link></li>

                           </ul>
                        </li>
                     }


                     <li><Link to="/" >Главная</Link></li>
                     <li><Link to="/Table" >Таблица</Link></li>
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
                     <Route path="/Table" exact
                        render={() =>
                           <Table w_Height={this.state.W_Height} w_Width={this.state.W_Width} />
                        } />




                     <Route path="/Main_Save1" exact
                        render={() =>
                           <Main_Save1 w_Height={this.state.W_Height} w_Width={this.state.W_Width} />
                        } />
                     <Route path="/Main_Save2" exact
                        render={() =>
                           <Main_Save2 w_Height={this.state.W_Height} w_Width={this.state.W_Width} />
                        } />
                     <Route path="/Table_Save1" exact
                        render={() =>
                           <Table_Save1 w_Height={this.state.W_Height} w_Width={this.state.W_Width} />
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
