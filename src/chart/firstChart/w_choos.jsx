import React, { Component, PropTypes } from 'react';
import './first.css';

export default class w_choos extends Component {
   constructor(props) {
      super(props);
      this.Radio_Check = this.Radio_Check.bind(this);
      this.RadioCheck = this.RadioCheck.bind(this);

      this.state = {
         typeChart: this.props.typeChart,
      }
   }

   componentDidMount() {
      this.Radio_Check();
   }

   Radio_Check() {
      this.props.updateType(this.state.typeChart);
      this.RadioCheck(this.state.typeChart);
   }

   RadioCheck(_typeChart) {
      var inp = document.getElementsByName('r');
      for (var i = 0; i < inp.length; i++) {
         if (inp[i].type == "radio" && inp[i].value == _typeChart) {
            inp[i].checked = true;
         }
      }
   }

   render() {
      this.RadioCheck(this.props.typeChart)
      return (
         <table className="contrRigth">
            <tbody>
               <tr><th>График</th></tr>
               <tr>
                  <td>
                     <input type='radio' name="r" value="cashir"
                        onClick={({ typeChart }) => this.setState({ typeChart: "cashir" }, this.Radio_Check)} />по кассирам
                  </td>
               </tr>
               <tr>
                  <td>
                     <input type='radio' name="r" value="kass"
                        onClick={({ typeChart }) => this.setState({ typeChart: "kass" }, this.Radio_Check)} />по кассам
                  </td>
               </tr>
               {this.props.NeedCode != '211' &&
               <tr>
                  <td>
                     <input type='radio' name="r" value="month"
                        onClick={({ typeChart }) => this.setState({ typeChart: "month" }, this.Radio_Check)} />по  месяцу
                  </td>
               </tr>
               }
               {this.props.NeedCode == '211' &&
               <tr>
                  <td>
                     <input type='radio' name="r" value="month"
                        onClick={({ typeChart }) => this.setState({ typeChart: "month" }, this.Radio_Check)} />по устройству за месяцу
                  </td>
               </tr>
               }
               {this.props.NeedCode == '211' &&
               <tr>
                  <td>
                     <input type='radio' name="r" value="day"
                        onClick={({ typeChart }) => this.setState({ typeChart: "day" }, this.Radio_Check)} />по устройству за день
                  </td>
               </tr>
               }
               <tr>
                  <td>
                     <input type='radio' name="r" value="azs"
                        onClick={({ typeChart }) => this.setState({ typeChart: "azs" }, this.Radio_Check)} />по АЗК
                  </td>
               </tr>
               {!(this.props.NeedCode != null) &&
                  <tr>
                     <td>
                        <input type='radio' name="r" value="code"
                           onClick={({ typeChart }) => this.setState({ typeChart: "code" }, this.Radio_Check)} />по коду ошибки
                  </td>
                  </tr>
               }

            </tbody>
         </table>
      );
   }
}
