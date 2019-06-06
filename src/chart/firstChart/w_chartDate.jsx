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
      this.setState({ W_Width: this.props.w_Width  });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
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
         if (VertMax < iterator.norm) {
            VertMax = iterator.norm;
         }
      }
      const cols = {
         sales: {
            alias: 'Событий',
            min: 0,
            //tickInterval: Math.ceil(VertMax / 4)
            max: Math.ceil(VertMax)
         },
         norm: {
            min: 0,
            max: Math.ceil(VertMax)
         }
      };
      return (
         <Chart
            padding="auto"
            forceFit
            width={this.state.W_Width /2 - 50}
            height={200}
            data={data}
            scale={cols}
            onClick={ev => { this.ClickMonth({ ev }) }}
         >
         <center><span>По месяцам</span></center>
            <Axis name="date_month"/>
            <Axis name="sales" title/>
            <Axis name="norm" title/>
            <Legend position="bottom" dy={-10} />
            <Tooltip showTitle={false}
               crosshairs={{
                  type: "y"
               }}
            />
            <Geom type="interval" 
               position="date*sales"
               color={"date"}
               />
              

            <Geom type="line"
                  position="date*norm"
                  size={4}
                  color={'red'}
               />
               <Geom
                  type="point"
                  position="date*norm"
                  size={2}
                  shape={"circle"}
                  color={'red'}
                  style={{
                     stroke: "#fff",
                     lineWidth: 3
                  }}
               />
         </Chart>
      );
   }
}
/*

 <Geom
                  type="point"
                  position="date*sales"
                  size={2}
                  shape={"circle"}
                  color={'date'}
                  style={{
                     stroke: "#fff",
                     lineWidth: 3
                  }}
               />


*/