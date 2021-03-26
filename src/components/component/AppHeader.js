import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import '../css/AppHeader.css';

const AppHeader = ({ title }) => {
  return (
    <div className="margin-bottom">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};

export default AppHeader;
