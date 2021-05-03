import { Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Template from './templates/Template'
import Home from './pages/home/Home';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">

        <Switch>
          <Template path="/trangchu" component={Home} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
