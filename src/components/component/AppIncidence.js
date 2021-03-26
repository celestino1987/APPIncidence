import {
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonButton,
 
  IonLoading,
} from '@ionic/react';

import {  folder, logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';

import AppHeader from './AppHeader';
import { useUsers } from '../../hooks/useUsers';
import { useState } from 'react';
import '../css/AppIncidence.css';

import { AppAlert } from './AppAlert';

export const AppIncidence = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const history = useHistory();

  const Incidence = useUsers();

  return (
    <>
      <IonButton
        color="none"
        className="iconLogOut"
        onClick={() => setShowAlert1(true)}
      >
        {' '}
        <IonIcon slot="end" icon={logOutOutline}></IonIcon>
      </IonButton>
      <AppHeader title="Incidencias abiertas" />
      <AppAlert showAlert1={showAlert1} setShowAlert1={setShowAlert1} />


    
      <IonList>
        {Incidence?.map((user) => (
          <IonItem key={user.id}>
            <IonLabel>Incidencia : {user.incidence}</IonLabel>
            <IonButton
              className="btnEnviar"
              color="none"
              onClick={() => history.push('./send/' + user.id)}
              >
              Enviar
            </IonButton>

            <IonIcon
              className="icon icon2"
              icon={folder}
              onClick={() => history.push('./details/' + user.id)}
              ></IonIcon>
          </IonItem>
        ))}
      </IonList>
     
      <IonLoading
      cssClass="my-custom-class"
      isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={1000}
        />

      <IonButton
      className="btn"
      expand="block"
      color="none"
      onClick={() => history.push('/formHigh')}
      >
        Abrir Incidencia
      </IonButton>
    </>
  );
};
