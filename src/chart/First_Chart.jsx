import React, { Component, PropTypes } from 'react';
import { get_Date_Filter, get_Date, GetDatFromColChart, Get_RSS, RssIncidentRegions } from '../core/core_Function.jsx';

import W_main_Icon from './firstChart/w_main_Icon.jsx';
import W_main_table from './firstChart/w_main_table.jsx';
import moment from 'moment';


const _Debuge = true;


/*
<ColumnChart Data={dataCol_Char1}
   dateStart={dateStart} dateStop={dateStop}
   w_Width={this.state.W_Width} />
*/

/*// Правильно :)

this.setState((prevState, props) => ({
   temperature: prevState.temperature + props.delta
 }));
*/



export default class First_Chart extends React.Component {
   constructor(props) {
      super(props);


      let _tooltip_text = '';
      let _header = 'Недоступность касс за период по АЗК.';
      switch (this.props.NeedCode) {
         case '191': {
            _tooltip_text = 'Все инциденты превысившие указанную норму.';
            _header = 'Отклонение от нормы за период по зависшим транзакциям на ТРК.';// (191)';
            if (_Debuge)
               _tooltip_text += " (191) - First_Chart";
            break;
         }
         case '122': {
            _tooltip_text = 'Кол-во перезагрузок ПО кассы в сравнении с расчетным показателем на АЗК.';
            _header = 'Недоступность касс за период по АЗК.';// (122)';
            if (_Debuge)
               _tooltip_text += " (122) - First_Chart";
            break;
         }
         case '33':
            {
               _tooltip_text = 'Гррафик отражает аномальные события по сбоям.';
               _header = 'Событие аннуляции чека и недоступность оборудования.';//(33)  (количество сбоев 211)';
               if (_Debuge)
                  _tooltip_text += " (33)  (количество сбоев 211) - First_Chart";
               break;
            }
         case '211': {
            _tooltip_text = 'Кол-во сбоев переферийного оборудования по месяцам.';
            _header = 'Недоступность периферийного оборудования и ТРК.';// (количество сбоев 211)';
            if (_Debuge)
               _tooltip_text += " (количество сбоев 211) - First_Chart";
            break;
         }
         default:
            _header = 'Недоступность касс за период по АЗК.';
            if (_Debuge)
               _tooltip_text += " (all) - First_Chart";
            break;
      }
      this.state = {
         NeedCode: this.props.NeedCode,
         header: _header,
         tooltip_text: _tooltip_text,
         start_region: this.props.start_region,
      }
   }
   componentDidUpdate(prevProps) {
      if (this.props.start_region != prevProps.start_region) {
         this.setState({ start_region: this.props.start_region });
      }
   }

   updateData = ({ startDate, endDate }) => {
      let NumberChart = 1;
      switch (this.state.NeedCode) {
         case '191':
            NumberChart = 11;
            break;
         case '122':
            NumberChart = 12;
            break;
         case '33':
            NumberChart = 14;
            break;
         case '211':
            NumberChart = 15;
            break;
         default:
            NumberChart = 1;
            break;
      }
      this.props.updateData({ startDate, endDate, NumberChart });
   }
   updateStartRegion = ({ NEW_REGION }) => {
      this.setState({ start_region: NEW_REGION });
   }


   render() {
      let rss = Get_RSS(this.props.RssIncident, this.props.dateStart, this.props.dateStop, this.props.NeedCode);
      if (this.state.start_region != null) {
          rss = Get_RSS(this.props.RssIncident ,this.props.dateStart, this.props.dateStop, this.props.NeedCode, this.state.start_region);

         //rss = rss + '&region_id=' + this.props.start_region;
      }
      //&region_id=77

      let rss_211 = Get_RSS(this.props.RssIncident, this.props.dateStart, this.props.dateStop, "211");
      if (this.state.start_region != null) {
           rss_211 = Get_RSS(this.props.RssIncident, this.props.dateStart, this.props.dateStop, "211", this.state.start_region);
      }

      if (!this.props.IsTable) {
         return (
            <W_main_Icon
               header={this.state.header}//'Недоступность касс за период по АЗК'

               tooltip_text={this.state.tooltip_text}

               w_Width={this.props.w_Width}
               startDate={this.props.dateStart}
               endDate={this.props.dateStop}
               updateData={this.updateData}
               updateStartRegion={this.updateStartRegion}

               RssDate={rss}
               RssDate_Two={this.props.NeedCode == "33" ? rss_211 : undefined}
               NeedCode={this.state.NeedCode}


               regions={this.props.regions}

               start_region={this.state.start_region}
            />

         );
      } else {
         return (
            <W_main_table
               header={this.state.header}//'Недоступность касс за период по АЗК'
               w_Width={this.props.w_Width}
               startDate={this.props.dateStart}
               endDate={this.props.dateStop}
               updateData={this.updateData}
               updateStartRegion={this.updateStartRegion}

               RssDate={rss}
               RssDate_Two={this.props.NeedCode == "33" ? rss_211 : undefined}
               NeedCode={this.state.NeedCode}
               regions={this.props.regions}

               start_region={this.state.start_region}
            />
         );
      }
   }
}
