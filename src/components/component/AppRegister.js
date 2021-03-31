import {
  IonBackButton,
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import { eye, eyeOff, person } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';

import { removeError, setErrorAccion } from '../../redux/accion/ui';
import AppHeader from './AppHeader';
import { postAxios } from '../../redux/accion/petition';

import '../css/AppRegister.css';
import { useHistory } from 'react-router';

export const AppRegister = () => {
  const dispach = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [text, setText] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const handleChangeShow = () => {
    setShowPassword(true);
  };

  const handleChangeHidden = () => {
    setShowPassword(false);
  };

  const HandleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispach(postAxios(text, password));
      history.push('/');
    }
  };
  /**
   * Formulario Validacion
   */

  const isFormValid = () => {
    if (text?.length <= 3 || text === undefined) {
      dispach(setErrorAccion('Name Is requiered'));

      return false;
    } else if (
      password !== password2 ||
      password?.length <= 5 ||
      password === undefined
    ) {
      dispach(
        setErrorAccion(
          'Las  contraseña deben ser identicas y  mayores  a 5 caracteres'
        )
      );

      return false;
    }
    dispach(removeError());
    return true;
  };

  return (
    <>
      <IonToolbar>
        <IonBackButton slot="start" className="arrow" defaultHref="../login" />
      </IonToolbar>
      <AppHeader title="Registro" />
      <div className="container">
        <form className="flex-colum" onSubmit={HandleRegister}>
          {msgError && <div className="alert">{msgError}</div>}
          <IonItem>
            <IonInput
              type="text"
              placeholder="Usuario"
              value={text}
              onIonChange={(e) => setText(e.detail.value)}
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
              type={showPassword ? 'text' : 'password'}
              value={password}
              name="pass1"
              placeholder="Contraseña"
              onIonChange={(e) => setPassword(e.detail.value)}
              clearInput
            >
              {' '}
            </IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type={showPassword ? 'text' : 'password'}
              value={password2}
              name="pass2"
              placeholder="Contraseña"
              onIonChange={(e) => setPassword2(e.detail.value)}
              clearInput
            >
              {' '}
            </IonInput>
          </IonItem>

          <IonButton className="btn" color="none" type="submit">
            Registrate
          </IonButton>
        </form>
      </div>
    </>
  );
};
