import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';
import W_choos from './w_choos.jsx';

export default class w_chartCashir extends Component {
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
   ClickCashier(v) {
      try {
         //alert(v.ev.data._origin.n);
         this.props.updateCashir(v.ev.data._origin.n);
      } catch (error) {
      }
   }
   render() {
      const data = this.props.DataChart;
      const cols = {
         sales: { alias: 'Событий' },
         CASHIER_ID: { alias: 'Кассир' }
      };
      const label = {
         textStyle: { fontSize: '11' },
      }
      return (
         <Chart
            clickable={false}
            padding="auto"
            //padding={[ 10, 30, 80, 30]}
            forceFit
            width={this.state.W_Width}
            height={200}
            data={data}
            scale={cols}
            onClick={ev => { this.ClickCashier({ ev }) }}

         //onClick={({ n_Cashir }) => this.setState({ n_Cashir: ev }, this.Radio_Check)}
         >

            <center><span>По кассирам</span></center>


            <Axis name="CASHIER_ID" label={label}/>
            <Axis name="sales" title />

            <Legend position='bottom' visible={true}
            //offsetY={-5}
            />

            <Tooltip crosshairs={{ type: "y" }} showTitle={false}/>

            <Geom type="interval"
               position="CASHIER_ID*sales"
               color={"CASHIER_ID"}
            />
         </Chart>
      );
   }
}
