import { IonButton, IonInput, IonItem, IonItemDivider, IonTextarea, IonTitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postIncidence } from '../redux/accion/petition';
import AppHeader from './AppHeader';
import './AppFormHigh.css';
import { arrowBack } from 'ionicons/icons';

export const AppFormHigh = () => {
  const dispach = useDispatch();
  const [form, setForm] = useState();
  const [operator, setOperator] = useState();
  const [date, setDate] = useState();
  const [text, setText] = useState();
  
  const handlesubmitFormHigh = (e) => {
    e.preventDefault();
    
    dispach(postIncidence(form, operator, date,text));
  };
  

  return (
    <div>
      <AppHeader title="Alta de incidencia" />
  
      <form onSubmit={handlesubmitFormHigh}>
        <IonItem>
          <IonInput
            type="text"
            placeholder="Incidencia :"
            value={form}
            onIonChange={(e) => setForm(e.detail.value)}
            clearInput
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            type="text"
            placeholder="Operador :"
            value={operator}
            onIonChange={(e) => setOperator(e.detail.value)}
            clearInput
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            type="number"
            placeholder="Fecha limite :"
            value={date}
            onIonChange={(e) => setDate(parseInt(e.detail.value, 10))}
            clearInput
          ></IonInput>
        </IonItem>
    
        <IonItem>
            <IonTextarea placeholder="Detalles" value={text} onIonChange={e => setText(e.detail.value)}></IonTextarea>
          </IonItem>
      
        <IonButton className="btn" expand="block" type="submit" color="none">
          Alta
        </IonButton>
      </form>
    </div>
  );
};
