import Api from './api';

export const classify = (text) => {
  const token = sessionStorage.getItem('token');
  return Api.post(
    '/nlps/classify',
    {
      text,
    },
    {
      params: {
        access_token: token,
      },
    }
  );
};
