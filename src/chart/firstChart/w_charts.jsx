import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';
import { get_Date_Filter, get_Date, GetDatFromColChart, GetDatFromColChart_month, GetDatFromColChart_AZS, GetDatFromColChart_CODE, GetDatFromColChart_KASS } from '../../core/core_Function.jsx';

import W_choos from './w_choos.jsx';
import W_chartCashir from './w_chartCashir.jsx';
import W_chartDate from './w_chartDate.jsx';
import W_chartASZ from './w_chartASZ.jsx';
import W_chartCODE from './w_chartCODE.jsx';
import W_chartKASS from './w_chartKASS.jsx';


export default class w_charts extends Component {
   constructor(props) {
      super(props);
      this.updateType = this.updateType.bind(this);
      this.updateCashir = this.updateCashir.bind(this);
      this.state = {
         typeChart: "cashir",
         n_Cashir: null,

         localData: null,
         isLocalData: false,
      }
   }
   updateType = (TypeChart) => {
      this.setState({ typeChart: TypeChart });
   }
   updateCashir = (N_Cashir) => {

      //const conf =  window.confirm(`Ограничить данные?`);
      this.setState({ n_Cashir: N_Cashir });

   }

   render() {
      switch (this.state.typeChart) {
         case "cashir": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {

               //if (this.state.n_Cashir != null) {
                  //alert(this.state.n_Cashir);
               //   dataCol_Char1 = GetDatFromColChart(this.props.Data, this.state.n_Cashir);
               //} else 
               {

                  dataCol_Char1 = GetDatFromColChart(this.props.Data);
               }
            }
            return (
               <tr>
                  <td colSpan='2' className='tr_Chart'>
                     <W_chartCashir DataChart={dataCol_Char1} w_Width={this.props.w_Width} isLegend={this.props.isLegend}
                        updateCashir={this.updateCashir}
                     />
                  </td>
                  {this.props.isLegend &&
                     <td width='110px' className="td_C_Chart">
                        <W_choos updateType={this.updateType} />
                     </td>
                  }
               </tr>
            );
            break;
         }
         case "date": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {
               dataCol_Char1 = GetDatFromColChart_month(this.props.Data);
            }
            return (
               <tr>
                  <td colSpan='2' className='tr_Chart'>
                     <W_chartDate DataChart={dataCol_Char1} w_Width={this.props.w_Width} isLegend={this.props.isLegend} />
                  </td>
                  {this.props.isLegend &&
                     <td width='110px' className="td_C_Chart">
                        <W_choos updateType={this.updateType} />
                     </td>
                  }
               </tr>
            );
            break;
         }
         case "azs": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {
               dataCol_Char1 = GetDatFromColChart_AZS(this.props.Data);
            }
            return (
               <tr>
                  <td colSpan='2' className='tr_Chart'>
                     <W_chartASZ DataChart={dataCol_Char1} w_Width={this.props.w_Width} isLegend={this.props.isLegend} />
                  </td>
                  {this.props.isLegend &&
                     <td width='110px' className="td_C_Chart">
                        <W_choos updateType={this.updateType} />
                     </td>
                  }
               </tr>
            );
            break;
         }
         case "code": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {
               dataCol_Char1 = GetDatFromColChart_CODE(this.props.Data);
            }
            return (
               <tr>
                  <td colSpan='2' className='tr_Chart'>
                     <W_chartCODE DataChart={dataCol_Char1} w_Width={this.props.w_Width} isLegend={this.props.isLegend} />
                  </td>
                  {this.props.isLegend &&
                     <td width='110px' className="td_C_Chart">
                        <W_choos updateType={this.updateType} />
                     </td>
                  }
               </tr>
            );
            break;
         }
         case "kass": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {
               dataCol_Char1 = GetDatFromColChart_KASS(this.props.Data);
            }
            return (
               <tr>
                  <td colSpan='2' className='tr_Chart'>
                     <W_chartKASS DataChart={dataCol_Char1} w_Width={this.props.w_Width} isLegend={this.props.isLegend} />
                  </td>
                  {this.props.isLegend &&
                     <td width='110px' className="td_C_Chart">
                        <W_choos updateType={this.updateType} />
                     </td>
                  }
               </tr>
            );
            break;
         }

         default:
            return (
               <tr>
                  <td colSpan='2' className='tr_Chart'>
                     НЕТ
                  </td>
                  {this.props.isLegend &&
                     <td width='110px' className="td_C_Chart">
                        <W_choos updateType={this.updateType} />
                     </td>
                  }
               </tr>
            );
            break;
      }
   }
}

/*

<td colSpan='2' className='tr_Chart'>
               <Chart
                  forceFit
                  width={this.state.W_Width}
                  height={200}
                  data={this.props.DataChart}
                  scale={cols}>
                  <Axis name="N" title />
                  <Axis name="CASHIER_ID" label={label} />

                  {this.props.isLegend &&
                     <Legend position='bottom' visible={true} offsetY={-20} />
                  }

                  <Tooltip />
                  <Geom type="interval" position="CASHIER_ID*N" color="N"
                     color={"CASHIER_ID"}
                  />
               </Chart>
            </td>

*/