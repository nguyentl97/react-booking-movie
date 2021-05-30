import { Switch, Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Template from './templates/Template'
import Home from './pages/home/Home';
import CustomerAccount from './pages/customer/CustomerAccount';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">

        <Switch>
          <Template path="/trangchu" component={Home} />

          {/* Nguyen's implementation */}
          <Route path="/ThongTinCaNhan" component={CustomerAccount}></Route>
          {/* End Nguyen's implementation */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
