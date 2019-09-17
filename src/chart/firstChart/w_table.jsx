import _ from 'lodash'
import React, { Component, PropTypes } from 'react';
import ReactTable from "react-table";

import ReactExport from "react-data-export";
import Moment from 'moment';

import W_table_modal from './w_table_modal.jsx';

//import ModalModalExample from '../../save/ModalModalExample.jsx';
//import W_table_modal from './w_table_incid_All.jsx';

import { Rss_BackInc, get_Date } from '../../core/core_Function.jsx';
import { Button, Header, Image, Modal, Input, Container } from 'semantic-ui-react'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Hello extends React.Component {
   render() {
      return <h1>Привет, {this.props.name}</h1>;
   }
}

export default class w_table extends Component {
   constructor(props) {
      super(props);
      this.Filter_DataExcel = this.Filter_DataExcel.bind(this);
      this.get_DatFilters = this.get_DatFilters.bind(this);

      this.tick = this.tick.bind(this);

      this.state = {
         Data: this.props.Data,
         Excel_Data: this.props.Data,
         Message_ID: "",
         //Data_Mess: null,
         Data_ID: null,
         IDCheck: null,
      }
   }
   componentDidMount() {
      this.setState({ Data: this.props.Data });
   }
   componentDidUpdate(prevProps) {
      if (this.props.Data != prevProps.Data) {
         this.setState({ Data: this.props.Data });
         this.setState({ Excel_Data: this.props.Data });
      }
   }
   Filter_DataExcel(e) {
      let _excel_Data = this.props.Data;
      for (const itemF of e) {
         _excel_Data = this.get_DatFilters(_excel_Data, itemF);
      }
      this.setState({ Excel_Data: _excel_Data });
   }


