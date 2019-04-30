import React, { Component, PropTypes } from 'react';
import {
   G2,
   Chart,
   Geom,
   Axis,
   Tooltip,
   Coord,
   Label,
   Legend,
   View,
   Guide,
   Shape,
   Facet,
   Util
} from "bizcharts";
import DataSet from "@antv/data-set";


class CircularGraph extends Component {
   render() {
      const { DataView } = DataSet;
      const { Html } = Guide;
      const data = [
         {
            item: "1 Сбой кассы",
            count: 20
         },
         {
            item: "2 Сбой ТРК",
            count: 21
         },
         {
            item: "3 Сбой периферия",
            count: 17
         },
         {
            item: "4 Сбой СВН",
            count: 13
         },
      ];

      const dv = new DataView();
      dv.source(data).transform({
         type: "percent",
         field: "count",
         dimension: "item",
         as: "percent"
      });
      const cols = {
         percent: {
            formatter: val => {
               val = val * 100 + "%";
               return val;
            }
         }
      };
      return (
         <div>
            <Chart className='T_Chart'
               height={100}
               
               data={dv}
               scale={cols}
               padding={[5, 420, 7, 0]}
               forceFit={false}
            >
               <Coord type={"theta"} radius={0.75} innerRadius={0.2} />
               <Axis name="percent" />
               <Legend
                  position="right"
                  offsetY={0}
                  offsetX={0}
               />
               <Tooltip
                  showTitle={false}
                  itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
               />
               <Guide>
                  <Html
                     position={["50%", "45%"]}
                     html="<div style=&quot;color:#000;font-size:1.5em;text-align: center;font-family: 'Open Sans', sans-serif;width: 10em;&quot;>

                     24</div>"
                     alignX="middle"
                     alignY="middle"
                  />
               </Guide>
               <Geom
                  type="intervalStack"
                  position="percent"
                  color="item"
                  tooltip={[
                     "item*percent",
                     (item, percent) => {
                        percent = percent * 100 + "%";
                        return {
                           name: item,
                           value: percent
                        };
                     }
                  ]}
                  style={{
                     lineWidth: 1,
                     stroke: "#fff"
                  }}
               >

               </Geom>
            </Chart>
         </div>
      );
   }
}

export default CircularGraph;
