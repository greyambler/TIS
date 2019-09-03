import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';
import {
   get_Date_Filter, get_Date, GetDatFromColChart,
   GetDatFromColChart_month, GetDatFromColChart_AZS, GetDatFromColChart_CODE,
   GetDatFromColChart_KASS, GetDatFromErrorEqv,
   GetDatFromColChart_month_33, GetDatFromColChart_KASS_33,
   GetMassivComboBox_Normals
} from '../../core/core_Function.jsx';

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
   updateEquip = (N_Equip) => {
      this.props.updateEquip(N_Equip);
   }

   render() {
      let is_More_Month = this.props.endDate.diff(this.props.startDate, 'days') > 32;

      switch (this.props.typeChart) {
         case "cashir": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {
               dataCol_Char1 = GetDatFromColChart(this.props.Data, this.props.Data_Norm,
                  this.props.startDate,
                  this.props.endDate
               );
            }
            return (
               <tr>
                  <td colSpan='4' className='tr_Chart'>
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
         //case "date": {
         case "month": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {
               switch (this.props.NeedCode) {
                  case "211": {
                     dataCol_Char1 = GetDatFromErrorEqv(this.props.Data, "month");
                     break;
                  }
                  case "33": {
                     if (this.props.Data != null && this.props.Data_Two == null) {
                        dataCol_Char1 = GetDatFromColChart_month(this.props.Data,
                           this.props.Data_Norm);
                     } else if (this.props.Data != null && this.props.Data_Two != null) {
                        dataCol_Char1 = GetDatFromColChart_month_33(this.props.Data, this.props.Data_Two,
                           this.props.Data_Norm);
                     }
                     break;
                  }
                  default: {
                     dataCol_Char1 = GetDatFromColChart_month(this.props.Data,
                        this.props.Data_Norm);
                     break;
                  }
               }

            }
            //let Mass = GetMassivComboBox_Normals(this.props.Data_Norm);

            return (
               <tr>
                  <td colSpan='4' className='tr_Chart'>
                     <W_chartDate DataChart={dataCol_Char1} w_Width={this.props.w_Width}
                        //MassivComboBox={Mass}
                        isLegend={this.props.isLegend}
                        updateMonth={this.updateMonth}
                        NeedCode={this.props.NeedCode}
                        updateEquip={this.updateEquip}
                        header='По устройствам за месяц'
                        SelectValueNormals={this.props.SelectValueNormals}
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
         case "day": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {
               dataCol_Char1 = GetDatFromErrorEqv(this.props.Data, "day");
            }
            return (
               <tr>
                  <td colSpan='4' className='tr_Chart'>
                     <W_chartDate DataChart={dataCol_Char1}
                        w_Width={this.props.w_Width}
                        isLegend={this.props.isLegend}
                        //updateMonth={this.updateMonth}
                        NeedCode={this.props.NeedCode}

                        updateEquip={this.updateEquip}
                        header='По устройствам за день'
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
               dataCol_Char1 = GetDatFromColChart_AZS(this.props.Data, this.props.Data_Norm,
                  this.props.startDate,
                  this.props.endDate

               );
            }
            return (

               <tr>
                  <td colSpan='4' className='tr_Chart'>
                     <W_chartASZ DataChart={dataCol_Char1} w_Width={this.props.w_Width}
                        isLegend={this.props.isLegend}
                        updateAZS={this.updateAZS}
                        is_More_Month={is_More_Month}
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
                  <td colSpan='4' className='tr_Chart'>
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

            if (this.props.Data != null && this.props.Data_Two == null) {
               dataCol_Char1 = GetDatFromColChart_KASS(this.props.Data, this.props.Data_Norm,
                  this.props.startDate,
                  this.props.endDate
               );
            } else if (this.props.Data != null && this.props.Data_Two != null) {
               dataCol_Char1 = GetDatFromColChart_KASS_33(this.props.Data, this.props.Data_Two,
                  this.props.Data_Norm,
                  this.props.startDate,
                  this.props.endDate
               );
            }
            return (
               <tr>
                  <td colSpan='4' className='tr_Chart'>
                     <W_chartKASS DataChart={dataCol_Char1} w_Width={this.props.w_Width}
                        isLegend={this.props.isLegend}
                        updateKass={this.updateKass}
                        is_More_Month={is_More_Month}
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
                  <td colSpan='4' className='tr_Chart'>
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
