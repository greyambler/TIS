import React, { Component, PropTypes } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Stage, Layer, Rect, Text, Circle, Shape, Image, Ellipse, Line } from 'react-konva';

import MainWindow from './MainWindow.jsx';

import Chart_Table_DRP from './save/Chart_Table_DRP.jsx';
import MainTable_Save2 from './save/MainTable_Save2.jsx';
import MainWindow_Save1 from './save/MainWindow_Save1.jsx';
import MainWindow_Save8 from './save/MainWindow_Save8.jsx';

import Main_Test_Tree from './save/Main_Test_Tree.jsx';

import Main_Test_ModalWind from './save/Main_Test_ModalWind.jsx';

import AZS_Image from './chart/controls/AZS_Image.jsx';

import moment from 'moment';
import 'moment/locale/ru';

import First_Chart from './chart/First_Chart.jsx';
import Second_Chart from './chart/Second_Chart.jsx';
import Third_Chart from './chart/Third_Chart.jsx';
import Fourth_Chart from './chart/Fourth_Chart.jsx';
import Test_Chart from './chart/Test_Chart.jsx';

import Settings_Tabl from './chart/Settings_Tabl.jsx';


import { _startPast_Quarter, _endPast_Quarter, Rss, RssIncident, Rss_Settings } from './core/core_Function.jsx';

const _Debuge = true;

/*// Правильно :)
   this.setState((prevState, props) => ({
      temperature: prevState.temperature + props.delta
   }));
*/


