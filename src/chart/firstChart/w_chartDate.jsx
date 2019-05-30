import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';


const _Debuge = true;

export default class w_chartDate extends Component {
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
   ClickMonth(v) {
      try {
         this.props.updateMonth(v.ev.data._origin.date_month);
      } catch (error) {
      }
   }
   render() {

      const data = this.props.DataChart;
      let VertMax = 1;
      for (const iterator of this.props.DataChart) {
         if (VertMax < iterator.sales) {
            VertMax = iterator.sales;
         }
      }
      const cols = {
         sales: {
            alias: 'Событий',
            tickInterval: Math.ceil(VertMax / 4)
         }
      };
      return (
         <Chart
            padding="auto"
            forceFit
            width={this.state.W_Width}
            height={200}
            data={data}
            scale={cols}
            onClick={ev => { this.ClickMonth({ ev }) }}
         >
         <center><span>По месяцам</span></center>
            <Axis name="date_month"/>
            <Axis name="sales" title/>
            <Legend position="bottom" dy={-10} />
            <Tooltip
               crosshairs={{
                  type: "y"
               }}
            />
            <Geom type="interval" position="date*sales"
               color={"date"}
            />
         </Chart>
      );
   }
}