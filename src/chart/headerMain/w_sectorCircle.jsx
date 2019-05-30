import React, { Component, PropTypes } from 'react';
import { Stage, Layer, Text, Circle } from 'react-konva';
import { G2, Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet, Util } from "bizcharts";
import DataSet from "@antv/data-set";





export default class w_circle extends Component {
    constructor(props) {
        super(props);
        this.state= {
            T1:20,
            T2:21,
            T3:17,
            T4:13,
        }
    }

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
            <div className='T_Chart'>
                <Chart
                    height={110}

                    data={dv}
                    scale={cols}
                    padding={[1, 420, 0, 0]}
                    forceFit={false}
                >
                    <Coord type={"theta"} radius={0.70} innerRadius={0.2} />
                    <Axis name="percent" />
                    <Legend
                        position="right"
                        offsetY={0}
                        offsetX={10}
                    />
                    
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />

                    <Guide>
                        <Html
                            position={["50%", "49%"]}
                            html="<div className='T_Chart' style=&quot;color:#000; z-index='4';font-size:0.8em;text-align: center;font-family: 'Open Sans', sans-serif;width: 4em;&quot;> 

                            24 
                            
                            </div>"
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
                                percent = Math.round(percent * 10000)/100 + "%";
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

