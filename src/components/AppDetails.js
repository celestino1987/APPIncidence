import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonLifeCycleContext,
  IonList,
  IonTextarea,
} from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useUserById } from '../hooks/useUserById';
import { useUsers } from '../hooks/useUsers';
import {getId} from '../services/usersService'

export const AppDetails = () => {
const [disabled,setDisabled] = useState(true)
  const user = useUserById(useParams().id)


  return (
    <>
      
        <IonList disabled={disabled}>
          <IonItem>
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
          </IonItem>
          <IonItem>
            <IonLabel>Incidencia: {user.data?.incidence}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Operador: {user.data?.operator}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Fecha : {user.data?.date}</IonLabel>
          </IonItem>
          <IonItem>
            <IonTextarea disabled={disabled} >Detalles: {user.data?.detail}</IonTextarea>
          </IonItem>
        </IonList>
    
    </>
  );
};
