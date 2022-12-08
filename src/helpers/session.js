import Cookies from 'js-cookie';

const checkToken = () => {
  const token = Cookies.get('token');
  return token ? token : false;
};

export { checkToken };
