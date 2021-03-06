import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is header</p>
          <div>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Somewhere else</Link>
          </div>
        </div>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
