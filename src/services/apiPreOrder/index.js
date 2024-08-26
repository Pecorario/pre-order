import axios from 'axios';
// import { AES, enc } from 'crypto-js';

// import { KEY, LOCAL_STORAGE_AUTH } from '@context/Auth/constants';

const apiPreOrder = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_PRE_ORDER
});

apiPreOrder.interceptors.request.use(
  config => {
    try {
      // const values = localStorage.getItem(LOCAL_STORAGE_AUTH.USER_INFO);

      // if (values) {
      //   const decryptedValues = AES.decrypt(values, KEY).toString(enc.Utf8);

      //   const { tokenType, accessToken } = JSON.parse(decryptedValues);

      //   // eslint-disable-next-line no-param-reassign
      //   config.headers.common.Authorization = accessToken
      //     ? `${tokenType} ${accessToken}`
      //     : '';
      // }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  error => Promise.reject(error)
);

export default apiPreOrder;
