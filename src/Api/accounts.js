import Api from './api';

export const register = async (data) => {
  return Api.post('/accounts', data);
};

export const login = async (username, password) => {
  return Api.post('/accounts/loginHandler', {
    username,
    password,
  });
};

export const resetPasswordHandler = (newPassword) => {
  const token = sessionStorage.getItem('token');
  return Api.post(
    '/accounts/reset-password',
    {
      newPassword,
    },
    {
      params: {
        access_token: token,
      },
    }
  );
};
