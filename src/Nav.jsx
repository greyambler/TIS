import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Stage, Layer, Rect, Text, Circle, Shape, Image, Ellipse, Line } from 'react-konva';
import AZS_Image from './chart/controls/AZS_Image.jsx';


function refreshPage() {
    window.location.reload();
 }

 
const _Debuge = true;

export default class Nav extends Component {
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
                               <li><Link to="/MainWindowN1">Первый общий экран(новый)</Link></li>
 
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
 
                      <li><Link to="/" >Общий экран</Link></li>
                      <li><Link to="/Main_N" >Главная</Link></li>
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
 