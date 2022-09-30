import React from 'react';

import AuthService from '../services/auth.service';

export const register = (fullname, username, email, password) => {
  return AuthService.register(fullname, username, email, password);
}

export const login = (email, password) => {
  return AuthService.login(email, password);
}

