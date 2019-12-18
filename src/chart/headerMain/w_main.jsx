import React, { Component } from 'react';
import W_head from '../controls/w_head.jsx';
import W_headDate from '../controls/w_headDate.jsx';

import W_circle from './w_circle.jsx';
import W_sectorCircle from './w_sectorCircle.jsx';
import { D1_D1_Eq_moment, GetDateYMD_moment } from '../../core/core_Function.jsx';


class Item_Fail {
   constructor(_case, _name, _count, _checked) {
      this.id = _case;
      this.item = _name;
      this.count = _count;
      this.checked = _checked;
   }
}

export function get_ListFals(list) {
   let children = Array();
   let t = 0;
   if (list != null) {
      for (const Item of list) {
         children[t] = new Item_Fail(Item.case, Item.name, Item.count, true);
         t++;
      }
   }
   return children.sort(compareCase);
}
function compareCase(a, b) {
   if (a.id > b.id) return 1;
   if (a.id < b.id) return -1;
}

export function get_Rss() {

   return '{"cases":[' +
      '{"case":"BC02","name":"БК2 ошибки взаимодействия с подключаемым оборудованием","count":19},' +
      '{"case":"BC03","name":"БК3 зависшие транзакции","count":15},' +
      '{"case":"BC04","name":"БК4 доступность сервера СВН","count":32},' +
      '{"case":"BC01","name":"БК1 включение питания","count":27}' +
      ']}';
}

export default class w_main extends Component {
   constructor(props) {
      super(props);
      this.tick = this.tick.bind(this);
      this.state = {
         Rss: this.props.Rss,
         Object: null,
         isExistError: false,

         RssSector: this.props.RssSector,
         ObjectSector: null,

         mass_Inc: null,
      }
   }

   updateData = ({ startDate, endDate }) => {
      this.setState({ Object: null, ObjectSector: null },
         this.props.updateData({ startDate, endDate }));
   }
   async componentDidMount() {
      await this.tick();
      await this.tickSector();
      this.timerID = setInterval(() => this.tick(), 30000);
   }
   componentDidUpdate(prevProps) {
      if (this.props.Rss != prevProps.Rss) {
         this.setState({ Rss: this.props.Rss }, this.tick);
      }
      if (this.props.RssSector != prevProps.RssSector) {
         this.setState({ RssSector: this.props.RssSector }, this.tickSector);
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
   async tickSector() {
      let rss = this.state.RssSector;
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

            this.setState({ ObjectSector: Jsons });
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

   update_mass_Inc = (J_testValeu) => {
      if (J_testValeu != null && J_testValeu.length > 0) {

         for (const Item of J_testValeu) {
            for (const item of this.state.mass_Inc) {
               if (Item.id == item.id) {
                  item.IsUse = Item.checked;
                  break;
               }
            }
         }
         this.setState({ mass_Inc: this.state.mass_Inc });
      }
   }

   render() {
      /*  let testValeu = get_Rss();
          let ListFalls = JSON.parse(testValeu);
          let J_testValeu = get_ListFals(ListFalls.cases);    
     */
      let J_testValeu = new Array();
      /****************  Для показа
      if (this.state.ObjectSector != null) {
         J_testValeu = get_ListFals(this.state.ObjectSector.cases);
      }*/
      
         J_testValeu = get_ListFals(JSON.parse(get_Rss()).cases);
      

      let StyleHead = {
         textAlign: "center",
         color: "black",
         fontSize: '21px',
      }

      let numfiles = 0;
      let numincidents = 0;

      let proc_H3 = '50%';

      if (this.state.Object != null) {
         numfiles = this.state.Object.numfiles;
         numincidents = this.state.Object.numincidents;
         
      }
      if(numfiles == 0){
         numfiles =387;
      }
      if(numincidents == 0){
         numincidents =502;
      }

      let err = null;
      if (this.state.isExistError) {
         err = 'Ошибка! Сервер не ответил!';
      }

      if (this.state.mass_Inc == null) {
         if (J_testValeu.length > 0) {
            let _mass_Inc = new Array();
            for (const iterator of J_testValeu) {
               _mass_Inc.push({ id: iterator.id, IsUse: true });
            }
            this.setState({ mass_Inc: _mass_Inc });
         }
      } else {
         if (J_testValeu.length > 0) {
            for (const Item of J_testValeu) {
               for (const item of this.state.mass_Inc) {
                  if (Item.id == item.id) {
                     Item.checked = item.IsUse;
                     break;
                  }
               }
            }
         }
      }

      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td></td>
                     {this.state.isExistError
                        ? (<W_head header={err} equal='right' color='red' />)
                        : (<W_head header={this.props.header} equal='right' />)
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

                     <td style={StyleHead}>
                        {numfiles}
                     </td>
                     <td style={StyleHead}>
                        {numincidents}
                     </td>
                     <td>
                        <center>
                           <W_circle N_text={proc_H3} proc='true' />
                        </center>
                     </td>
                     <td>
                        <center>
                           <W_sectorCircle data={J_testValeu} proc='true'
                              
                              update_mass_Inc={this.update_mass_Inc}
                           />
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