class Main extends Component {
   render() {
      /*
      if (_Debuge) {
         return (
            <Main_Test_ModalWind w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
         );
      } else*/
      {
         return (
            <MainWindow Rss={Rss} RssIncident={RssIncident}
               w_Height={this.props.w_Height} w_Width={this.props.w_Width}

               S_Date_Head={this.props.S_Date_Head} E_Date_Head={this.props.E_Date_Head}

               S_Date_Test={this.props.S_Date_Test} E_Date_Test={this.props.E_Date_Test}

               S_Date={this.props.S_Date} E_Date={this.props.E_Date}
               S_Date_191={this.props.S_Date_191} E_Date_191={this.props.E_Date_191}

               S_Date_122={this.props.S_Date_122} E_Date_122={this.props.E_Date_122}

               S_Date_33={this.props.S_Date_33} E_Date_33={this.props.E_Date_33}

               S_Date_211={this.props.S_Date_211} E_Date_211={this.props.E_Date_211}

               S_Date_2={this.props.S_Date_2} E_Date_2={this.props.E_Date_2}
               S_Date_3={this.props.S_Date_3} E_Date_3={this.props.E_Date_3}
               S_Date_4={this.props.S_Date_4} E_Date_4={this.props.E_Date_4}

               updateData={this.props.updateData}
            />
         );
      }
   }
}
class Help extends Component {
   render() {
      return <center><h2>Помощь</h2></center>;
   }
}
class Settings extends Component {
   render() {
      /*return <center><h2>Настройки</h2></center>;*/
      return (
         <Settings_Tabl Rss_Settings={Rss_Settings}
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
         />
      );
   }
}
class ChFirst extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <First_Chart Rss={Rss} RssIncident={RssIncident}
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
         />
      );
   }
}
class ChFirst_191 extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <First_Chart Rss={Rss} RssIncident={RssIncident}
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
            NeedCode={'191'}
         />
      );
   }
}
class ChFirst_122 extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <First_Chart Rss={Rss} RssIncident={RssIncident}
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
            NeedCode={'122'}
         />
      );
   }
}
class ChFirst_33 extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <First_Chart Rss={Rss} RssIncident={RssIncident}
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
            NeedCode={'33'}
         />
      );
   }
}
class ChFirst_211 extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <First_Chart Rss={Rss} RssIncident={RssIncident}
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
            NeedCode={'211'}
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
         <Second_Chart Rss={Rss} RssIncident={RssIncident}
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
            NeedCode={'211'}
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
class ChTest extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <Test_Chart Rss={Rss} RssIncident={RssIncident}
            w_Height={this.props.w_Height} w_Width={this.props.w_Width}
            IsTable={true}
            dateStart={this.props.S_Date} dateStop={this.props.E_Date}
            updateData={this.props.updateData}
         />
      );
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
class Main_Save3 extends Component {
   render() {
      return (
         <MainWindow_Save8 w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
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
class Test_Tree extends Component {
   render() {
      return (
         <Main_Test_Tree w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
      );
   }
}

class ModalW_Test extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <Main_Test_ModalWind w_Height={this.props.w_Height} w_Width={this.props.w_Width} />
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
                     <table>
                        <tbody>
                           <tr>
                              <td id='td_0'>
                                 <div className="header_Inner">
                                    <Link to="/">
                                       <div className='headermenu'>Меню</div>
                                    </Link>
                                 </div>
                              </td>
                              <td id='td_1' className='btn-buy'>
                                 <Link to="/ChFirst_122" >
                                    <Stage width='156' height='35' x='0' y='0'>
                                       <Layer key='1' background='red'>
                                          <Shape
                                             sceneFunc={(context, shape) => {
                                                context.beginPath();
                                                context.moveTo(0, 0);
                                                context.lineTo(135, 0);
                                                context.lineTo(152, 16);
                                                context.lineTo(135, 32);
                                                context.lineTo(0, 32);
                                                context.lineTo(16, 16);
                                                context.closePath();
                                                // (!) Konva specific method, it is very important
                                                context.fillStrokeShape(shape);
                                             }}
                                             fill='rgb(32, 51, 70)'
                                             stroke="rgb(0, 21, 41)"
                                             strokeWidth={2}
                                          />
                                          <Text Text='Недоступность касс' x='25' y='12' fill='white' />
                                       </Layer>
                                    </Stage>
                                 </Link>
                              </td>
                              <td id='td_2' className='btn-buy'>
                                 <Link to="/ChFirst_211" >
                                    <Stage width='184' height='35' x='0' y='0'>
                                       <Layer key='1' background='red'>
                                          <Shape
                                             sceneFunc={(context, shape) => {
                                                context.beginPath();
                                                context.moveTo(0, 0);
                                                context.lineTo(165, 0);
                                                context.lineTo(182, 16);
                                                context.lineTo(165, 32);
                                                context.lineTo(0, 32);
                                                context.lineTo(16, 16);
                                                context.closePath();
                                                // (!) Konva specific method, it is very important
                                                context.fillStrokeShape(shape);
                                             }}
                                             fill='rgb(32, 51, 70)'
                                             stroke="rgb(0, 21, 41)"
                                             strokeWidth={2}
                                          />
                                          <Text Text='Недоступность периферии' x='20' y='12' fill='white' />
                                       </Layer>
                                    </Stage>
                                 </Link>
                              </td>
                              <td id='td_3' className='btn-buy'>
                                 <Link to="/ChFirst_191" >
                                    <Stage width='164' height='35' x='0' y='0'>
                                       <Layer key='1' background='red'>
                                          <Shape
                                             sceneFunc={(context, shape) => {
                                                context.beginPath();
                                                context.moveTo(0, 0);
                                                context.lineTo(145, 0);
                                                context.lineTo(162, 16);
                                                context.lineTo(145, 32);
                                                context.lineTo(0, 32);
                                                context.lineTo(16, 16);
                                                context.closePath();
                                                // (!) Konva specific method, it is very important
                                                context.fillStrokeShape(shape);
                                             }}
                                             fill='rgb(32, 51, 70)'
                                             stroke="rgb(0, 21, 41)"
                                             strokeWidth={2}
                                          />
                                          <Text Text='Отклонение от нормы' x='20' y='12' fill='white' />
                                       </Layer>
                                    </Stage>
                                 </Link>
                              </td>
                              <td id='td_4' className='btn-buy'>
                                 <Link to="/ChFirst_33" >
                                    <Stage width='134' height='35' x='0' y='0'>
                                       <Layer key='1' background='red'>
                                          <Shape
                                             sceneFunc={(context, shape) => {
                                                context.beginPath();
                                                context.moveTo(0, 0);
                                                context.lineTo(115, 0);
                                                context.lineTo(132, 16);
                                                context.lineTo(115, 32);
                                                context.lineTo(0, 32);
                                                context.lineTo(16, 16);
                                                context.closePath();
                                                // (!) Konva specific method, it is very important
                                                context.fillStrokeShape(shape);
                                             }}
                                             fill='rgb(32, 51, 70)'
                                             stroke="rgb(0, 21, 41)"
                                             strokeWidth={2}
                                          />
                                          <Text Text='Аннуляции чеков' x='20' y='12' fill='white' />
                                       </Layer>
                                    </Stage>
                                 </Link>
                              </td>

                              {/* 
                            <td>
                                 <div className="header_Inner_Name">
                                    <Link to="/">
                                       <h3>Временная ИС по системным инцидентам</h3>
                                    </Link>
                                 </div>
                              </td>
                              */}
                              <td id='td_1' className='header_Inner_Name'>
                                 <Link to="/" >
                                    <Stage width='356' height='25' x='0' y='0'>
                                       <Layer key='1' background='red'>
                                          <Text Text='Временная ИС по системным инцидентам' x='25' y='12' fill='white' />
                                       </Layer>
                                    </Stage>
                                 </Link>
                              </td>
                              <td>
                                 <div className="header_Inner_Name">
                                 </div>
                              </td>

                              <td width="24" className='btn-buy'>
                                 <Link to="/settings" onClick={refreshPage}>
                                    <Stage width='22' height='22' x='0' y='0'>
                                       <Layer key='1' background='red'>
                                          <AZS_Image Image={'../images/Repeat1.png'} _W='20' _H='20' _X={0} _Y={2} />
                                       </Layer>
                                    </Stage>
                                 </Link>
                              </td>

                              <td width="24" className='btn-buy'>
                                 <Link to="/settings" >
                                    <Stage width='22' height='22' x='0' y='0'>
                                       <Layer key='1' background='red'>
                                          <AZS_Image Image={'../images/Work.png'} _W='20' _H='20' _X={0} _Y={2} />
                                       </Layer>
                                    </Stage>
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

                              <li><Link to="/ChFirst">Общая таблица инцидентов</Link></li>


                              <li><Link to="/Table_Save2" >С min Таблица</Link></li>
                              <li><Link to="/Main_Save1" >Старый дизайн</Link></li>

                              <li><Link to="/Main_Save3" >Тестовая шапка</Link></li>

                              <li><Link to="/ChTDRP2">Старый Недоступность касс</Link></li>

                              <li><Link to="/ChFirst">Общая таблица инцидентов</Link></li>
                              <li><Link to="/ChFirst_191">События 191</Link></li>
                              <li><Link to="/ChFirst_122">Недоступность касс(События 122)</Link></li>
                              <li><Link to="/ChFirst_33">События 33</Link></li>
                              <li><Link to="/ChFirst_211">События 211</Link></li>


                              <li><Link to="/ChSecond">Недоступность периферийного оборудования и ТРК</Link></li>
                              <li><Link to="/ChThird">Отклонение от нормы по транзакциям</Link></li>
                              <li><Link to="/ChFourth">Недоступность СВН</Link></li>

                              <li><Link to="/TestTree">Тест Дерево</Link></li>

                              <li><Link to="/ChTest">Тест график 33 событие</Link></li>

                              <li><Link to="/ModalW_Test">Тест Модальное Окно</Link></li>

                           </ul>
                        </li>
                     }

                     <li><Link to="/" >Главная</Link></li>
                     <li><Link to="/ChFirst_122">Недоступность касс</Link></li>
                     <li><Link to="/ChFirst_211">Недоступность периферии</Link></li>
                     <li><Link to="/ChFirst_191">Отклонение от нормы</Link></li>
                     <li><Link to="/ChFirst_33">Аннуляции чеков</Link></li>

                     <li><Link to="/settings">Настройки</Link></li>


                     <li><Link to="/help">Помощь</Link></li>
                  </ul>
               </li>
            </ul>
         </nav>

      );
   }
}

