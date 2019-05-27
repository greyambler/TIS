import React, { Component, PropTypes } from 'react';

export default class w_choos extends Component {
   constructor(props) {
      super(props);
      this.Radio_Check = this.Radio_Check.bind(this);
      this.state = {
         typeChart: "cashir",
      }
   }
   componentDidMount() {
      this.Radio_Check();
   }
   Radio_Check() {
      this.props.updateType( this.state.typeChart);
      var inp = document.getElementsByName('r');
      for (var i = 0; i < inp.length; i++) {
         if (inp[i].type == "radio" && inp[i].value == this.state.typeChart) {
            inp[i].checked = true;            
         }
      }
   }
   render() {
      return (
         <table>
            <tbody>
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
               <tr>
                  <td>
                     <input type='radio' name="r" value="date"
                        onClick={({ typeChart }) => this.setState({ typeChart: "date" }, this.Radio_Check)} />по датам
                  </td>
               </tr>
               <tr>
                  <td>
                     <input type='radio' name="r" value="azs"
                        onClick={({ typeChart }) => this.setState({ typeChart: "azs" }, this.Radio_Check)} />по азс
                  </td>
               </tr>
               <tr>
                  <td>
                     <input type='radio' name="r" value="code"
                        onClick={({ typeChart }) => this.setState({ typeChart: "code" }, this.Radio_Check)} />по коду
                  </td>
               </tr>
            </tbody>
         </table>
      );
   }
}
