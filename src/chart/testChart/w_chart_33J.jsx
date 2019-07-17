import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';

import DataSet from '@antv/data-set';

import { max } from 'moment';

const _Debuge = false;

export default class w_chart extends Component {
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
   render() {
      const data = [
         { label: '0.1', "Средства должны быть возвращены": 2800, "Цена": 2800, "Заработок": 2260, "Валовой доход": 2 },
         { label: '0.2', "Средства должны быть возвращены": 1800, "Цена": 1800, "Заработок": 1300, "Валовой доход": 3 },
         { label: '0.3', "Средства должны быть возвращены": 950, "Цена": 950, "Заработок": 900, "Валовой доход": 5 },
         { label: '0.4', "Средства должны быть возвращены": 500, "Цена": 500, "Заработок": -390, "Валовой доход": 1 },
         { label: '0.5', "Средства должны быть возвращены": 170, "Цена": 170, "Заработок": 100, "Валовой доход": 3 },
         { label: '0.6', "Средства должны быть возвращены": 170, "Цена": 170, "Заработок": 100, "Валовой доход": 3 },
         { label: '0.7', "Средства должны быть возвращены": 170, "Цена": 170, "Заработок": -100, "Валовой доход": 3 },
         { label: '0.8', "Средства должны быть возвращены": 170, "Цена": 170, "Заработок": 100, "Валовой доход": 3 },
         { label: '0.9', "Средства должны быть возвращены": 170, "Цена": 170, "Заработок": 100, "Валовой доход": 3 },
         { label: '1.0', "Средства должны быть возвращены": 170, "Цена": 170, "Заработок": 100, "Валовой доход": 3 },
         { label: 'макс', "Средства должны быть возвращены": 170, "Цена": 170, "Заработок": 100, "Валовой доход": 3 },
      ];
      const ds = new DataSet();
      const dv = ds.createView().source(data);
      dv.transform({
         type: 'fold',
         fields: ['Средства должны быть возвращены', 'Цена', 'Заработок'], // 展开字段集
         key: 'type', // key字段
         value: 'value', // value字段
      });
      const scale = {
         "Валовой доход": {
            type: 'linear',
            min: 0,
            max: 10,
         },
      };

      let chartIns = null;

      const getG2Instance = (chart) => {
         chartIns = chart;
      };
      return (
         <Chart
            padding="auto"
            forceFit
            width={this.state.W_Width / 2 - 50}
            height={200}
            data={dv}
            scale={scale}
            onGetG2Instance={getG2Instance}
         >
            <Legend
               custom
               allowAllCanceled
               items={[
                  { value: 'Средства должны быть возвращены', marker: { symbol: 'square', fill: '#3182bd', radius: 5 } },
                  { value: 'Цена', marker: { symbol: 'square', fill: '#41a2fc', radius: 5 } },
                  { value: 'Заработок', marker: { symbol: 'square', fill: '#54ca76', radius: 5 } },
                  { value: 'Валовой доход', marker: { symbol: 'hyphen', stroke: '#fad248', radius: 5, lineWidth: 3 } },
               ]}
               onClick={(ev) => {
                  const item = ev.item;
                  const value = item.value;
                  const checked = ev.checked;
                  const geoms = chartIns.getAllGeoms();
                  for (let i = 0; i < geoms.length; i++) {
                     const geom = geoms[i];
                     if (geom.getYScale().field === value && value === 'Валовой доход') {
                        if (checked) {
                           geom.show();
                        } else {
                           geom.hide();
                        }
                     } else if (geom.getYScale().field === 'value' && value !== 'Валовой доход') {
                        geom.getShapes().map((shape) => {
                           if (shape._cfg.origin._origin.type == value) {
                              shape._cfg.visible = !shape._cfg.visible;
                           }
                           shape.get('canvas').draw();
                           return shape;
                        });
                     }
                  }
               }}
            />
            <Axis name="label" />
            <Axis name="value" position={'left'} />
            <Tooltip />
            <Geom
               type="interval"
               position="label*value"
               color={['type', (value) => {
                  if (value === 'Средства должны быть возвращены') {
                     return '#2b6cbb';
                  }
                  if (value === 'Цена') {
                     return '#41a2fc';
                  }
                  if (value === 'Заработок') {
                     return '#54ca76';
                  }
               }]}
               adjust={[{
                  type: 'dodge',
                  marginRatio: 1 / 32,
               }]}
            />
            <Geom type="line" position="label*Валовой доход" color="#fad248" size={3} />
         </Chart>
      );
   }
}



