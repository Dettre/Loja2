import axios from 'axios';
import {
    LOGIN_USER
  
} from './types';
import { api, versao } from '../config';

// USUARIOS
export const handleLogin = ({ email, password}, callback) => {
    return function(dispatch){
        axios.post(`${api}/${versao}/api/usuarios/login`, { email, password })
        .then((response) => {
           })
        .catch((error) => {
            console.log(error, error.response)
        });
    }
}
