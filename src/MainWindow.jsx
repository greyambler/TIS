import React from 'react';

const _Debuge = false;

function GetDateNow() {
   var date = new Date();
   var day = date.getDate();
   var month = date.getMonth() + 1;
   var year = date.getFullYear();
   if (month < 10) month = "0" + month;
   if (day < 10) day = "0" + day;
   var today = year + "-" + month + "-" + day;
   return today;
}

class MainWindow extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      var today = GetDateNow();

      return (
         <div>
            <table cellpadding="4" cellspacing="1">
               <tr>
                  <td className='td_t1' rowSpan='2' >
                     <fieldset className='space'>
                        <legend width='200px'>    Общие показатели на сегодня   </legend>
                     </fieldset>
                  </td>
                  <td className='td_t2'>
                     <input type='date' className='date_h' value={today} />
                  </td>
               </tr>
               <tr>
                  <td className='td_t3'>
                     <select className='comboBox'>
                        <option>Пункт 1</option>
                        <option>Пункт 2</option>
                     </select>
                  </td>
               </tr>

            </table>


         </div>
      );
   }
}

export default MainWindow;
/*

                     <fieldset className='space'>
                        <legend width='200px'>    Общие показатели на сегодня   </legend>
                     </fieldset>



*/