import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';

import moment from 'moment';


const _Debuge = true;

export default class w_chartDolaySave extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width,
         Data: this.props.DataChart,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
      if (this.props.DataChart != prevProps.DataChart) {
         this.setState({ Data: this.props.DataChart });
      }
   }

   render() {
      const data = [
         { region: 'Москва', incident: 14 },
         { region: 'Смоленск', incident: 15 },
         { region: 'Башнефть', incident: 11 },
         { region: 'Пенза', incident: 10 },
         { region: 'Ростов', incident: 17 }
      ];
      /*
            const cols = {
               sold: { alias: 'Событий' },
               genre: { alias: 'Второй2' }
            };
            //{this.state.W_Width}  className='C_Chart'
            const data2 = [
               {
                  year: "2001",
                  population: 41.8
               },
               {
                  year: "2002",
                  population: 38
               },
               {
                  year: "2003",
                  population: 33.7
               },
               {
                  year: "2004",
                  population: 30.7
               },
               {
                  year: "2005",
                  population: 25.8
               },
               {
                  year: "2006",
                  population: 31.7
               },
               {
                  year: "2007",
                  population: 33
               },
               {
                  year: "2008",
                  population: 46
               },
               {
                  year: "2009",
                  population: 38.3
               },
               {
                  year: "2010",
                  population: 28
               },
               {
                  year: "2011",
                  population: 42.5
               },
               {
                  year: "2012",
                  population: 30.3
               }
            ];
            */
      const cols = {
         incident: {
            min: 0
         }
      };
      const td_Width = {
         width: '50%'
      }
      let _H = 500;//window.innerHeight;
      let _H_px = _H - 100;
      return (
         <>
            <table>
               <tbody>
                  <tr>
                     <td style={td_Width}>

                        <Chart
                           height={_H}
                           width={this.state.W_Width}
                           data={data}
                           scale={cols}
                           padding={[40, 40, 130, 40]}
                           forceFit
                        >
                           <Coord type="polar" />
                           <Axis
                              name="incident"
                              label={null}
                              tickLine={null}
                              line={{
                                 stroke: "#E9E9E9",
                                 lineDash: [3, 3]
                              }}
                           />
                           <Axis
                              name="region"
                              grid={{
                                 align: "center"
                              }}
                              tickLine={null}
                              label={{
                                 Offset: 10,
                                 textStyle: {
                                    textAlign: "center"
                                 }
                              }}
                           />
                           <Legend name="coregionuntry" itemWidth={50} />
                           <Tooltip />
                           <Geom
                              type="interval"
                              position="region*incident"
                              color="region"
                              style={{
                                 lineWidth: 1,
                                 stroke: "#fff"
                              }}
                           >
                              <Label
                                 content="incident"
                                 offset={-15}
                                 textStyle={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontSize: 11
                                 }}
                              />
                           </Geom>
                        </Chart>
                     </td>
                     <td style={td_Width}>

                     </td>
                  </tr>
                  <tr>
                     <td >

                        <Chart
                           height={_H}
                           width={this.state.W_Width}
                           data={data}
                           padding="auto"
                           forceFit
                        >
                           <Coord type="polar" />
                           <Tooltip />

                           <Legend
                              position="right"
                              offsetY={_H / -2}
                              offsetX={0}
                           />

                           <Geom
                              type="interval"
                              color="region"
                              position="region*incident"
                              style={{
                                 lineWidth: 1,
                                 stroke: "#fff"
                              }}
                           />
                        </Chart>
                     </td>
                     <td >
                     </td>
                  </tr>
               </tbody>
            </table>
            {/*
            <div>
               <Chart
                  height={_H}
                  data={data}
                  padding="auto"
                  forceFit
                  width={this.state.W_Width}
               >
                  <Coord type="polar" />
                  <Tooltip />

                  <Legend name="coregionuntry" itemWidth={50} />

                  <Legend
                     position="right"
                     offsetY={-window.innerHeight / 2 + 370}
                     offsetX={-200}
                  />


                  <Geom
                     type="interval"
                     color="region"
                     position="region*incident"
                     style={{
                        lineWidth: 1,
                        stroke: "#fff"
                     }}
                  />
               </Chart>
            </div>
            <div>
               <Chart
                  height={_H}
                  data={data}
                  scale={cols}
                  padding={[40, 40, 130, 40]}
                  forceFit
               >
                  <Coord type="polar" />
                  <Axis
                     name="incident"
                     label={null}
                     tickLine={null}
                     line={{
                        stroke: "#E9E9E9",
                        lineDash: [3, 3]
                     }}
                  />
                  <Axis
                     name="region"
                     grid={{
                        align: "center"
                     }}
                     tickLine={null}
                     label={{
                        Offset: 10,
                        textStyle: {
                           textAlign: "center" // 设置坐标轴 label 的文本对齐方向
                        }
                     }}
                  />
                  <Legend name="coregionuntry" itemWidth={50} />
                  <Tooltip />
                  <Geom
                     type="interval"
                     position="region*incident"
                     color="region"
                     style={{
                        lineWidth: 1,
                        stroke: "#fff"
                     }}
                  >
                     <Label
                        content="incident"
                        offset={-15}
                        textStyle={{
                           textAlign: "center",
                           fontWeight: "bold",
                           fontSize: 11
                        }}
                     />
                  </Geom>
               </Chart>
            </div>
        */} </>
      );
      /*
        return (
         <div>
           <Chart
             height={_H}
             data={data}
             scale={cols}
             padding={[40, 40, 130, 40]}
             forceFit
           >
             <Coord type="polar" />
             <Axis
               name="incident"
               label={null}
               tickLine={null}
               line={{
                 stroke: "#E9E9E9",
                 lineDash: [3, 3]
               }}
             />
             <Axis
               name="region"
               grid={{
                 align: "center"
               }}
               tickLine={null}
               label={{
                 Offset: 10,
                 textStyle: {
                   textAlign: "center" // 设置坐标轴 label 的文本对齐方向
                 }
               }}
             />
             <Legend name="coregionuntry" itemWidth={50} />
             <Tooltip />
             <Geom
               type="interval"
               position="region*incident"
               color="region"
               style={{
                 lineWidth: 1,
                 stroke: "#fff"
               }}
             >
               <Label
                 content="incident"
                 offset={-15}
                 textStyle={{
                   textAlign: "center",
                   fontWeight: "bold",
                   fontSize: 11
                 }}
               />
             </Geom>
           </Chart>
         </div>
       );
       */
   }
}