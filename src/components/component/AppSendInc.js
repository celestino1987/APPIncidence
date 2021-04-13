import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  IonToolbar,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { thermometer, caretForward, caretBack } from 'ionicons/icons';
import moment from 'moment';
import { useHistory, useParams } from 'react-router';
import { useDispatch } from 'react-redux';

import AppHeader from './AppHeader';

import '../css/AppSendIcn.css';
import { incDelete } from '../../redux/accion/petition';
import { useUserById } from '../../hooks/useUserById';

moment.locale('es');

export const AppSendInc = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [date, setDate] = useState();
  const [temp, setTemp] = useState(0);
  const [btnup, setBtnup] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const inc = useUserById(useParams().id);
  const history = useHistory();
  const dispatch = useDispatch();
  let dateMoment = moment().format('LLL');
  let changeClass = document.getElementById('prueba');


  const handleChangeNumber = (increase = false) => {
    setTemp((prevTemp) => (increase ? prevTemp + 1 : prevTemp - 1));
  };

  const submit = (e) => {
    e.preventDefault();
    setShowAlert1(true);
  };

  /**condicion para la  temperatura cambie de color */
  if (temp === 0) {
    changeClass?.classList.add('tempBlack');
  } else if (temp <= 4) {
    changeClass?.classList.remove('tempBlack');
    changeClass?.classList.remove('tempOrange');
    changeClass?.classList.add('tempBlue');
  } else if (temp <= 7) {
    changeClass?.classList.remove('tempBlue');
    changeClass?.classList.add('tempOrange');
  } else {
    changeClass?.classList.remove('tempOrange');
    changeClass?.classList.add('tempRed');
  }

  function doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
  }

  useEffect(() => {
    setDisabled(temp > 0 ? false : true);
    setBtnup(temp >= 10 ? true : false);
  }, [temp]);

  return (
    <>
     <IonToolbar>
        <IonBackButton
          slot="start"
        
          defaultHref="../incidence"
        />
      </IonToolbar>
      <AppHeader title="Enviar incidencias terminadas" />
      <form onSubmit={submit}>
        <IonItem>
          <IonInput
            min="0"
            max="10"
            type="number"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          ></IonInput>
          <IonButton
            color="none"
            disabled={disabled}
            onClick={() => {
              handleChangeNumber(false);
            }}
          >
            {' '}
            <IonIcon icon={caretBack} />{' '}
          </IonButton>
          <IonButton
            disabled={btnup}
            color="none"
            onClick={() => {
              handleChangeNumber(true);
            }}
          >
            <IonIcon icon={caretForward} />
          </IonButton>
          <IonIcon id="prueba" icon={thermometer} />
        </IonItem>

        <IonItem>
          <IonLabel value={date} onIonChange={(e) => setDate(e.detail.value)}>
            {' '}
            Fecha de inspeccion: {dateMoment}
          </IonLabel>
        </IonItem>
        <IonButton className="btn" color="none" onClick={() => history.push('/photo')}>
          Photos
        </IonButton>
        <IonButton type="submit" className="btn" color="none" expand="block">
          Enviar{' '}
        </IonButton>

        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass="my-custom-class"
          header={'Confirm!'}
          message={'¿Deseas enviar la incidencia ?'}
          buttons={[
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              },
            },
            {
              text: 'Confirmar',
              handler: () => {
                dispatch(incDelete(inc.data?.id));
                history.push('/incidence');
              },
            },
          ]}
        />
      </form>
    </>
  );
};
