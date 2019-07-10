import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';


const _Debuge = true;

export default class w_chartDate extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
   }
   ClickMonth(v) {
      try {
         this.props.updateMonth(v.ev.data._origin.date);
      } catch (error) {
      }
   }
   render() {
      if (this.props.DataChart != null) {
         let data = this.props.DataChart;
         const cols = {
            month: {
               range: [0, 1]
            }
         };
         return (
            <Chart
               padding="auto"
               width={this.state.W_Width / 2 - 50}
               height={200}
               data={data}
               scale={cols}
               forceFit
               onClick={ev => { this.ClickMonth({ ev }) }}
            >
               <center><span>По месяцам</span></center>
               <Legend />
               <Axis name="month" />
               <Axis
                  name="value"
                  label={{
                     formatter: val => `${val}`
                  }}
               />
               <Tooltip
                  crosshairs={{
                     type: "y"
                  }}
               />
               <Geom
                  type="line"
                  position="month*value"
                  size={2}
                  color={"equip"}
                  shape={"smooth"}
               />
               <Geom
                  type="point"
                  position="month*value"
                  size={4}
                  shape={"circle"}
                  color={"equip"}
                  style={{
                     stroke: "#fff",
                     lineWidth: 1
                  }}
               />
            </Chart>
         );
      } else {
         return <br />
      }
   }
}