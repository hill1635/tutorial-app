import axios from 'axios';

export default {
  create: function(userData) {
    console.log('userData:', userData);
    return axios.post('/api/user/', userData);
  },
};