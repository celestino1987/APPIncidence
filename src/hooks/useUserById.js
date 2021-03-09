import { getId } from "../services/usersService";
import { useEffect, useState } from 'react';

export const useUserById = (id) => {

    const [state, setState] = useState([])
  
    useEffect(() => {
    getId(id).then((data) => {
        console.log(data)
        setState(data)
      })
    }, [id])
  
    return state
  }