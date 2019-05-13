import React, { Component, PropTypes } from 'react';
import { GetDateNow, StartDate_Big_EndDate, GetDatePlusDay } from '../core/core_Function.jsx';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

import moment from 'moment';

const _Debuge = false;


class Header_Main extends Component {
   constructor(props, context) {
      super(props, context);
      this.tick = this.tick.bind(this);
      this.state = {
         startDate: GetDateNow(),
         endDate: GetDatePlusDay(GetDateNow()),
         ch_Day: true,
         Text_ch_Day: 'За один день',
         ch1: true,
         ch2: true,
         ch3: true,
         ch4: true,
         Rss: this.props.Rss,
         Object: null,
      }
   }

   inputChangedHandler = (event) => {
      this.setState({ startDate: event.target.value }, this.tick);
   }
   inputChangedHandlerEnd = (event) => {
      if (StartDate_Big_EndDate(this.state.startDate, event.target.value)) {
         this.setState({ endDate: this.state.startDate }, this.tick)
      } else {
         this.setState({ endDate: event.target.value }, this.tick)
      }
   }
   async componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
      await this.tick();
      this.timerID = setInterval(() => this.tick(), 30000);//30 сек
   }
   async tick() {
      //?from=2019-02-17T23:01:22Z&to=2019-02-018T18:00:36Z
      var rss = this.state.Rss;
      if (this.state.ch_Day || this.state.startDate == this.state.endDate) {
         rss = rss + "?date=" + this.state.startDate;
      }
      else {
         rss = rss + "?from="
            + this.state.startDate
            + "&to="
            + this.state.endDate;
      }

      var myRequest = new Request(rss);
      this.setState({ Object: null });
      try {
         var response = await fetch(
            myRequest
            ,
            {
               method: 'GET',
               headers:
               {
                  'Accept': 'application/json',
               },
            }
         );
         if (response.ok) {
            const Jsons = await response.json();

            this.setState({ Object: Jsons });
         }
         else {
            throw Error(response.statusText);
         }
      }
      catch (error) {
         console.log(error);
      }
   }

   toggleChange = (event) => {
      switch (event.target.id) {
         case 'ch1': this.setState({ ch1: !this.state.ch1 }); break;
         case 'ch2': this.setState({ ch2: !this.state.ch2 }); break;
         case 'ch3': this.setState({ ch3: !this.state.ch3 }); break;
         case 'ch4': this.setState({ ch4: !this.state.ch4 }); break;
         case 'ch_Day':
            this.setState({ ch_Day: !this.state.ch_Day }, this.tick);
            if (this.state.ch_Day) {
               this.setState({ Text_ch_Day: 'За период' });
            }
            else {
               this.setState({ Text_ch_Day: 'За один день' });
            }
            break;

         default: break;
      }
   }

   render() {
      let W_Stage = 120;
      let H_Stage = 50;
      let H_Stage_tr = 80;
      let W_Stage_td = 10;

      let _Objects = this.state.Object;

      let numfiles = 0;
      let numincidents = 0;

      if (_Objects != null) {
         numfiles = _Objects.numfiles;
         numincidents = _Objects.numincidents;
      }

      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td className='td_t0'></td>
                     <td className='td_t'>
                        <center>
                           <div>
                              <table className='space'>
                                 <tbody>
                                    <tr><th colSpan='4'><legend >Общие показатели за период</legend></th></tr>
                                    <tr height={H_Stage_tr}>
                                       <td>
                                          <center>
                                             <Stage width={W_Stage} height={H_Stage} >
                                                <Layer>
                                                   {(numfiles == 0 || numfiles.toString().length < 7) &&

                                                      <Circle x={W_Stage / 2} y={H_Stage / 2}
                                                         radius={24} fill='white'
                                                         stroke='black' />
                                                   }
                                                   <Text width={W_Stage - 2} wrap="char" align="center"
                                                      text={numfiles}

                                                      x={0} y={H_Stage / 2.5} fontSize='12' fill='black'
                                                   />
                                                </Layer>
                                             </Stage>
                                          </center>
                                       </td>
                                       <td>
                                          <center>
                                             <Stage width={W_Stage} height={H_Stage}>
                                                <Layer>

                                                   {(numincidents == 0 || numincidents.toString().length < 7) &&

                                                      <Circle x={W_Stage / 2} y={H_Stage / 2}
                                                         radius={24} fill='white'
                                                         stroke='black' />
                                                   }

                                                   <Text width={W_Stage} wrap="char" align="center"
                                                      text={numincidents}
                                                      x={0} y={H_Stage / 2.5} fontSize='12' fill='blue' />
                                                </Layer>
                                             </Stage>
                                          </center>
                                       </td>
                                       <td>
                                          <center>
                                             <Stage width={W_Stage} height={H_Stage + 20}>
                                                <Layer>
                                                   <Circle x={W_Stage / 2} y={H_Stage / 1.4}
                                                      radius={20} fill='white'
                                                      stroke='yellow' strokeWidth='15' />
                                                   <Text width={W_Stage} wrap="char" align="center"
                                                      text="50%" x={5} y={H_Stage / 1.7} fontSize='12' fill='red' />
                                                </Layer>
                                             </Stage>
                                          </center>
                                       </td>
                                       <td>
                                          <center>
                                             <Stage width={W_Stage} height={H_Stage}>
                                                <Layer>
                                                   <Circle x={W_Stage / 2} y={H_Stage / 2}
                                                      radius={24} fill='yellow' stroke='black' />

                                                   <Text width={W_Stage} wrap="char" align="center"
                                                      text="24" x={0} y={H_Stage / 2.5}
                                                      fontSize='12' fill='black' />
                                                </Layer>
                                             </Stage>
                                          </center>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className='td_Name'><center>Логов загружено</center></td>
                                       <td className='td_Name'><center>События идентифицированы</center></td>
                                       <td className='td_Name'><center>Расчеты КП выполнены</center></td>
                                       <td className='td_Name'><center>Системные инциденты</center></td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </center>
                     </td>
                     <td className='td_t2'>
                        <div>
                           <table>
                              <tbody>

                                 <tr>
                                    <td className='td_Left'>
                                       <input type='checkBox' value='sda' id="ch_Day"
                                          checked={this.state.ch_Day}
                                          onChange={this.toggleChange} />
                                       <a>{this.state.Text_ch_Day}</a>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className='td_Left'>
                                       <input type='date' className='date_h' value={this.state.startDate}
                                          onChange={(event) => this.inputChangedHandler(event)} />
                                    </td>
                                 </tr>
                                 {!this.state.ch_Day &&
                                    <tr>
                                       <td className='td_Left'>
                                          <input type='date' className='date_h' value={this.state.endDate}
                                             onChange={(event) => this.inputChangedHandlerEnd(event)} />
                                       </td>
                                    </tr>
                                 }
                                 <tr>
                                    <td className='td_Left'>
                                       <input type='checkBox' value='sda' id="ch1"
                                          checked={this.state.ch1}
                                          onChange={this.toggleChange} />
                                       <a>1 Сбой кассы</a>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className='td_Left'>
                                       <input type='checkBox' value='sda' id="ch2"
                                          checked={this.state.ch2}
                                          onChange={this.toggleChange} />
                                       <a>2 Сбой ТРК</a>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className='td_Left'>
                                       <input type='checkBox' value='sda' id="ch3"
                                          checked={this.state.ch3}
                                          onChange={this.toggleChange} />
                                       <a>3 Сбой периферия</a>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className='td_Left'>
                                       <input type='checkBox' value='sda' id="ch4"
                                          checked={this.state.ch4}
                                          onChange={this.toggleChange} />
                                       <a>4 Сбой СВН</a>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>

         </div>
      );
   }
}

export default Header_Main;
/*

<Circle x={W_Stage / 2} y={H_Stage / 2}
                                                      radius={24} fill='white'
                                                      stroke='black' />

<tr>
                                    <td className='td_Left'><center>Период выборки</center></td>
                                 </tr>

*/