import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';

export default class w_chart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width / 2 - 25,
         //Data: this.props.DataChart,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width / 2 - 25 });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width / 2 - 25 });
      }
      /*
      if (this.props.DataChart != prevProps.DataChart) {
         this.setState({ Data: this.props.DataChart });
      }*/
   }

   render() {
      const cols = {
         N: { alias: 'Событий' },
         CASHIER_ID: { alias: 'Кассир' }
      };
      return (
         <td colSpan='2'>
            <center>
               <Chart
                  forceFit
                  width={this.state.W_Width}
                  height={200}
                  data={this.props.DataChart}
                  scale={cols}>
                  <Axis name="N" />
                  <Axis name="CASHIER_ID" />
                  <Tooltip />
                  <Geom type="interval" position="CASHIER_ID*N" color="N" />
               </Chart>
            </center>
         </td>
      );
   }
}