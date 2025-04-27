import axios from 'axios';

const UserAPI = {
  create: function (userData) {
    return axios.post('/api/user/', userData);
  },
  login: function (userData) {
    return axios.post('/api/user/login', userData);
  },
};

export default UserAPI;
