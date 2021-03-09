import {
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
 
} from '@ionic/react';
import { useState } from 'react';
import { eye, eyeOff, person } from 'ionicons/icons';
import './AppLogin.css';

import { useDispatch } from 'react-redux';
import {  starLoginUserPasswoer } from '../redux/accion/auth';
import { useHistory } from 'react-router';
import AppHeader from './AppHeader';




const AppLogin = () => {
  const history= useHistory()
  const dispach =  useDispatch()

  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeShow = () => {
    setShowPassword(true);
  };

  const handleChangeHidden = () => {
    setShowPassword(false);
  };

  const onSubmit = (e)  =>{
      e.preventDefault()
    dispach(starLoginUserPasswoer(user,password))
    history.push('/incidence')
    

 
  }

  return (
    <>
      <AppHeader title="Inicio de sección" />
    <div className="container">
      <form onSubmit={onSubmit}>
      <IonItem>
        <IonInput
          type="user"
          placeholder="Usuario"
         value={user}
         onIonChange={(e) => setUser(e.detail.value)}

          clearInput
          ></IonInput>
        <IonIcon icon={person} slot="end" />
      </IonItem>
      <IonItem>
        {showPassword ? (
          <IonIcon
          onClick={handleChangeHidden}
          icon={eyeOff}
          slot="end"
          ></IonIcon>
          ) : (
            <IonIcon onClick={handleChangeShow} icon={eye} slot="end"></IonIcon>
            )}
        <IonInput
          type={showPassword ? 'user' : 'password'}
          value={password}
          placeholder="Contraseña"
          onIonChange={(e) => setPassword(e.detail.value)}
          clearInput
          >
          {' '}
        </IonInput>
      </IonItem>

      <IonButton className="btn" color="none" type="submit">
        Acceder
      </IonButton>
      <IonButton className="btn" color="none" onClick={() =>
        history.push('/register')
    }>Date de Alta</IonButton>
      
          </form>
    </div>
    </>
  );
};

export default AppLogin;
