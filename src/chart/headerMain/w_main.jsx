import React, { Component } from 'react';
import W_head from '../controls/w_head.jsx';
import W_headDate from '../controls/w_headDate.jsx';

import W_circle from './w_circle.jsx';
import W_sectorCircle from './w_sectorCircle.jsx';
import { D1_D1_Eq_moment, GetDateYMD_moment } from '../../core/core_Function.jsx';

export default class w_main extends Component {
   constructor(props) {
      super(props);
      this.tick = this.tick.bind(this);
      this.Get_RSS = this.Get_RSS.bind(this);

      this.state = {
         startDate: this.props.startDate,
         endDate: this.props.endDate,

         Rss: this.props.Rss,
         Object: null,
         isExistError: false,
      }
   }

   updateData = ({ startDate, endDate }) => {
      this.setState({ Object: null }, this.props.updateData({ startDate, endDate }));
   }

   /*
      componentDidUpdate(prevProps) {
         if (this.props.startDate != prevProps.startDate) {
            this.setState({ startDate: this.props.startDate }, this.tick);
         }
         if (this.props.endDate != prevProps.endDate) {
            this.setState({ endDate: this.props.endDate }, this.tick);
         }
      }
      */
   async componentDidMount() {
      await this.tick();
      //this.timerID = setInterval(() => this.tick(), 30000);
   }

   Get_RSS() {
      ///this.setState({ Object: null });
      var rss = this.state.Rss;

      if (this.state.startDate != null && this.state.endDate != null) {
         let IsOne = D1_D1_Eq_moment(this.state.startDate, this.state.endDate);
         if (IsOne) {
            rss = rss + "?date=" + GetDateYMD_moment(this.state.startDate);
         }
         else {
            rss = rss + "?from="
               + GetDateYMD_moment(this.state.startDate)
               + "&to="
               + GetDateYMD_moment(this.state.endDate);
         }
      }
      return rss;
   }

   async tick() {
      let rss = this.Get_RSS();
      var myRequest = new Request(rss);

      try {
         var response = await fetch(myRequest,
            {
               method: 'GET',
               headers:
               {
                  'Accept': 'application/json',
               },
            }
         );
         if (response.ok) {
            const Jsons = await response.json();
            this.setState({ Object: Jsons });
         }
         else {
            throw Error(response.statusText);
         }
         this.setState({isExistError : false})

      }
      catch (error) {
         this.setState({isExistError : true})
         console.log(error);
      }
   }

   render() {
      let numfiles = 0;
      let numincidents = 0;

      let proc_H3 = '50%';

      if (this.state.Object != null) {
         numfiles = this.state.Object.numfiles;
         numincidents = this.state.Object.numincidents;
      }

      let err = null;
      if (this.state.isExistError) {
         err = 'Ошибка! Сервер не ответил!';
      }

      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <W_head header={this.props.header} equal='right' />
                     <W_headDate updateData={this.updateData} equal='left'
                        startDate={this.props.startDate} endDate={this.props.endDate} isDisable={false} />
                     <W_head header={err} equal='left' color='red' />
                  </tr>
               </tbody>
            </table>
            <table>
               <tbody>
                  <tr className='td_t_Main'>
                     <td className='td_t_Left'></td>
                     <td>
                        <center>
                           <W_circle N_text={numfiles} />
                        </center>
                     </td>
                     <td>
                        <center>
                           <W_circle N_text={numincidents} />
                        </center>
                     </td>
                     <td>
                        <center>
                           <W_circle N_text={proc_H3} proc='true' />
                        </center>
                     </td>
                     <td>
                        <center>
                           <W_sectorCircle N_text={proc_H3} proc='true'/>
                        </center>
                     </td>
                     <td className='td_t_Right'></td>
                  </tr>

                  <tr>
                     <td />
                     <td className='td_Name'><center>Логов загружено</center></td>
                     <td className='td_Name'><center>События идентифицированы</center></td>
                     <td className='td_Name'><center>Расчеты КП выполнены</center></td>
                     <td className='td_Name' ><center>Системные инциденты</center></td>
                     <td />
                  </tr>

               </tbody>
            </table>
         </div>
      );
   }
}
