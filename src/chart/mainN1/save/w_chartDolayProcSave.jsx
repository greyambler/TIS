import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';

import moment from 'moment';

//const { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet } = window.BizCharts;

const _Debuge = true;


export default class w_chartDolayProcSave extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width,
         Data: this.props.DataChart,
         c_Width: this.props.w_Width / 5,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width, c_Width: this.props.w_Width / 5 });
      }
      if (this.props.DataChart != prevProps.DataChart) {
         this.setState({ Data: this.props.DataChart });
      }
   }

   render() {

      const {
         Text
      } = Guide;

      const data = [{
         gender: 'Москва',
         Color: 'red',
         path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
         value: 14
      },
      {
         gender: 'Смоленск',
         Color: 'red',
         path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
         value: 45
      },
      {
         gender: 'Башнефть',
         Color: 'red',
         path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
         value: 65
      },
      {
         gender: 'Пенза',
         Color: 'blue',
         path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
         value: 23
      }, {
         gender: 'Ростов',
         Color: 'red',
         path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
         value: 92

      }];

      const scale = {
         value: {
            min: 0,
            max: 100
         }
      };
      //const td_Width = {
      //   width: '20%'
      //}
      //window.innerWidth

      let _H = '300';//this.state.W_Height;
      //let _W = this.state.c_Width;

      //let _Hg = '100';//this.state.W_Height;
      //let _Wg = '50';//this.state.W_Width;
      return (
         <table>
            <tbody>
               <tr>
                  <td width={this.props.w_Width} height='20px'>

                     <Chart
                        width={this.state.W_Width / 5}
                        height={_H}
                        data={data}
                        scale={scale}
                        forceFit
                     >
                        <Tooltip />
                        <Geom
                           type="interval"
                           position="gender*value"
                           color="gender"
                           shape="liquid-fill-gauge"
                           vertical-align="bottom"
                           style={{
                              lineWidth: 10,
                              opacity: 0.75,
                           }} />
                        <Guide>

                           {data.map(row => <><Text
                              content={`${row.value}%`}
                              top position={{
                                 gender: row.gender,
                                 value: 50,
                              }}
                              style={{
                                 opacity: 0.95,
                                 fontSize: 25,
                                 textAlign: 'center',
                              }} />

                              <Text
                                 content={`${row.gender}`}
                                 top position={{
                                    gender: row.gender,
                                    value: 25,
                                 }}
                                 style={{
                                    opacity: 0.95,
                                    fontSize: 17,
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
   }
}
