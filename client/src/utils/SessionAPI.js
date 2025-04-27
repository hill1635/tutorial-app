import axios from 'axios';

const SessionAPI = {
  login: function (userData) {
    return axios.post('/api/session/login', userData);
  },
};

export default SessionAPI;