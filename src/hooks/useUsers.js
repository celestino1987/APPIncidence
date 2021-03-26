import { useEffect, useState } from 'react';
import { getAxios } from '../services/usersService';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAxios.getIncidence().then((res) => {
      setUsers(res?.data);
   
    });
  }, []);

  return users;
};
