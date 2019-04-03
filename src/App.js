import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import MainWindow from './MainWindow.jsx'

import Header from './core/Header';


class About extends React.Component {
   render() {
      return <h2>О сайте</h2>;
   }
}
class NotFound extends React.Component {
   render() {
      return <h2>Ресурс не найден</h2>;
   }
}

class Main extends React.Component {
   render() {
      return <h2>Главная</h2>;
   }
}

class App extends Component {
   render() {
      return (
         <div>
            <Header />
            <div className="content">
               <Router>
                  <div>
                     <nav>
                        <ul className='hr'>
                           <li>
                              <Link to="/">Main</Link>
                           </li>
                           <li>
                              <Link to="/about/">About</Link>
                           </li>
                           <li>
                              <Link to="/users/">NotFound</Link>
                           </li>
                        </ul>
                     </nav>

                     <Route path="/" exact component={Main} />
                     <Route path="/about/" component={About} />
                     <Route path="/users/" component={NotFound} />
                  </div>
               </Router>
            </div>
         </div>
      );
   }
}
export default App;
