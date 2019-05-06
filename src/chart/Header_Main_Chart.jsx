import React, { Component, PropTypes } from 'react';
import { GetDateNow, StartDate_Big_EndDate } from '../core/core_Function.jsx';
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


//import 'moment/locale/ru'
//import 'react-dates/initialize';
//import 'react-dates/lib/css/_datepicker.css';
//export const pureComponentAvailable = true;

import { DateRangePicker } from 'react-dates';


const _Debuge = true;

class Header_Main_Chart extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         startDate: moment(),
         endDate: moment(),
         ch_Day: true,
         Text_ch_Day: 'За один день',
         ch1: true,
         ch2: true,
         ch3: true,
         ch4: true,
         numfiles: this.props.numfiles,
         numincidents: this.props.numincidents,
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
   }

   componentDidUpdate(prevProps) {
      if (this.props.numfiles != prevProps.numfiles) {
         this.setState({ numfiles: this.props.numfiles });
      }
      if (this.props.numincidents != prevProps.numincidents) {
         this.setState({ numincidents: this.props.numincidents });
      }
   }

   toggleChange = (event) => {
      switch (event.target.id) {
         case 'ch1': this.setState({ ch1: !this.state.ch1 }); break;
         case 'ch2': this.setState({ ch2: !this.state.ch2 }); break;
         case 'ch3': this.setState({ ch3: !this.state.ch3 }); break;
         case 'ch4': this.setState({ ch4: !this.state.ch4 }); break;
         case 'ch_Day':
            this.setState({ ch_Day: !this.state.ch_Day });
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

                                 <tr><td colSpan='5'>
                                    <center>
                                       <legend>
                                          Общие показатели за период


                                       <DateRangePicker
                                             z-index={4}
                                             startDate={this.state.startDate}
                                             startDateId="your_unique_start_date_id"
                                             endDate={this.state.endDate}
                                             endDateId="your_unique_end_date_id"
                                             onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                             focusedInput={this.state.focusedInput}
                                             onFocusChange={focusedInput => this.setState({ focusedInput })}

                                             small={true}
                                             displayFormat={'DD/MM/YYYY'}
                                             noBorder={true}
                                             isOutsideRange={() => false}
                                             minimumNights={0}
                                          />
                                       </legend>
                                    </center>
                                 </td>
                                 </tr>


                                 <tr height={H_Stage_tr}>
                                    <td>
                                       <center>
                                          <Stage width={W_Stage} height={H_Stage} >
                                             <Layer>
                                                <Circle x={W_Stage / 2} y={H_Stage / 2}
                                                   radius={24} fill='white' stroke='black'
                                                />
                                                <Text width={W_Stage - 2} wrap="char" align="center"
                                                   text={this.state.numfiles}

                                                   x={0} y={H_Stage / 3} fontSize='20' fill='black'
                                                />
                                             </Layer>
                                          </Stage>
                                       </center>
                                    </td>
                                    <td>
                                       <center>
                                          <Stage width={W_Stage} height={H_Stage}>
                                             <Layer>
                                                <Circle x={W_Stage / 2} y={H_Stage / 2}
                                                   radius={24} fill='white'
                                                   stroke='black' />
                                                <Text width={W_Stage} wrap="char" align="center"
                                                   text={this.state.numincidents}

                                                   x={0} y={H_Stage / 3} fontSize='20' fill='blue' />
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
                                                   text="50%" x={5} y={H_Stage / 1.9} fontSize='20' fill='red' />
                                             </Layer>
                                          </Stage>
                                       </center>
                                    </td>

                                    <td>
                                    <center>
                                       <div className='T_Chart'>
                                       
                                          <Chart className='T_Chart'
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
                                                <Html z-index={4}
                                                   position={["50%", "49%"]}
                                                   html="<div style=&quot;color:#000;font-size:2em;text-align: center;font-family: 'Open Sans', sans-serif;width: 10em;&quot;>
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

         </div>
      );
   }
}

export default Header_Main_Chart;