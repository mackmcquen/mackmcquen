import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Mack from './Mack';
import '../css/App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={ '/' } component={ Mack } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
