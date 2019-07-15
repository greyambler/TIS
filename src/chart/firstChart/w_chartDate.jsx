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

      const data = this.props.DataChart;
      switch (this.props.NeedCode) {
         case "211":
            {
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
                        <center><span>{this.props.header}</span></center>
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
         default: {
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
                  alias: 'Порог',
                  min: 0,
                  max: Math.ceil(VertMax),
                  x: 2
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
                  onClick={ev => { this.ClickMonth({ ev }) }}
               >
                  <center><span>По месяцам</span></center>
                  <Axis name="sales" title />
                  <Axis name="date" />
                  <Axis name="norm" />

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
   }
}
/*


            <Geom type="interval"
               position="date*norm"
               size={(this.state.W_Width / data.length - 80) }
               color={'pink'}
               border={'2px solid black'}
            />


            <Geom type="line"
               position="date*norm"
               size={4}
               color={'red'}
            />


            <Geom type="interval"
               position="date*norm"
               size={(this.state.W_Width / 2 - 50) / data.length}
               color={'pink'}
               border={ '2px solid black'}
            />


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