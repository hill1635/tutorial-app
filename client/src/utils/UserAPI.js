import axios from 'axios';

export default {
  create: function (userData) {
    return axios.post('/api/user/', userData);
  },
};
