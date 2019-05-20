import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MainWindow from './MainWindow.jsx'
import MainTable_DRP from './MainTable_DRP.jsx'
import MainTable from './MainTable.jsx'
import Chart_Table_DRP from './Chart_Table_DRP.jsx'


import MainWindow_Save1 from './save/MainWindow_Save1.jsx'
import MainWindow_Save2 from './save/MainWindow_Save2.jsx'
import MainWindow_Save8 from './save/MainWindow_Save8.jsx'

import MainTable_Save1 from './save/MainTable_Save1.jsx'
import MainTable_Save2 from './save/MainTable_Save2.jsx'
import MainTable_Save3 from './save/MainTable_Save3.jsx'
import MainTable_Save4 from './save/MainTable_Save4.jsx'

import DateSave5 from './save/DateSave5.jsx'
import DateSave6 from './save/DateSave6.jsx'
import MainTable_Save7 from './save/MainTable_Save7.jsx'

import { dateStart, dateStop } from './core/core_Function.jsx';



import { presets } from './core/core_Function.jsx';

//import Header from './core/Header';

import moment from 'moment';

import First_Chart from './chart/First_Chart.jsx'
import Second_Chart from './chart/Second_Chart.jsx'
import Third_Chart from './chart/Third_Chart.jsx'
import Fourth_Chart from './chart/Fourth_Chart.jsx'

const _Debuge = true;

/*// Правильно :)
   
   this.setState((prevState, props) => ({
      temperature: prevState.temperature + props.delta
    }));
   */




const Rss = "http://172.23.16.18:11000/msg";
const RssIncident = "http://172.23.16.18:11000/incident";

//"http://172.23.16.18:11000/msg";

//"http://172.23.16.18:11000/incident";

//"http://172.23.16.125:11000/msg?from=DateTime&to=DateTime";
//http://172.23.16.125:11000/msg?from=2019-02-17T23:01:22Z&to=2019-02-018T18:00:36Z

//"get_01.json";
//"http://172.23.16.125:8000/dpfacade-1.0-SNAPSHOT/webresources/ru.expertek.dp.dpfacade.dvc/";



class Main extends Component {
   render() {
      /*
      if (_Debuge) {
         return (
            <First_Chart RssIncident={RssIncident}
               w_Height={this.props.w_Height} w_Width={this.props.w_Width}
               IsTable={true}
               dateStart={this.props.S_Date} dateStop={this.props.E_Date}
               updateData={this.props.updateData}
            />
         );
      } else*/
       {
         return (
            <MainWindow Rss={Rss} RssIncident={RssIncident}
               w_Height={this.props.w_Height} w_Width={this.props.w_Width}
               S_Date_Head={this.props.S_Date_Head} E_Date_Head={this.props.E_Date_Head}
               S_Date={this.props.S_Date} E_Date={this.props.E_Date}
               updateData={this.props.updateData}
            />
         );
      }
   }
}
class Reports extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <MainTable_DRP w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
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

class ChFirst extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <First_Chart Rss={Rss}  RssIncident={RssIncident}
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
         />
      );
   }
}
class ChSecond extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <Second_Chart
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
         />
      );
   }
}
class ChThird extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <Third_Chart
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
         />
      );
   }
}
class ChFourth extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <Fourth_Chart
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
         />
      );
   }
}
class Ch_TDRP2 extends Component {
   render() {
      return (
         <Chart_Table_DRP w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
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
         <DateSave5 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}
class Date_Save6 extends Component {
   render() {
      return (
         <DateSave6 presets={presets} w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
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
class Reports_OLD extends Component {
   render() {
      return (
         <MainTable w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
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

                              <li><Link to="/Oldreports">Отчеты старый</Link></li>

                              <li><Link to="/ChTDRP2">Недоступность касс 2</Link></li>

                              <li><Link to="/reports">Отчеты</Link></li>

                           </ul>
                        </li>
                     }

                     <li><Link to="/" >Главная</Link></li>
                     <li><Link to="/settings">Настройки</Link></li>

                     <li><Link to="/ChFirst">Недоступность касс</Link></li>
                     <li><Link to="/ChSecond">Недоступность оборудования</Link></li>
                     <li><Link to="/ChThird">Отклонение от нормы по транзакциям</Link></li>
                     <li><Link to="/ChFourth">Недоступность СВН</Link></li>

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
function ShowError() {
   alert("\nОшибка.\nСервер не ответил.");
}

class App extends Component {
   constructor() {
      super();
      this.state = {
         W_Width: window.innerWidth,
         W_Height: window.innerHeight,

         S_Date_Head: moment().add(-3, 'month'),
         E_Date_Head: moment().add(-3, 'month').add(3, 'day'),


         //        S_Date: moment().add(-3, 'month'),
         //        E_Date: moment(),


         S_Date_First: moment().add(-5, 'month'),
         E_Date_First: moment(),

         S_Date_Second: moment().add(-3, 'month'),
         E_Date_Second: moment(),

         S_Date_Third: moment().add(-3, 'month'),
         E_Date_Third: moment(),

         S_Date_Fourth: moment().add(-3, 'month'),
         E_Date_Fourth: moment(),


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
   updateData = ({ startDate, endDate, NumberChart }) => {
      switch (NumberChart) {
         case 0:
            this.setState({ S_Date_Head: startDate, E_Date_Head: endDate });
            break;
         case 1:
            this.setState({ S_Date_First: startDate, E_Date_First: endDate });
            break;
         case 2:
            this.setState({ S_Date_Second: startDate, E_Date_Second: endDate });
            break;
         case 3:
            this.setState({ S_Date_Third: startDate, E_Date_Third: endDate });
            break;
         case 4:
            this.setState({ S_Date_Fourth: startDate, E_Date_Fourth: endDate });
            break;

         default:
            break;
      }

   }
   render() {
      return (
         <Router>
            <Nav />
            <div className="content">
               <Switch>
                  <Route exact path="/" render={() => <Main w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date_Head={this.state.S_Date_Head} E_Date_Head={this.state.E_Date_Head}
                     S_Date={this.state.S_Date_First} E_Date={this.state.E_Date_First}
                     updateData={this.updateData}
                  />} />
                  <Route exact path="/reports" render={() => <Reports w_Height={this.state.W_Height} w_Width={this.state.W_Width} />} />

                  <Route exact path="/settings" component={Settings} />

                  <Route exact path="/ChFirst" render={() => <ChFirst
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date={this.state.S_Date_First} E_Date={this.state.E_Date_First}
                     updateData={this.updateData}
                  />} />
                  <Route exact path="/ChSecond" render={() => <ChSecond
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date={this.state.S_Date_Second} E_Date={this.state.E_Date_Second}
                     updateData={this.updateData}
                  />} />
                  <Route exact path="/ChThird" render={() => <ChThird
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date={this.state.S_Date_Third} E_Date={this.state.E_Date_Third}
                     updateData={this.updateData}
                  />} />
                  <Route exact path="/ChFourth" render={() => <ChFourth
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date={this.state.S_Date_Fourth} E_Date={this.state.E_Date_Fourth}
                     updateData={this.updateData}
                  />} />

                  <Route exact path="/ChTDRP2" render={() => <Ch_TDRP2 w_Height={this.state.W_Height} w_Width={this.state.W_Width} />} />

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

                  <Route exact path="/Oldreports" render={() => <Reports_OLD w_Height={this.state.W_Height} w_Width={this.state.W_Width} />} />

                  <Route exact component={NotFound} />
               </Switch>

            </div>
         </Router>
      );
   }
}
export default App;

