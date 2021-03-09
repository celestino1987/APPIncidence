import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router';
import './AppHeader.css';

const AppHeader = ({ title }) => {
  const history = useHistory()
  return (
    <div className="margin-bottom">
      <IonHeader>
        <IonToolbar>

        <IonIcon icon={arrowBack} onClick={() => history.push('./incidence')} ></IonIcon>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};

export default AppHeader;
