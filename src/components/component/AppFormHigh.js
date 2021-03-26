import {
  IonBackButton,
  IonButton,
  
  IonInput,
  IonItem,
  IonLabel,
  IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


import { postIncidence } from '../../redux/accion/petition';
import { removeError, setErrorAccion } from '../../redux/accion/ui';
import AppHeader from './AppHeader';

import '../css/AppFormHigh.css';
import '../../index.css';
import moment from 'moment';

export const AppFormHigh = () => {
  const dateMoment = moment().format('LLL');
  const dispach = useDispatch();
  const [form, setForm] = useState();
  const [operator, setOperator] = useState();
  const [date, setDate] = useState();
  const [text, setText] = useState();
  const { msgError } = useSelector((state) => state.ui);
  const history = useHistory();

  const handlesubmitFormHigh = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispach(postIncidence(form, operator, date, text));
      history.push('/incidence');
    }
  };
  const isFormValid = () => {
    if (form?.length <= 3 || form === undefined || form?.length >= 20) {
      dispach(
        setErrorAccion('La incidencia debe  tener entre 3 y 20 caracteres')
      );

      return false;
    } else if (operator?.length <= 1 || operator === undefined) {
      dispach(setErrorAccion('El campo operador es requerido'));

      return false;
    } else if (text.length >= 50) {
      dispach(
        setErrorAccion('El campo detalle  debe ser menor  a  50 caracteres')
      );
    }
    dispach(removeError());
    return true;
  };

  return (
    <div>
      <IonToolbar>
        <IonBackButton slot="start" className="arrow" defaultHref="incidence" />
      </IonToolbar>
      <AppHeader title="Alta de incidencia" />

      <form onSubmit={handlesubmitFormHigh}>
        {msgError && <div className="alert">{msgError}</div>}
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
          <IonLabel value={date} onIonChange={(e) => setDate(e.detail.value)}>
            {' '}
            Fecha de inspeccion: {dateMoment}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonInput
            placeholder="Detalles"
            value={text}
            onIonChange={(e) => setText(e.detail.value)}
          ></IonInput>
        </IonItem>

        <IonButton className="btn" expand="block" type="submit" color="none">
          Alta
        </IonButton>
      </form>
    </div>
  );
};