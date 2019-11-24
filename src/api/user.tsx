/* eslint-disable import/prefer-default-export */
import http from './http';

export const authorize = (username: string, password: string) => (
  http.post('tokens', {
    username, password,
  })
);
