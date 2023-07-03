/**
 * Date 30/06/23
 *
 * @author Antonio Salaices
 */

import { Security } from '@Constans/securityConstants';

const userData = localStorage.getItem(Security.USER_DATA);

const isAuthenticated = () => {
  return Boolean(userData);
};

const auth = {
  isAuthenticated,
};

export { auth };
