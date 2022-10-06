import React from 'react';

import AuthService from '../services/auth.service';

export const register = (fullname, username, email, password) => {
  return AuthService.register(fullname, username, email, password);
}

export const login = (email, password) => {
  console.log('Linea de la accion ! :)')
  return AuthService.login(email, password);
}