class Nav_1 extends Component {
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
                        <Link to="/">
                           <h3>Временная ИС по системным инцидентам</h3>
                        </Link>

                        {/*
                           <div >
                              <table>
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
                        */}
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

                              <li><Link to="/ChFirst">Общая таблица инцидентов</Link></li>


                              <li><Link to="/Table_Save2" >С min Таблица</Link></li>
                              <li><Link to="/Main_Save1" >Старый дизайн</Link></li>

                              <li><Link to="/Main_Save3" >Тестовая шапка</Link></li>

                              <li><Link to="/ChTDRP2">Старый Недоступность касс</Link></li>

                              <li><Link to="/ChFirst">Общая таблица инцидентов</Link></li>
                              <li><Link to="/ChFirst_191">События 191</Link></li>
                              <li><Link to="/ChFirst_122">События 122</Link></li>
                              <li><Link to="/ChFirst_33">События 33</Link></li>
                              <li><Link to="/ChFirst_211">События 211</Link></li>


                              <li><Link to="/ChSecond">Недоступность периферийного оборудования и ТРК</Link></li>
                              <li><Link to="/ChThird">Отклонение от нормы по транзакциям</Link></li>
                              <li><Link to="/ChFourth">Недоступность СВН</Link></li>

                              <li><Link to="/TestTree">Тест Дерево</Link></li>

                              <li><Link to="/ChTest">Тест график 33 событие</Link></li>

                              <li><Link to="/ModalW_Test">Тест Модальное Окно</Link></li>

