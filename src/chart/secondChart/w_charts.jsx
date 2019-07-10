import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';
import { get_Date_Filter, get_Date, GetDatFromErrorEqv, GetDatFromColChart, GetDatFromColChart_month, GetDatFromColChart_AZS, GetDatFromColChart_CODE, GetDatFromColChart_KASS } from '../../core/core_Function.jsx';

import W_choos from './w_choos.jsx';
import W_choosed from './w_choosed.jsx';
import W_chartEquip from './w_chartEquip.jsx';


export default class w_charts extends Component {
   constructor(props) {
      super(props);
      //this.updateCashir = this.updateCashir.bind(this);
   }
   updateType = (TypeChart) => {
      this.props.updateType(TypeChart);
   }
   
   updateEquip = (N_Equip) => {
      this.props.updateEquip(N_Equip);
   }
   
   render() {
      switch (this.props.typeChart) {
         case "month": {
            let dataCol_Char1 = null;
            if (this.props.Data != null) {
               dataCol_Char1 = GetDatFromErrorEqv(this.props.Data, "month");
            }
            return (
               <tr>
                  <td colSpan='2' className='tr_Chart'>
                     <W_chartEquip DataChart={dataCol_Char1} w_Width={this.props.w_Width}
                        isLegend={this.props.isLegend}
                        updateMonth={this.updateMonth}
                        updateEquip={this.updateEquip}
                        
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
                  <td colSpan='2' className='tr_Chart'>
                     <W_chartEquip DataChart={dataCol_Char1} w_Width={this.props.w_Width}
                        isLegend={this.props.isLegend}
                        updateMonth={this.updateMonth}
                        updateEquip={this.updateEquip}
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
