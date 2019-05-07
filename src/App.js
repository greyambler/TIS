import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MainWindow from './MainWindow.jsx'
import MainTable from './MainTable.jsx'

import MainWindow_Save1 from './MainWindow_Save1.jsx'
import MainWindow_Save2 from './MainWindow_Save2.jsx'
import MainWindow_Save8 from './MainWindow_Save8.jsx'

import MainTable_Save1 from './MainTable_Save1.jsx'
import MainTable_Save2 from './MainTable_Save2.jsx'
import MainTable_Save3 from './MainTable_Save3.jsx'
import MainTable_Save4 from './MainTable_Save4.jsx'
import MainTable_Save5 from './MainTable_Save5.jsx'
import MainTable_Save6 from './MainTable_Save6.jsx'
import MainTable_Save7 from './MainTable_Save7.jsx'



//import Header from './core/Header';




const _Debuge = true;

class Main extends Component {
   render() {
      return (
         <MainWindow w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}
class Reports extends Component {
   render() {
      return (
         <MainTable w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}
class Help extends Component {
   render() {
      return <center><h2>Помощь</h2></center>;
   }
}
class Settings extends Component {
   render() {
      return <center><h2>Настройки</h2></center>;
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
class Main_Save3 extends Component {
   render() {
      return (
         <MainWindow_Save8 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
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
class Table_Save2 extends Component {
   render() {
      return (
         <MainTable_Save2 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}

class Table_Save7 extends Component {
   render() {
      return (
         <MainTable_Save7 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}


class Date_Save5 extends Component {
   render() {
      return (
         <MainTable_Save5 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}
class Date_Save6 extends Component {
   render() {
      return (
         <MainTable_Save6 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}


class Table_Save3 extends Component {
   render() {
      return (
         <MainTable_Save3 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}
class Table_Save4 extends Component {
   render() {
      return (
         <MainTable_Save4 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
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
                        <div className='headermenu'>Меню</div>
                     </Link>
                     <div className="header_Text">
                        <h3>Временная ИС по системным инцидентам</h3>
                     </div>
                     <table className="header_Left">
                        <tbody>
                           <tr>
                              <td>
                                 <button className='btn_Reload' type="button" onClick={refreshPage}>
                                    <img className="header_Img" src={'../images/Repeat1.png'} alt="React"
                                       width="20" height="20" />
                                 </button>
                              </td>
                              <td>
                                 <Link to="/settings">
                                    <img className="header_Img" src={'../images/Work.png'} alt="React"
                                       width="20" height="20" />
                                 </Link>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <ul className="submenu">
                     {_Debuge &&
                        <li><Link to="/"><center>Технические &gt;&gt;</center></Link>
                           <ul className="submenu">
                              <li><Link to="/Table_Save1" >Таблица_Эталон1</Link></li>
                              <li><Link to="/Table_Save2" >Таблица_MinTable2</Link></li>
                              <li><Link to="/Table_Save3" >Таблица_Save3</Link></li>
                              <li><Link to="/Table_Save4" >Таблица_Save4</Link></li>

                              <li><Link to="/Table_Save7" >Таблица_Save7</Link></li>

                              <li><Link to="/Date_Save5" >Date_Save5</Link></li>
                              <li><Link to="/Date_Save6" >Date_Save6</Link></li>
                              

                              <li><Link to="/Main_Save1" >Главная_Save1</Link></li>
                              <li><Link to="/Main_Save2" >Главная_Save2</Link></li>
                              <li><Link to="/Main_Save3" >Главная_Save3</Link></li>


                              

                           </ul>
                        </li>
                     }

                     <li><Link to="/" >Главная</Link></li>
                     <li><Link to="/settings">Настройки</Link></li>
                     <li><Link to="/reports">Отчеты</Link></li>
                     <li><Link to="/help">Помощь</Link></li>
                  </ul>
               </li>
            </ul>
         </nav>
      );
   }
}


function refreshPage() {
   window.location.reload();
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
         <Router>
               <Nav />
               <div className="content">
                  <Switch>
                     <Route exact path="/" render={() => <Main w_Height={this.state.W_Height} w_Width={this.state.W_Width} />} />
                     <Route exact path="/reports" render={() => <Reports w_Height={this.state.W_Height} w_Width={this.state.W_Width} />} />

                     <Route exact path="/settings" component={Settings} />
                     <Route exact path="/help" component={Help} />



                     <Route exact path="/Main_Save1" render={() => <Main_Save1 />} />
                     <Route exact path="/Main_Save2" render={() => <Main_Save2 />} />
                     <Route exact path="/Table_Save1" render={() => <Table_Save1 />} />
                     <Route exact path="/Table_Save2" render={() => <Table_Save2 />} />
                     <Route exact path="/Table_Save3" render={() => <Table_Save3 />} />
                     <Route exact path="/Table_Save4" render={() => <Table_Save4 />} />

                     <Route exact path="/Table_Save7" render={() => <Table_Save7 />} />

                     <Route exact path="/Date_Save5" render={() => <Date_Save5 />} />
                     <Route exact path="/Date_Save6" render={() => <Date_Save6 />} />


                     <Route exact path="/Main_Save3" render={() => <Main_Save3 w_Height={this.state.W_Height} w_Width={this.state.W_Width} />} />
                     

                     <Route exact component={NotFound} />
                  </Switch>

               </div>
            </Router>

            );
         }
      }
      export default App;
      
      
      
      /*
      
children={() => <h2>Help</h2>} />
            
<Route path="/" exact render={() => <Main w_Height={this.state.W_Height} w_Width={this.state.W_Width} />} />
            <Route path="/reports/" exact render={() => <Reports />} />
            <Route path="/settings/" exact component={Settings} />
            <Route path="/help/" exact component={Help} />
            <Route component={NotFound} />

            */