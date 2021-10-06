import logo from './logo.svg';
import './App.css';
import {Redirect} from 'react-router';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route path="/game" component={Game}/>
          <Route path="/" component={Home}/>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
