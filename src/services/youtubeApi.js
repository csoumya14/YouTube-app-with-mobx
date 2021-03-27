import axios from 'axios';
const KEY = 'AIzaSyAulvGNMhA_GK436uBhMDnSUzBuZNUEeEI';

const youTubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: KEY,
  },
});

export default youTubeApi;
//setting baseURL for all requests
