import React, { Component, PropTypes } from 'react';

const _Debuge = true;

class Header extends Component {
   constructor(props, context) {
      super(props, context);
   }
   render() {
      return (
         <div className="header">
            <div className="header_Inner">
               {_Debuge ?
                  (
                     <nav>
                        <ul class="topmenu">
                           <li><a href="" class="active">
                              <div>
                                 <img className="header_Img"
                                    src={'../images/favicon.ico'}
                                    alt="React"
                                    width="30"
                                    height="30"
                                 />
                              </div>

                              <span class="fa fa-angle-down"></span></a>
                              <ul class="submenu">
                                 <li><a href="">меню второго уровня</a>
                                 </li>
                                 <li><a href="">меню второго уровня<span class="fa fa-angle-down"></span></a>
                                    <ul class="submenu">
                                       <li><a href="">меню третьего уровня</a></li>
                                       <li><a href="">меню третьего уровня</a></li>
                                       <li><a href="">меню третьего уровня</a></li>
                                    </ul>
                                 </li>
                                 <li><a href="">меню второго уровня</a></li>
                              </ul>
                           </li>
                        </ul>
                     </nav>
                  ) : (
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
                  )
               }
               <div className="header_Text">
                  <h3>1111 Временная ИС по системным инцидентам</h3>
               </div>

            </div>
         </div>
      );
   }
}

export default Header;
/*

<nav>
               <ul class="topmenu">
                  <li><a href="" class="active">
                  <img className="header_Img"
                  src={'../images/favicon.ico'}
                  alt="React"
                  width="30"
                  height="30"
               />
                  <span class="fa fa-angle-down"></span></a>
                     <ul class="submenu">
                        <li><a href="">меню второго уровня</a>
                        </li>
                        <li><a href="">меню второго уровня<span class="fa fa-angle-down"></span></a>
                           <ul class="submenu">
                              <li><a href="">меню третьего уровня</a></li>
                              <li><a href="">меню третьего уровня</a></li>
                              <li><a href="">меню третьего уровня</a></li>
                           </ul>
                        </li>
                        <li><a href="">меню второго уровня</a></li>
                     </ul>
                  </li>
               </ul>
            </nav>

*/