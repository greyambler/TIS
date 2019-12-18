import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import moment from 'moment';
//import { ids } from 'konva/types/Node';

//const { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet } = window.BizCharts;

const _Debuge = true;


function Get_Data(data) {
   let _Data = new Array();
   let i = 1;
   if (data != null) {
      for (const item of data) {
         if (item.name != null) {
            _Data.push({
               name: (item.name != null) ? item.name : i,
               color: 'black',
               path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
               value: item.incidents_percent,
               id: item.id,
            });
            i++;
         }
      }
   }
   return _Data;
}


export default class w_chartDolay extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width,
         c_Width: this.props.w_Width / 5,
         Data: this.props.Regions_IncPer,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width, c_Width: this.props.w_Width / 5 });
      }
      if (this.props.Regions_IncPer != prevProps.Regions_IncPer) {
         this.setState({ Data: this.props.Regions_IncPer });
      }
   }
   ClickRegion(v) {
      try {
         let endDate = moment();
         let startDate = moment().subtract(364, 'day');
         let NumberChart = 364;
         this.props.updateData({ startDate, endDate, NumberChart }, this.props.history.push('/Main_N&' + v.data._origin.id));
         //this.props.history.push('/Main_N&'+ v.data._origin.id);
         //alert(v.data._origin.name + " " + v.data._origin.id);
         //window.location.href = '/Main_N' + '&' + v.data._origin.id;
      } catch (error) {
      }
   }
   render() {

      let AhrefBack = '/Main_N';
      let StyleHead = {
         textAlign: "center",
         color: "black",
         fontSize: '12px',
      }

      if (this.state.Data != null) {
         const {
            Text
         } = Guide;
         const data = Get_Data(this.state.Data);
         /* 
              const data = [{
                 name: 'Москва',
                 color: 'black',
                 path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
                 value: 14
              },
              {
                 name: 'Смоленск',
                 color: '#900',
                 path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
                 value: 45
              },
              {
                 name: 'Башнефть',
                 color: '#yellow',
                 path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
                 value: 65
              },
              {
                 name: 'Пенза',
                 color: '#red',
                 path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
                 value: 23
              }, {
                 name: 'Ростов',
                 color: '#900',
                 path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
                 value: 92
        
              }];
             */

         const scale = {
            value: {
               min: 0,
               max: 100
            }
         };
         let _H = 300;

         return (
            <table>
               <tbody>
                  <tr>
                     <td width={this.props.w_Width} height='30'>

                        <Chart
                           width={this.state.W_Width / 5}
                           height={_H}
                           data={data}
                           scale={scale}
                           forceFit

                           onClick={ev => { this.ClickRegion(ev) }}
                        >
                           <Tooltip />

                           <Geom
                              type="interval"
                              position="name*value"
                              color="name"

                              shape="liquid-fill-gauge"
                              vertical-align="bottom"
                              style={{
                                 lineWidth: 10,
                                 opacity: 0.75,
                              }}
                           />

                           <Guide>
                              {data.map(row =>
                                 <>
                                    <Text
                                       content={`${row.value}%`}
                                       top position={{
                                          name: row.name,
                                          value: 50,
                                       }}
                                       style={{
                                          color: 'red',
                                          fontSize: 16,
                                          textAlign: 'center',

                                       }} />
                                    <Text
                                       content={`${row.name}`}
                                       top position={{
                                          name: row.name,
                                          value: 10,
                                       }}
                                       style={{
                                          opacity: 0.95,
                                          fontSize: 12,
                                          textAlign: "center",
                                          fontWeight: "bold",
                                       }} />
                                 </>
                              )}
                           </Guide>
                        </Chart>
                     </td>
                  </tr>
               </tbody>
            </table>
         );
      } else {
         return <br />
      }
   }
}
