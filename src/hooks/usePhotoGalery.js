import { useState, useEffect } from 'react';
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import {
  CameraResultType,
  CameraSource,
  FilesystemDirectory,
} from '@capacitor/core';

export function usePhotoGalery() {
  const { getPhoto } = useCamera();

  const [photos, setPhotos] = useState([]);
  const { deleteFile, readFile, writeFile } = useFilesystem();
  const PHOTO_STORAGE = 'Fotos';
  const { get, set } = useStorage();

  useEffect(() => {
    const loadSaved = async () => {
      const photoString = await get('photos');
      photoString && JSON.parse(photoString);
      for (let photo of photos) {
        await readFile({
          path: photo.filePath,
          directory: FilesystemDirectory.Data,
        });
        photo.base64 = 'data:image/jpeg;base64,${file.data}';
      }
      setPhotos(photos);
      console.log(setPhotos(photos));
    };
    loadSaved();
  }, [get, readFile]);

  const deletePhoto = async (photo) => {
    const newPhotos = photos.filter((p) => p.filePath !== photo.filePath);

    set(PHOTO_STORAGE, JSON.stringify(newPhotos));

    //delete photo file from filesystem
    const fileName = photo.filePath.substr(photo.filePath.lastIndexOf('/') + 1);
    await deleteFile({
      path: fileName,
      directory: FilesystemDirectory.Data,
    });
    setPhotos(newPhotos);
  };

  const takePhoto = async () => {
    const fileName = new Date().getTime + '.jpeg';
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const savePicture = async (photo, fileName) => {
      const base64Data = await base64FromPath(photo.webPath);
      await writeFile({
        path: fileName,
        data: base64Data,
        directory: FilesystemDirectory.Data,
      });
      return getPhotoFile(photo, fileName);
    };

    const getPhotoFile = async (cameraPhoto, fileName) => {
      return {
        filePath: fileName,
        webViewPath: cameraPhoto.webPath,
      };
    };

    const savedFileImage = await savePicture(cameraPhoto, fileName);
    const newPhotos = [savedFileImage, ...photos];
    setPhotos(newPhotos);
    set(
      PHOTO_STORAGE,
      JSON.stringify(
        newPhotos.map((p) => {
          const photoCopy = { ...p };
          delete photoCopy.base64;
          return photoCopy;
        })
      )
    );
  };

  return {
    deletePhoto,
    photos,
    takePhoto,
  };
}