                           </ul>
                        </li>
                     }

                     <li><Link to="/" >Главная</Link></li>




                     <li><Link to="/settings">Настройки</Link></li>


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
export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: window.innerWidth,
         W_Height: window.innerHeight,

         S_Date_Head: _startPast_Quarter,//moment('2019-02-17'),        // .add(-3, 'month'),
         E_Date_Head: _endPast_Quarter,//moment('2019-02-17'),        // .add(-3, 'month').add(3, 'day'),

         // S_Date: moment().add(-3, 'month'),
         // E_Date: moment(),

         S_Date_First: moment('2019-03-1'),       // .add(-3, 'month'),
         E_Date_First: moment('2019-04-1'),

         S_Date_First_191: moment('2019-01-1'),//_startPast_Quarter,//moment().add(-30, 'day'),       // _startPast_Quarter,//.add(-3, 'month'),
         E_Date_First_191: moment('2019-12-1'), //_endPast_Quarter,//

         S_Date_First_122: moment('2019-02-1'),
         E_Date_First_122: moment('2019-03-2'),

         S_Date_First_33: moment('2019-01-1'),
         E_Date_First_33: moment('2019-12-1'),

         S_Date_First_211: moment('2019-01-1'),
         E_Date_First_211: moment('2019-12-1'),

         S_Date_Test: moment('2019-02-1'),
         E_Date_Test: moment('2019-05-30'),

         S_Date_Second: moment('2019-02-2'),       //.add(-3, 'month'),
         E_Date_Second: moment('2019-05-2'),

         S_Date_Third: moment('2019-02-3'),        //.add(-3, 'month'),
         E_Date_Third: moment('2019-05-3'),

         S_Date_Fourth: moment('2019-02-4'),       //.add(-3, 'month'),
         E_Date_Fourth: moment('2019-05-4'),

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
         case 11:
            this.setState({ S_Date_First_191: startDate, E_Date_First_191: endDate });
            break;
         case 12:
            this.setState({ S_Date_First_122: startDate, E_Date_First_122: endDate });
            break;
         case 14:
            this.setState({ S_Date_First_33: startDate, E_Date_First_33: endDate });
            break;
         case 15:
            this.setState({ S_Date_First_211: startDate, E_Date_First_211: endDate });
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
         case 10:
            this.setState({ S_Date_Test: startDate, E_Date_Test: endDate });
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
                  <Route exact path="/" render={() => <Main
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}

                     S_Date_Head={this.state.S_Date_Head} E_Date_Head={this.state.E_Date_Head}

                     S_Date={this.state.S_Date_First} E_Date={this.state.E_Date_First}
                     S_Date_191={this.state.S_Date_First_191} E_Date_191={this.state.E_Date_First_191}
                     S_Date_122={this.state.S_Date_First_122} E_Date_122={this.state.E_Date_First_122}
                     S_Date_33={this.state.S_Date_First_33} E_Date_33={this.state.E_Date_First_33}
                     S_Date_211={this.state.S_Date_First_211} E_Date_211={this.state.E_Date_First_211}

                     S_Date_Test={this.state.S_Date_Test} E_Date_Test={this.state.E_Date_Test}

                     S_Date_2={this.state.S_Date_Second} E_Date_2={this.state.E_Date_Second}
                     S_Date_3={this.state.S_Date_Third} E_Date_3={this.state.E_Date_Third}
                     S_Date_4={this.state.S_Date_Fourth} E_Date_4={this.state.E_Date_Fourth}

                     updateData={this.updateData}
                  />} />
                  <Route exact path="/ChTest" render={() => <ChTest
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date={this.state.S_Date_Test} E_Date={this.state.E_Date_Test}
                     updateData={this.updateData}
                  />} />




                  <Route exact path="/ChFirst" render={() => <ChFirst
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date={this.state.S_Date_First} E_Date={this.state.E_Date_First}
                     updateData={this.updateData}
                  />} />
                  <Route exact path="/ChFirst_191" render={() => <ChFirst_191
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date={this.state.S_Date_First_191} E_Date={this.state.E_Date_First_191}
                     updateData={this.updateData}
                  />} />

                  <Route exact path="/ChFirst_122" render={() => <ChFirst_122
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date={this.state.S_Date_First_122} E_Date={this.state.E_Date_First_122}
                     updateData={this.updateData}
                  />} />

                  <Route exact path="/ChFirst_33" render={() => <ChFirst_33
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date={this.state.S_Date_First_33} E_Date={this.state.E_Date_First_33}
                     updateData={this.updateData}
                  />} />

                  <Route exact path="/ChFirst_211" render={() => <ChFirst_211
                     w_Height={this.state.W_Height} w_Width={this.state.W_Width}
                     S_Date={this.state.S_Date_First_211} E_Date={this.state.E_Date_First_211}
                     updateData={this.updateData}
                  />} />

                  <Route exact path="/settings" component={Settings} />

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

                  <Route exact path="/Table_Save2" render={() => <Table_Save2 />} />

                  <Route exact path="/Main_Save3" render={() => <Main_Save3 w_Height={this.state.W_Height} w_Width={this.state.W_Width} />} />

                  <Route exact path="/TestTree" render={() => <Test_Tree />} />

                  <Route exact path="/ModalW_Test" render={() => <ModalW_Test />} />



                  <Route exact component={NotFound} />
               </Switch>
            </div>
         </Router>
      );
   }
}
