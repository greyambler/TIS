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
                     <input type='radio' name="r" value="month"
                        onClick={({ typeChart }) => this.setState({ typeChart: "month" }, this.Radio_Check)} />по месяцу
                  </td>
               </tr>
               <tr>
                  <td>
                     <input type='radio' name="r" value="day"
                        onClick={({ typeChart }) => this.setState({ typeChart: "day" }, this.Radio_Check)} />по дням
                  </td>
               </tr>
            </tbody>
         </table>
      );
   }
}
