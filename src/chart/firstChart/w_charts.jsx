import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';
import { get_Date_Filter, get_Date, GetDatFromColChart, 
   GetDatFromColChart_month, GetDatFromColChart_AZS, GetDatFromColChart_CODE, 
   GetDatFromColChart_KASS, GetDatFromErrorEqv } from '../../core/core_Function.jsx';

import W_choos from './w_choos.jsx';
import W_choosed from './w_choosed.jsx';
import W_chartCashir from './w_chartCashir.jsx';
import W_chartDate from './w_chartDate.jsx';
import W_chartASZ from './w_chartASZ.jsx';
import W_chartCODE from './w_chartCODE.jsx';
import W_chartKASS from './w_chartKASS.jsx';


export default class w_charts extends Component {
   constructor(props) {
      super(props);
      //this.updateCashir = this.updateCashir.bind(this);
   }
   updateType = (TypeChart) => {
      this.props.updateType(TypeChart);
   }
   updateCashir = (N_Cashir) => {
      this.props.updateCashir(N_Cashir);
   }
   updateKass = (N_Kassa) => {
      this.props.updateKass(N_Kassa);
   }
   updateAZS = (N_AZS) => {
      this.props.updateAZS(N_AZS);
   }
   updateCode = (N_Code) => {
      this.props.updateCode(N_Code);
   }
   updateMonth = (N_Month) => {
      this.props.updateMonth(N_Month);
   }
   deleteFilet = (N_Text) => {
      this.props.deleteFilet(N_Text);
   }


   render() {
      switch (this.props.typeChart) {
         case "cashir": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {
               dataCol_Char1 = GetDatFromColChart(this.props.Data);
            }
            return (
               <tr>
                  <td colSpan='2' className='tr_Chart'>
                     <W_chartCashir DataChart={dataCol_Char1} w_Width={this.props.w_Width}
                        isLegend={this.props.isLegend}
                        updateCashir={this.updateCashir}
                     />
                  </td>
                  {
                     this.props.isLegend &&
                     <td width='120px' className="td_C_Chart">
                        <W_choos updateType={this.updateType}
                           typeChart={this.props.typeChart} NeedCode={this.props.NeedCode} />
                        <W_choosed filterCurent={this.props.filterCurent}
                           deleteFilet={this.props.deleteFilet}
                        />
                     </td>
                  }
               </tr>
            );
            break;
         }
         case "date": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {
               switch (this.props.NeedCode) {
                  case "211": {
                     dataCol_Char1 = GetDatFromErrorEqv(this.props.Data, "month");
                     break;
                  }

                  default: {
                     dataCol_Char1 = GetDatFromColChart_month(this.props.Data);
                     break;
                  }
               }

            }
            return (
               <tr>
                  <td colSpan='2' className='tr_Chart'>
                     <W_chartDate DataChart={dataCol_Char1} w_Width={this.props.w_Width}
                        isLegend={this.props.isLegend}
                        updateMonth={this.updateMonth}
                        NeedCode={this.props.NeedCode}
                     />
                  </td>
                  {this.props.isLegend &&

                     <td width='120px' className="td_C_Chart">
                        <W_choos updateType={this.updateType}
                           typeChart={this.props.typeChart} NeedCode={this.props.NeedCode} />
                        <W_choosed filterCurent={this.props.filterCurent}
                           deleteFilet={this.props.deleteFilet}
                        />
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
                     <W_chartASZ DataChart={dataCol_Char1} w_Width={this.props.w_Width}
                        isLegend={this.props.isLegend}
                        updateAZS={this.updateAZS}
                     />
                  </td>
                  {this.props.isLegend &&
                     <td width='120px' className="td_C_Chart">
                        <W_choos updateType={this.updateType}
                           typeChart={this.props.typeChart} NeedCode={this.props.NeedCode} />
                        <W_choosed filterCurent={this.props.filterCurent}
                           deleteFilet={this.props.deleteFilet}
                        />
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
                     <W_chartCODE DataChart={dataCol_Char1}
                        w_Width={this.props.w_Width}
                        isLegend={this.props.isLegend}
                        updateCode={this.updateCode}
                     />
                  </td>
                  {this.props.isLegend &&
                     <td width='120px' className="td_C_Chart">
                        <W_choos updateType={this.updateType}
                           typeChart={this.props.typeChart} NeedCode={this.props.NeedCode} />
                        <W_choosed filterCurent={this.props.filterCurent}
                           deleteFilet={this.props.deleteFilet}
                        />
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
                     <W_chartKASS DataChart={dataCol_Char1} w_Width={this.props.w_Width}
                        isLegend={this.props.isLegend}
                        updateKass={this.updateKass}
                     />
                  </td>
                  {this.props.isLegend &&
                     <td width='120px' className="td_C_Chart">
                        <W_choos updateType={this.updateType}
                           typeChart={this.props.typeChart} NeedCode={this.props.NeedCode} />
                        <W_choosed filterCurent={this.props.filterCurent}
                           deleteFilet={this.props.deleteFilet}
                        />
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
                     <td width='120px' className="td_C_Chart">
                        <W_choos updateType={this.updateType} NeedCode={this.props.NeedCode} />
                        <W_choosed filterCurent={this.props.filterCurent}
                           deleteFilet={this.props.deleteFilet}
                        />
                     </td>
                  }
               </tr>
            );
            break;
      }
   }
}
