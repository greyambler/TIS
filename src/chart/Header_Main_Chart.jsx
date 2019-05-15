import React, { Component, PropTypes } from 'react';
import {isSameDay, presets, GetDateNow, StartDate_Big_EndDate, D1_D1_Eq_moment,GetDateYMD_moment } from '../core/core_Function.jsx';

import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

import {
   G2,
   Chart,
   Geom,
   Axis,
   Tooltip,
   Coord,
   Label,
   Legend,
   View,
   Guide,
   Shape,
   Facet,
   Util
} from "bizcharts";
import DataSet from "@antv/data-set";

import moment from 'moment';
import 'moment/locale/ru'


import { DateRangePicker } from 'react-dates';


const _Debuge = true;

class Header_Main_Chart extends Component {
   constructor(props, context) {
      super(props, context);
      this.on_DatesChange = this.on_DatesChange.bind(this);
      this.renderDatePresets = this.renderDatePresets.bind(this);
      this.tick = this.tick.bind(this);
      //moment.locale('ru');
      this.state = {
         startDate: this.props.S_Date_Head,
         endDate: this.props.E_Date_Head,

         ch1: true,
         ch2: true,
         ch3: true,
         ch4: true,
         Rss: this.props.Rss,
         Object: null,

         isExistError:false,
      }
      
   }
   inputChangedHandler = (event) => {
      this.setState({ startDate: event.target.value })
   }
   inputChangedHandlerEnd = (event) => {
      if (StartDate_Big_EndDate(this.state.startDate, event.target.value)) {
         this.setState({ endDate: event.target.value })
      } else {
         this.setState({ endDate: this.state.startDate })
      }

   }
   async componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
      await this.tick();
      this.timerID = setInterval(() => this.tick(), 30000);
   }
   componentDidUpdate(prevProps) {
      if (this.props.numfiles != prevProps.numfiles) {
         this.setState({ numfiles: this.props.numfiles });
      }
      if (this.props.numincidents != prevProps.numincidents) {
         this.setState({ numincidents: this.props.numincidents });
      }
   }
   async tick() {
      
      var rss = this.state.Rss;
      var S_Date = new Date(this.state.startDate);
      var E_Date = new Date(this.state.endDate);

      if(this.state.startDate != null &&  this.state.endDate != null){
      let IsOne = D1_D1_Eq_moment(this.state.startDate,this.state.endDate);

      if(IsOne)
      {
         rss = rss + "?date=" + GetDateYMD_moment(this.state.startDate);
      }
      else
      {
         rss = rss + "?from="
            + GetDateYMD_moment(this.state.startDate)
            + "&to="
            + GetDateYMD_moment(this.state.endDate);
         
      }
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
         this.state.isExistError = false;
      }
      catch (error) {
         this.state.isExistError = true;
         console.log(error);
      }
   }

   on_DatesChange({ startDate, endDate }) {
      this.setState({ startDate, endDate },this.tick);
   }

   renderDatePresets() {
      const { startDate, endDate } = this.state;
     
      return (
         <div>
            {presets.map(({ text, start, end }) => {
               let isSelected = isSameDay(start, startDate) && isSameDay(end, endDate);
               return (
                  <button
                     key={text}

                     className={!isSelected ?
                        ("btn_Date")
                        :
                        ("btn_Date_Select")}
                     type="button"
                     onClick={({ startDate, endDate }) => this.on_DatesChange({ startDate: start, endDate: end })}>
                     {text}
                  </button>
               );
            })}
         </div>
      );
   }

   
   render() {
      let W_Stage = 120;
      let H_Stage = 50;
      let H_Stage_tr = 80;
      let W_Stage_td = 10;



      const { DataView } = DataSet;
      const { Html } = Guide;
      const data = [
         {
            item: "1 Сбой кассы",
            count: 20
         },
         {
            item: "2 Сбой ТРК",
            count: 21
         },
         {
            item: "3 Сбой периферия",
            count: 17
         },
         {
            item: "4 Сбой СВН",
            count: 13
         },
      ];

      const dv = new DataView();
      dv.source(data).transform({
         type: "percent",
         field: "count",
         dimension: "item",
         as: "percent"
      });
      const cols = {
         percent: {
            formatter: val => {
               val = val * 100 + "%";
               return val;
            }
         }
      };
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
                     <td className='td_t_Left'></td>
                     <td className='td_t_Main'>

                        <div>
                           <table className='space_Head'>
                              <tbody>

                                 <tr>
                                 <td colSpan='4'>
                                    <center>
                                       <legend>
                                          Общие показатели за период


                                       <DateRangePicker
                                             startDate={this.state.startDate}
                                             startDateId="S_DRP_id"
                                             endDate={this.state.endDate}
                                             endDateId="E_DRP_id"

                                             
                                             
                                             //onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate }, this.tick)}                                             
                                             onDatesChange={({ startDate, endDate }) => this.on_DatesChange({ startDate, endDate })}




                                             focusedInput={this.state.focusedInput}
                                             onFocusChange={focusedInput => this.setState({ focusedInput })}

                                             renderCalendarInfo={this.renderDatePresets}

                                             small={true}
                                             displayFormat={'DD/MM/YYYY'}
                                             noBorder={true}
                                             isOutsideRange={() => false}
                                             minimumNights={0}
                                          />
                                          {this.state.isExistError &&
                                          <a className="T_Error">Ошибка! Сервер не ответил!</a>
                                       }
                                       </legend>
                                    </center>
                                 </td>
                                 </tr>

                                 <tr height={H_Stage_tr} className="tr_Date">
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
                                       <div className='T_Chart'>
                                       
                                          <Chart
                                             height={110}

                                             data={dv}
                                             scale={cols}
                                             padding={[1, 420, 0, 0]}
                                             forceFit={false}
                                          >
                                             <Coord type={"theta"} radius={0.75} innerRadius={0.2} />
                                             <Axis name="percent" />
                                             <Legend
                                                position="right"
                                                offsetY={0}
                                                offsetX={10}
                                             />
                                             <Tooltip
                                                showTitle={false}
                                                itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                                             />
                                             <Guide>
                                                <Html 
                                                   position={["50%", "50%"]}
                                                   html="<div className='T_Chart' style=&quot;color:#000; z-index='4';font-size:1.2em;text-align: center;font-family: 'Open Sans', sans-serif;width: 10em;&quot;>
                                                   24
                                                   </div>"
                                                   alignX="middle"
                                                   alignY="middle"
                                                />
                                             </Guide>
                                             <Geom
                                                type="intervalStack"
                                                position="percent"
                                                color="item"
                                                tooltip={[
                                                   "item*percent",
                                                   (item, percent) => {
                                                      percent = percent * 100 + "%";
                                                      return {
                                                         name: item,
                                                         value: percent
                                                      };
                                                   }
                                                ]}
                                                style={{
                                                   lineWidth: 1,
                                                   stroke: "#fff"
                                                }}
                                             >

                                             </Geom>
                                          </Chart>
                                          
                                       </div>
                                       </center>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className='td_Name'><center>Логов загружено</center></td>
                                    <td className='td_Name'><center>События идентифицированы</center></td>
                                    <td className='td_Name'><center>Расчеты КП выполнены</center></td>
                                    <td className='td_Name' ><center>Системные инциденты</center></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>

                     </td>
                     <td className='td_t_Right'></td>
                  </tr>
               </tbody>
            </table>
<hr/>
         </div>
      );
   }
}

export default Header_Main_Chart;
