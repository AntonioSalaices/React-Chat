/**
 * Date 30/06/23
 *
 * @author Antonio Salaices
 */

const token = 'cookieMethod';

const isAuthenticated = () => {
  return Boolean(token);
};

const auth = {
  isAuthenticated,
};

export { auth };
