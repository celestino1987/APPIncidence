import { IonAlert } from '@ionic/react';
import { useHistory } from 'react-router';


export const AppAlert = ({showAlert1,setShowAlert1}) => {
    const history = useHistory()

    return (
        <div>
            <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Confirm!'}
          message={'¿Desea salir de la aplicacion?'}
          buttons={[
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log('Confirm Cancel: blah');
              }
            },
            {
              text: 'Confirmar',
              handler: () => {
                history.push('./');
              }
            }
          ]}
        />
        </div>
    )
}
