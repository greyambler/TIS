import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';

export default class w_chart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width / 2 - 25,
         Data: this.props.DataChart,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width / 2 - 25 });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width / 2 - 25 });
      }
      if (this.props.DataChart != prevProps.DataChart) {
         this.setState({ Data: this.props.DataChart });
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
         <td colSpan='2' className='C_Chart'>
            <center>
               <Chart 
                  forceFit
                  width={this.state.W_Width}
                  height={200}
                  data={data}
                  scale={cols}>
                  <br/><br/><br/>
                  <Axis name="genre" />
                  <Axis name="sold" />
                  <Legend position="bottom" dy={-10} />
                  <Tooltip />
                  <Geom type="interval" position="genre*sold"
                     color={"genre"}
                  />
               </Chart>
            </center>
         </td>
      );
   }
}