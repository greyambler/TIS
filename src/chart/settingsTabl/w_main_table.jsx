import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head.jsx';
import W_headDate from '../controls/w_headDate.jsx';
import W_table from './w_table.jsx';

import { Link } from "react-router-dom";
import moment from 'moment';

import { get_Date_Filter, get_Date, GetDatFromColChart } from '../../core/core_Function.jsx';

const _Debuge = false;

export default class w_main_table extends Component {
   constructor(props) {
      super(props);
      this.state = {
         Object: null,
         Rss: this.props.Rss_Settings,
         isExistError: false,
      }
   }
   componentDidMount() {
      this.tick();
      //this.timerID = setInterval(() => this.tick(), 30000);
   }
   componentDidUpdate(prevProps) {
      if (this.props.RssDate != prevProps.RssDate) {
         this.setState({ Rss: this.props.RssDate }, this.tick);
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
      let _dataTable = null;
      if (this.state.Object != null) {
         _dataTable = this.state.Object.normales;
      }
      let err = null;
      if (this.state.isExistError) {
         err = 'Ошибка! Сервер не ответил!';
      }

      if (_Debuge) {
         return (
            <div>
               <table>
                  <tbody>
                     <tr>
                        {this.state.isExistError
                           ?
                           (<W_head header={err} color='red' />)
                           :
                           (
                              <W_head header={this.props.header} />
                           )
                        }
                        <th rowSpan='3' width='65px'>
                           <Link to="/">
                              <img src={'../images/Library.ico'} className='ICO_Link' />
                           </Link>
                        </th>
                     </tr>
                  </tbody>
               </table>

               <hr /> <hr /> <br />

               <table>
                  <tbody>
                     <tr>
                        <h1><center>Таблица с настройками</center></h1>
                     </tr>
                  </tbody>
               </table>
            </div>
         );
      } else {
         return (
            <div>
               <table id='table_main' name='table_main'>
                  <tbody>
                     <tr>
                        {this.state.isExistError ? (
                           <W_head header={err} color='red' />
                        ) : (
                              <W_head header={this.props.header} />
                           )
                        }
                        <th rowSpan='3' width='65px'>
                           <Link to="/">
                              <img src={'../images/Library.ico'} className='ICO_Link' />
                           </Link>
                        </th>
                     </tr>
                     
                  </tbody>
               </table>

               <hr /><hr />
               <table>
                  <tbody>
                     <tr>
                        <td>
                           {_dataTable != null &&
                              <W_table Data={_dataTable} w_Width={this.props.w_Width} />
                           }
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         );
      }
   }

}
