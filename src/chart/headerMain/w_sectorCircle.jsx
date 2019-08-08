import React, { Component, PropTypes } from 'react';
import { Stage, Layer, Text, Circle } from 'react-konva';
import { G2, Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet, Util } from "bizcharts";
import DataSet from "@antv/data-set";


export function get_Html(num) {
    return "<div>" + num + '</div>';
}
export function get_itemTpl() {
    return '<li> {name}: {value},( {field} )</li>';
}
export function get_Count(_item) {
    let r = 0;
    for (const iterator of Et_Data) {
        if (iterator.item == _item.item) {
            r = iterator.count;
        }
    }
    return r;
}

let Et_Data = new Array();
export function Full_EtalonData(data) {
    if (data != null) {
        Et_Data = new Array();
        for (const iterator of data) {
            Et_Data[Et_Data.length] = iterator;
        }
    }
}


export default class w_circle extends Component {
    constructor(props) {
        super(props);
        this.on_Click = this.on_Click.bind(this);
        this.sum_Full = this.sum_Full.bind(this);

        Full_EtalonData(this.props.data);
        this.state = {
            data: this.props.data,
            sum: 0,
        }
    }
    componentDidMount() {

        this.setState({ data: this.props.data }, this.sum_Full);
    }
    componentDidUpdate(prevProps) {
        if (this.props.data != prevProps.data) {
            this.setState({ data: this.props.data }, this.sum_Full);
            if (this.props.data != null) {
                if (this.props.data.length != Et_Data.length) {
                    Full_EtalonData(this.props.data);
                }
            }
        }
    }
    sum_Full() {
        let _sum = 0;
        if (this.state.data != null) {
            for (const iterator of this.state.data) {
                if (iterator.checked) {//Расчет суммы
                    _sum = _sum + iterator.count;
                }
            }
        }
        this.setState({ sum: _sum });
    }

    on_Click(v) {
        try {
            for (const iterator of this.state.data) {
                if (iterator.item == v.ev.data.value && v.ev.shape._cfg.checked != null) {
                    iterator.checked = v.ev.shape._cfg.checked;
                    if (iterator.checked) {
                        iterator.count = get_Count(iterator);
                    } else {
                        iterator.count = 0;
                    }
                    this.setState({ data: this.state.data }, this.sum_Full);
                    this.props.update_mass_Inc(this.state.data)
                    break;
                }
            }
            //alert(v.ev.data.value + " " + v.ev.shape._cfg.checked);
            //let r = v.ev.item.value;
        } catch (error) {
        }
    }
    render() {
        if (this.state.data != null && this.state.data.length > 0) {
            const { DataView } = DataSet;
            const { Html } = Guide;
            const dv = new DataView();

            dv.source(this.state.data).transform({
                type: "percent",
                field: "count",
                dimension: "item",
                as: "percent"
            });


            return (
                <div className='T_Chart'>
                    <Chart className="W_Chart"
                        height={110}
                        data={dv}
                        padding={[1, 420, 0, 0]}
                        forceFit={false}
                        onClick={ev => { this.on_Click({ ev }) }}
                    >

                        <Coord type={"theta"} radius={0.70} innerRadius={0.2} />

                        <Legend position="right" offsetY={0} offsetX={10} />
                        <Tooltip showTitle={false} itemTpl={get_itemTpl()} />
                        <Guide >
                            <Html
                                position={["50%", "49%"]}
                                html={get_Html(this.state.sum)}
                                alignX="middle"
                                alignY="middle"
                            />
                        </Guide>

                        <Geom
                            type="intervalStack"
                            position="percent"
                            color="item"
                            field="count"
                            tooltip={[
                                "item*percent*count",
                                (item, percent, count) => {
                                    percent = Math.round(percent * 10000) / 100 + "%";
                                    return { name: item, value: percent, field: count };
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
        } else {
            return <a>0</a>
        }
    }
}
