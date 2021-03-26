import { IonButton, IonIcon, IonInput, IonItem } from '@ionic/react';
import { useState } from 'react';
import { eye, eyeOff, person } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { removeError, setErrorAccion } from '../../redux/accion/ui';
import { starLoginUserPasswoer } from '../../redux/accion/auth';
import AppHeader from './AppHeader';

import '../css/AppLogin.css';
import { useUsers } from '../../hooks/useUsers';
import { getAxios } from '../../services/usersService';

const AppLogin = () => {
  const { msgError } = useSelector((state) => state.ui);
  const history = useHistory();
  const dispach = useDispatch();

  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const validatorUser = useUsers();

  const handleChangeShow = () => {
    setShowPassword(true);
  };

  const handleChangeHidden = () => {
    setShowPassword(false);
  };

  const name = validatorUser.map((user) => {
    return user;
  });
  const pass = name.filter((pas)=>{
    return pas.id
  })



  const onSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispach(starLoginUserPasswoer(user, password));

      history.push('/incidence');
    }
  };

  const isFormValid = () => {
    if (user !== name.length) {
      dispach(setErrorAccion('  nombre  no coincide'));

      return false;
    } else if (password !== name) {
      dispach(setErrorAccion('Contraseña  no coinciden'));

      return false;
    }

    dispach(removeError());
    return true;
  };
  return (
    <>
      <AppHeader title="Inicio de sección" />
      <div className="container">
        {msgError && <div className="alert">{msgError}</div>}
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
              <IonIcon
                onClick={handleChangeShow}
                icon={eye}
                slot="end"
              ></IonIcon>
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
          <IonButton
            className="btn"
            color="none"
            onClick={() => history.push('/register')}
          >
            Date de Alta
          </IonButton>
        </form>
      </div>
    </>
  );
};

export default AppLogin;
