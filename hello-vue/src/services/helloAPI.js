import axios from 'axios';

let base = 'api';

// Provide a function to get the json file data, in this case the data is hello message
export default {
  getHelloMessage() {
    // Return : - Get axios' api call, then get a response to expect data
    return axios.get(base).then((response) => {
      return response.data;
    });
  },
};
