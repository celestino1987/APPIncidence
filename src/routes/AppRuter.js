import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';
 
  import '../theme/variables.css';
  import { AppRegister } from '../components/AppRegister';
  import { AppIncidence, AppIncspections } from '../components/AppIncidence';
import AppLogin from '../components/AppLogin';
import { AppFormHigh } from '../components/AppFormHigh';
import { AppDetails } from '../components/AppDetails';

  
// /* Core CSS required for Ionic components to work properly */
// import '../@ionic/react/css/core.css';
// 
//
// import '../@ionic/react/css/normalize.css';
// import '../@ionic/react/css/structure.css';
// import '../@ionic/react/css/typography.css';
// 
// /* Optional CSS utils that can be commented out */
// import '../@ionic/react/css/padding.css';
// import '../@ionic/react/css/float-elements.css';
// import '../@ionic/react/css/text-alignment.css';
// import '../@ionic/react/css/text-transformation.css';
// import '../@ionic/react/css/flex-utils.css';
// import '../@ionic/react/css/display.css';
  
  /* Theme variables */
  
  const AppRouter = () => (
    <Router>
      <Switch>
        <Route exact path="/login" component={AppLogin} />
  
        <Route path="/register" component={AppRegister} exact />
        <Route path="/incidence" component={AppIncidence} exact />
        <Route path="/formHigh" component={AppFormHigh} exact />
        <Route path="/details/:id" component={AppDetails} exact />
        <Redirect to="/login"></Redirect>
      </Switch>
    </Router>
  );
  
  export default AppRouter;
  