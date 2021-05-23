import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import { Container } from '@material-ui/core';

import Home from './components/Home.jsx'
import './App.css';


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Container maxWidth="sm">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route>404 notfound</Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </>
  );
}

export default App;
