import axios from 'axios';

const UserAPI = {
  create: function (userData) {
    return axios.post('/api/user/', userData);
  },
};

export default UserAPI;
