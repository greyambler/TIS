import React, { Component, PropTypes } from 'react';

class Header extends Component {
   constructor(props, context) {
      super(props, context);
   }
   render() {
      return (
         <div className="header">
            <div className="header_Inner">
               <img className="header_Img"
                  src={'../images/favicon.ico'}
                  alt="React"
                  width="30"
                  height="30"
               />
               <div className="header_Text">
                  <h3> Временная ИС по системным инцидентам</h3>
               </div>

            </div>
         </div>
      );
   }
}

export default Header;
