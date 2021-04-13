import {
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonButton,
  IonLoading,
} from '@ionic/react';

import { folder, logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import AppHeader from './AppHeader';
import { AppAlert } from './AppAlert';


import '../css/AppIncidence.css';
import { getIncidenceAll } from '../../redux/accion/petition';

export const AppIncidence = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const dispach = useDispatch();
  const history = useHistory();
  let name = localStorage.getItem('name');
  dispach(getIncidenceAll());

  const incidences = useSelector((state) => state.post.posts);

  return (
    <>
      <div className="flex">
        <IonButton
          color="none"
          className="iconLogOut"
          onClick={() => setShowAlert1(true)}
        >
          {' '}
          <IonIcon slot="end" icon={logOutOutline}></IonIcon>
        </IonButton>
        <IonLabel>
          Bienvenido : <b>{name}</b>
        </IonLabel>
      </div>
      <AppHeader title="Incidencias abiertas" />
      <AppAlert showAlert1={showAlert1} setShowAlert1={setShowAlert1} />

      <IonList>
        {incidences.map(
          (inc) =>
            name === inc.operator && (
              <IonItem key={inc.id}>
                <IonLabel>Incidencia : {inc.incidence}</IonLabel>
                <IonButton
                  className="btnEnviar"
                  color="none"
                  onClick={() => history.push('./send/' + inc.id)}
                >
                  Enviar
                </IonButton>

                <IonIcon
                  className="icon icon2"
                  icon={folder}
                  onClick={() => history.push('./details/' + inc.id)}
                ></IonIcon>
              </IonItem>
            )
        )}
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
