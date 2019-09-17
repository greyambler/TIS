import React, { Component, PropTypes } from 'react';

import HeaderCh_Main from './chart/HeaderCh_Main.jsx';

import Dolay_IncReg from './chart/Dolay_IncReg.jsx';


import moment from 'moment';


//import { Dropdown } from 'semantic-ui-react'

const _Debuge = false;


export default class MainWindow extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width,
         W_Height: this.props.w_Height,
         Object: null,
      }
   }

   updateData = ({ startDate, endDate, NumberChart }) => {
      this.props.updateData({ startDate, endDate, NumberChart });
   }

   async componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
   }

   render() {
      return (
         <div>
         {/**/}
            <HeaderCh_Main numObjects={this.state.Object} Rss={this.props.Rss}
               S_Date_Head={this.props.S_Date_Head} E_Date_Head={this.props.E_Date_Head}
               updateData={this.updateData}
            />


            <table>
               <tbody>
                  <tr className="tr_Chart">
                     <td className='td_C_Chart' width={(this.state.W_Width - 5)}>
                        <Dolay_IncReg
//                           dateStart={this.props.S_Date_M1}
//                           dateStop={this.props.E_Date_M1}
                           w_Width={this.state.W_Width} regions={this.props.regions}
                           updateData={this.updateData}
                           history={this.props.history}
                           />
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}


/*


<td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <Test_Chart Rss={this.props.Rss} RssIncident={this.props.RssIncident}
                           dateStart={this.props.S_Date_33} dateStop={this.props.E_Date_33}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                           NeedCode={'33'} />
                     </td>



<td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <Second_Chart Rss={this.props.Rss} RssIncident={this.props.RssIncident}
                           dateStart={this.props.S_Date_2} dateStop={this.props.E_Date_2}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                           NeedCode={'211'}
                        />
                     </td>


<td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <First_Chart Rss={this.props.Rss} RssIncident={this.props.RssIncident}
                           dateStart={this.props.S_Date_33} dateStop={this.props.E_Date_33}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                           NeedCode={'33'} />
                     </td>

 <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <First_Chart Rss={this.props.Rss} RssIncident={this.props.RssIncident}
                           dateStart={this.props.S_Date_211} dateStop={this.props.E_Date_211}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                           NeedCode={'211'} />
                     </td>








                        <Fourth_Chart
                           dateStart={this.props.S_Date_4} dateStop={this.props.E_Date_4}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}/>


<Third_Chart
                           dateStart={this.props.S_Date_3} dateStop={this.props.E_Date_3}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                        />




*/