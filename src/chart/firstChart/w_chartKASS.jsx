import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';


const _Debuge = true;

export default class w_chartKASS extends Component {
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
   ClickKass(v) {
      try {
         this.props.updateKass(v.ev.data._origin.n);
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
            width={this.state.W_Width / 2 - 50}
            height={200}
            data={data}
            scale={cols}
            onClick={ev => { this.ClickKass({ ev }) }}
         >
            <center><span>По кассам</span></center>
            <Legend position="bottom" dy={-10} />

            <Axis name="KASS_NUM" />
            <Axis name="sales"
               label={{
                  formatter: val => `${val}`
               }}
            />

            <Tooltip showTitle={false}
               crosshairs={{
                  type: "y"
               }}
            />

            <Geom type="interval"
               position="KASS_NUM*sales"
               color={"N_data"}
               adjust={[
                  {
                     type: "dodge",
                     marginRatio: 1 / 32
                  }
               ]}
            />
         </Chart>
      );
   }


}

/*


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
            width={this.state.W_Width /2 - 50}
            height={200}
            data={data}
            scale={cols}
            onClick={ev => { this.ClickKass({ ev }) }}
         >
            <center><span>По кассам</span></center>
            <Axis name="KASS_NUM" />
            <Axis name="sales" title />

            <Legend position="bottom" dy={-10} />

            <Tooltip crosshairs={{ type: "y" }}  showTitle={false}/>
            <Geom type="interval" position="KASS_NUM*sales"
               color={"KASS_NUM"}
            />
         </Chart>
      );
   }











*/