   get_DatFilters(_E_Data, itemF) {
      let _return_Data = new Array();
      if (itemF != null) {
         let index = 0;
         for (const iterator of _E_Data) {
            switch (itemF.id) {
               case 'Datetime':
                  {
                     if (iterator.Datetime.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'EVENT_TYPE':
                  {
                     if (iterator.EVENT_TYPE.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'SHOP_NUM':
                  {
                     if (iterator.SHOP_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'KASS_NUM':
                  {
                     if (iterator.KASS_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }

               case 'SHIFT_NUM':
                  {
                     if (iterator.SHIFT_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }

               case 'CASHIER_ID':
                  {
                     if (iterator.CASHIER_ID.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'EVENT_NAME':
                  {
                     if (iterator.EVENT_NAME.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Duration':
                  {
                     if (iterator.Duration.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Key':
                  {
                     if (iterator.Key.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'DateKey':
                  {
                     if (iterator.DateKey.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'TimeKey':
                  {
                     if (iterator.TimeKey.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'SHOP_NUM':
                  {
                     if (iterator.SHOP_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'KASS_NUM':
                  {
                     if (iterator.KASS_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'CASHIER_ID':
                  {
                     if (iterator.CASHIER_ID.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Duration':
                  {
                     if (iterator.Duration.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'ratedFreq':
                  {
                     if (iterator.ratedFreq.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'F':
                  {
                     if (iterator.F.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'M':
                  {
                     if (iterator.M.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Rang':
                  {
                     if (iterator.Rang.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'М2':
                  {
                     if (iterator.М2.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Rang2_bus':
                  {
                     if (iterator.Rang2_bus.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               default:
                  break;
            }
         }
      }
      return _return_Data;
   }


   closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
   }


   open(rowInfo) {
      if (rowInfo != null) {
         this.tick(rowInfo.original.id);
         //this.setState({ open: true });
      }
      else {
         this.setState({ open: false });
      }
   }
   async tick(id) {
      let rss = Rss_BackInc + id;
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
            if (Jsons != null && Jsons.events != undefined) {
               this.setState({ Data_ID: Jsons, open: true, IDCheck: id });
               
            }
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




   close = () => this.setState({ open: false });

   render() {

      let data = (this.state.Data_ID != null)?this.state.Data_ID.events:this.state.Data_ID;
      //let data = get_Date();
      let size = 'fullscreen';
      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td width="100%" align="right">
                        <ExcelFile element={<button><img src={'../images/Office Excel.ico'} width='25' /></button>}>
                           <ExcelSheet data={this.state.Excel_Data} name="Employees">
                              <ExcelColumn label="Дата" value={(col) =>
                                 Moment(col.Datetime).local('ru').format('DD.MM.YYYY hh:mm:ss')} />

                              <ExcelColumn label="№ АЗК" value="SHOP_NUM" />
                              <ExcelColumn label="№ кассы" value="KASS_NUM" />
                              <ExcelColumn label="Смена" value="SHIFT_NUM" />
                              {/*<ExcelColumn label="Кассир" value="CASHIER_ID" />*/}
                              <ExcelColumn label="Тип" value="EVENT_TYPE" />
                              <ExcelColumn label="Название типа" value="EVENT_NAME" />
                              <ExcelColumn label="Продолжительность" value="Duration" />
                              <ExcelColumn label="Дата" value="DateKey" />
                              <ExcelColumn label="Время" value="TimeKey" />
                           </ExcelSheet>
                        </ExcelFile>
                     </td>
                  </tr>

                  <tr>
                     <td>
                        <ReactTable
                           onFilteredChange={this.Filter_DataExcel}
                           data={this.state.Data}
                           columns={[

                              {
                                 Header: "",
                                 columns: [
                                    {
                                       id: "Datetime",
                                       Header: "Дата",
                                       /*accessor: "Datetime",*/
                                       accessor: d => {
                                          return Moment(d.Datetime)
                                             .local('ru')
                                             .format('DD.MM.YYYY hh:mm:ss')
                                       },
                                    },
                                 ]
                              },
                              {
                                 Header: "АЗК",
                                 columns: [
                                    {
                                       Header: "№ АЗК",
                                       accessor: "SHOP_NUM"
                                    },
                                    {
                                       Header: "№ кассы",
                                       accessor: "KASS_NUM"
                                    },
                                    {
                                       Header: "Смена",
                                       accessor: "SHIFT_NUM"
                                    }/*,
                                    {
                                       Header: "Кассир_CASHIER_ID",
                                       accessor: "CASHIER_ID"
                                    }*/,
                                    {
                                       Header: "Идентификатор кассира",
                                       accessor: "cashier_idid"
                                    },

                                    {
                                       Header: "ФИО кассира",
                                       accessor: "cashier_name"
                                    },
                                    {
                                       Header: "Тип",
                                       accessor: "EVENT_TYPE"
                                    }
                                 ]
                              }

                              /*,
                              {
                                 Header: "События",
                                 columns: [
                                    {
                                       Header: "Тип",
                                       accessor: "EVENT_TYPE"
                                    },
                                    /*
                                    {
                                       Header: "Название типа",
                                       accessor: "EVENT_NAME"
                                    },
                                    {
                                       Header: "Продолжительность",
                                       accessor: "Duration"
                                    },
                                    {
                                       Header: "Дата",
                                       accessor: "DateKey"
                                    },
                                    {
                                       Header: "Время",
                                       accessor: "TimeKey"
                                    }
                                    
                                 ]
                              }
                              */
                           ]}
                           getTrProps={(state, rowInfo, column, instance) => {
                              return {
                                 onClick: () => {
                                    this.open(rowInfo);
                                 }
                              }
                           }}

                           defaultPageSize={10}

                           filterable={true}
                           show={false}
                           nextText={'>'}
                           previousText={'<'}
                           rowsText={'строк'}
                           width={150}

                           pageText={'стр.'}
                           ofText={'из'}
                           className="-striped -highlight">
                        </ReactTable>
                     </td>
                  </tr>
               </tbody>
            </table>
            <Modal  size={size} open={this.state.open} onClose={this.close} closeIcon>
               <Modal.Header>Данные от строке id = {this.state.IDCheck}</Modal.Header>
               <Container>
                  <W_table_modal Data={data} ID_ROW={this.state.IDCheck} />
               </Container>
            </Modal>
         </div>
      );
   }
}



/*
            <Modal open={this.state.open} onClose={this.close}>
               <Modal.Header>Select a Photo</Modal.Header>
               <Modal.Content image>
                  <Image wrapped size='tiny' src='./images/gun.png' />
                  <Modal.Description>
                     <Header>ID</Header>
                     <p> {this.state.Data_Mess} </p>
                  </Modal.Description>
               </Modal.Content>
               <Modal.Actions>
                  <Button primary content='Close' onClick={this.close} />
               </Modal.Actions>
            </Modal>
*/




/*





            <Modal open={this.state.open} onClose={this.close}>
               <Modal.Header>Select a Photo</Modal.Header>
               <Modal.Content image>
                  <Image wrapped size='tiny' src='./images/gun.png' />
                  <Modal.Description>
                     <Header>ID</Header>
                     <p> {this.state.Message_ID} </p>
                  </Modal.Description>

               </Modal.Content>
               <Modal.Actions>
                  <Button primary content='Close' onClick={this.close} />
               </Modal.Actions>



            </Modal>




const ModalExampleScrollingContent = () => (
  <Modal trigger={<Button>Scrolling Content Modal</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

      <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        {_.times(8, i => (
          <Image key={i} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
        ))}
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>



*/