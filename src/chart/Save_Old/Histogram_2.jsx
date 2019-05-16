import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';

import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';


class Histogram_2 extends Component {
   constructor(props) {
      super(props);

      this.state = {
         W_Width: this.props.w_Width / 2 - 25,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width / 2 - 25 });
   }
   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width / 2 - 25 });
      }
   }

   render() {
      const data = [
         { genre: 'Москва', sold: 4, income: 2300 },
         { genre: 'Смоленск', sold: 5, income: 667 },
         { genre: 'Башнефть', sold: 11, income: 982 },
         { genre: 'Пенза', sold: 14, income: 5271 },
         { genre: 'Ростов', sold: 7, income: 3710 }
      ];

      const cols = {
         sold: { alias: 'Событий' },
         genre: { alias: 'Второй2' }
      };

      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <th>
                        <center>
                           Недоступность СВН (количество событий)
                     </center>
                     </th>

                  </tr>
                  <tr>
                     <th>
                        <center>
                           ТОП-5 ПНПО
                     </center>
                     </th>
                  </tr>
                  <tr>
                     <td className="td_Date">
                        <center>{this.props.dateStart.format('DD/MM/YYYY')}  -  {this.props.dateStop.format('DD/MM/YYYY')}</center>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <center>
                           <Chart
                              forceFit
                              width={this.state.W_Width}
                              height={200}
                              data={data}
                              scale={cols}>
                              <Axis name="genre" />
                              <Axis name="sold" />
                              <Legend position="bottom" dy={-10} />
                              <Tooltip />
                              <Geom type="interval" position="genre*sold" />
                           </Chart>
                        </center>
                     </td>
                  </tr>

               </tbody>
            </table>
         </div>
      );
   }
}
export default Histogram_2;

/*
width={this.state.W_Width}


*/