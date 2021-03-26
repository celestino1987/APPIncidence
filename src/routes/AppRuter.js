import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';
 
  import '../theme/variables.css';
  import { AppRegister } from '../components/component/AppRegister';
  import { AppIncidence } from '../components/component/AppIncidence';
import AppLogin from '../components/component/AppLogin';
import { AppFormHigh } from '../components/component/AppFormHigh';
import { AppDetails } from '../components/component/AppDetails';
import { AppSendInc } from '../components/component/AppSendInc';
import { AppPhoto } from '../components/component/AppPhoto';

  
  const AppRouter = () => (
    <Router>
      <Switch>
        <Route exact path="/login" component={AppLogin} />
  
        <Route path="/register" component={AppRegister} exact />
        <Route path="/incidence" component={AppIncidence} exact />
        <Route path="/formHigh" component={AppFormHigh} exact />
        <Route path="/details/:id" component={AppDetails} exact />
        <Route path="/send/:id" component={AppSendInc} exact />
        <Route path="/photo" component={AppPhoto} exact />
        <Redirect to="/login"></Redirect>
      </Switch>
    </Router>
  );
  
  export default AppRouter;
  