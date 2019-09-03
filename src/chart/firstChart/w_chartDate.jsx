import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';
import { Dropdown } from 'semantic-ui-react'

const _Debuge = true;

export default class w_chartDate extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width,
         mass: [
            { key: 1, text: '77', value: 1 },
            { key: 2, text: '23', value: 2 },
            { key: 3, text: '01', value: 3 },
         ]
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
         if (this.props.NeedCode == '211') {
            this.props.updateEquip(v.ev.data._origin.DEVICE_TYPE);
         }
         else {
            this.props.updateMonth(v.ev.data._origin.date);
         }
      } catch (error) {
      }
   }
   render() {

      let data = new Array();
      if (this.props.SelectValueNormals != null && this.props.DataChart != null && this.props.NeedCode == '191') {
         for (const iterator of this.props.DataChart) {
            if (iterator.sales != null) {
               let S = { date: iterator.date, norm: iterator.norm, sales: iterator.sales };
               if (this.props.SelectValueNormals != null && iterator != null) {
                  if (iterator.sales > this.props.SelectValueNormals) {
                     S.sales = S.sales - this.props.SelectValueNormals;
                  } else {
                     S.sales = 0;
                  }
                  data.push(S);
               }
            }
         }
      } else {
         data = this.props.DataChart;
      }



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
                        {/*<center><span>{this.props.header}</span></center>*/}
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
         case "33":
            {
               let VertMax = 1;
               for (const iterator of data) {
                  if (VertMax < iterator.value) {
                     VertMax = iterator.value;
                  }
                  if (VertMax < iterator.E_33) {
                     VertMax = iterator.E_33;
                  }
               }
               if (this.props.DataChart != null) {
                  let data = this.props.DataChart;
                  const cols = {
                     sales: {
                        alias: 'Событий',
                        min: 0,
                        //tickInterval: Math.ceil(VertMax / 4)
                        max: Math.ceil(VertMax)
                     },
                     E_33: {
                        alias: 'Событие 33',
                        min: 0,
                        max: Math.ceil(VertMax),
                        x: 2
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
                        {/*<center><span>{this.props.header}</span></center>*/}
                        <Legend />
                        <Axis name="month" />
                        <Axis name="value"
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
                           type="interval"
                           position="month*value"
                           color={"equip"}
                           adjust={[
                              {
                                 type: "dodge",
                                 marginRatio: 1 / 32
                              }
                           ]}
                        />


                        <Geom
                           type="line"
                           position="month*E_33"
                           size={2}
                           color={"orange"}

                        />
                        <Geom
                           type="point"
                           position="month*E_33"
                           size={4}
                           shape={"circle"}
                           color={"orange"}
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

         case "33 _save_Old":
            {
               let VertMax = 1;
               let Norm = false;
               for (const iterator of this.props.DataChart) {
                  if (VertMax < iterator.sales) {
                     VertMax = iterator.sales;
                  }
                  if (VertMax < iterator.value) {
                     VertMax = iterator.value;
                  }
                  if (iterator.value > 0) {
                     Norm = true;
                  }
               }

               if (this.props.DataChart != null) {
                  let data = this.props.DataChart;
                  const cols = {
                     sales: {
                        alias: 'Событий',
                        min: 0,
                        //tickInterval: Math.ceil(VertMax / 4)
                        max: Math.ceil(VertMax)
                     },
                     month: {
                        range: [0, 1],
                        max: Math.ceil(VertMax)
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
                        {/*<center><span>{this.props.header}</span></center>*/}
                        <Legend />
                        <Axis name="sales" title />
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
                           type="interval"
                           position="date*sales"
                           color={"date"}
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
            let Norm = false;
            for (const iterator of data) {
               if (VertMax < iterator.sales) {
                  VertMax = iterator.sales;
               }
               if (VertMax < iterator.norm) {
                  VertMax = iterator.norm;
               }
               if (iterator.norm > 0) {
                  Norm = true;
               }
            }
            const cols = {
               sales: {
                  alias: 'Событий',
                  min: 0,
                  //tickInterval: Math.ceil(VertMax / 4)
                  max: Math.ceil(VertMax)
               },
               /*norm: {
                  alias: 'Порог',
                  min: 0,
                  max: Math.ceil(VertMax),
                  x: 2
               }*/
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
                  {/*<center><span>По месяцам</span></center>

                  <Dropdown
                     placeholder={this.props.MassivComboBox[0].text}
                     search selection
                     options={this.props.MassivComboBox} />
*/}

                  <Axis name="sales" title />
                  <Axis name="date" />
                  {/*<Axis name="norm" />*/}

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
                  {/*Norm &&
                     <Geom type="line"
                        position="date*norm"
                        size={4}
                        color={'red'}
                     />
                  }
                  {Norm &&
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
                  */}

               </Chart>
            );
         }
      }
   }
}
