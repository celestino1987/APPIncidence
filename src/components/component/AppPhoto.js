import  { useState } from 'react';
import { camera, trash, close } from 'ionicons/icons';
import {
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonActionSheet,
} from '@ionic/react';

import { usePhotoGalery } from '../../hooks/usePhotoGalery';

export const AppPhoto = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGalery();
  const [photoToDelete, setPhotoToDelete] = useState();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Galery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => {
              console.log(photos)
              return (
              <IonCol size="6" key={index}>
                <IonTitle> {'Photo ' + index + 1}</IonTitle>
                <IonImg
                  onClick={() => setPhotoToDelete(photo)}
                  src={photo.base64}
                />
              </IonCol>
            )})}
          </IonRow>
        </IonGrid>
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};
