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
      this.state = {
         Rss: this.props.Rss,
         Object: null,
         isExistError: false,
      }
   }

   updateData = ({ startDate, endDate }) => {
      this.setState({ Object: null }, this.props.updateData({ startDate, endDate }));
   }
   async componentDidMount() {
      await this.tick();
      //this.timerID = setInterval(() => this.tick(), 30000);
   }
   componentDidUpdate(prevProps) {
      if (this.props.Rss != prevProps.Rss) {
         this.setState({ Rss: this.props.Rss }, this.tick);
      }
   }
   async tick() {
      let rss = this.state.Rss;
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
         this.setState({ isExistError: false })

      }
      catch (error) {
         this.setState({ isExistError: true })
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
                     <td></td>
                     {this.state.isExistError ? (
                        <W_head header={err} equal='right' color='red' />
                     ) : (
                           <W_head header={this.props.header} equal='right' />
                        )
                     }
                     <W_headDate updateData={this.updateData} equal='left'
                        startDate={this.props.startDate} endDate={this.props.endDate} isDisable={false} />
                     <td></td>
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
                           <W_sectorCircle N_text={proc_H3} proc='true' />
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