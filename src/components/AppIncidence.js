import {
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonButton,
  IonAvatar,
} from '@ionic/react';
import React, { useEffect } from 'react';
import AppHeader from './AppHeader';

import { trash, eyedrop, folder } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getIncidenceAll, incDelete } from '../redux/accion/petition';
import { getIncidence } from '../services/usersService';
import { useUsers } from '../hooks/useUsers';

export const AppIncidence = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const Incidence = useUsers();

  return (
    <>
      <AppHeader title="Incidencias abiertas" />

      <IonList>
        {Incidence?.map((user) => (
          <IonItem key={user.id}>
            <IonLabel>Incidencia: {user.incidence}</IonLabel>
            <IonLabel>Operador: {user.operator}</IonLabel>
            <IonIcon
              icon={folder}
              onClick={() => history.push('./details/' + user.id)}
            ></IonIcon>
            <IonIcon
              icon={trash}
              onClick={() => dispatch(incDelete(user.id))}
            ></IonIcon>
          </IonItem>
        ))}
      </IonList>
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
