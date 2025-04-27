import axios from 'axios';

const SessionAPI = {
  getSession: function () {
    return axios.get('/api/session/');
  },
  login: function (userData) {
    return axios.post('/api/session/login', userData);
  },
};

export default SessionAPI;
