import {
  IonBackButton,
  IonItem,
  IonLabel,
  IonList,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';

import { useUserById } from '../../hooks/useUserById';
import AppHeader from './AppHeader';

export const AppDetails = () => {
  const user = useUserById(useParams().id);

  return (
    <>
      <IonToolbar>
        <IonBackButton
          slot="start"
          className="arrow"
          defaultHref="../incidence"
        />
      </IonToolbar>
      <AppHeader title="Detalles" />

      <IonList>
        <IonItem>
          <IonLabel>Incidencia: {user.data?.incidence}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Operador: {user.data?.operator}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel> Fecha de incidencia: {user.data?.date} </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Detalles: {user.data?.detail}</IonLabel>
        </IonItem>
      </IonList>
    </>
  );
};
