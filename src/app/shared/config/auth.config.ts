import { ENV } from './env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'Z06L6x5rk445GK0boQ76QvcZ2dn5MGqX',
  CLIENT_DOMAIN: 'initial-auth2.auth0.com',
  AUDIENCE: 'http://localhost:3030/api/',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};
