import axios from 'axios';
import {
  LoginCellphoneResource
} from './resource';

export default {
  // 获取个人信息，注入cookies
  getLoginCellphoneResource (mobile, password) {
    return axios.get(LoginCellphoneResource, {
      params: {
        phone: mobile || '',
        password: password || ''
      }
    });
  }
};
