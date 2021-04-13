import { useEffect, useState } from 'react';
import {incidenceGet } from '../services/usersService';

export const useIncidence = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    incidenceGet().then((res) => {
      setUsers(res?.data);
   
    });
  }, []);

  return users;
};
