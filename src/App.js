import React, { Component } from 'react';
import MainWindow from './MainWindow.jsx'
import Header from './core/Header';

class App extends Component {
   render() {
      return (
         <div>
            <Header/>
            <div className="content">
               <MainWindow/>
            </div>
         </div>
      );
   }
}
export default App;
