import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

axios.defaults.headers['Access-Control-Allow-Origin'] = 'https://api.example.com';

const client = applyCaseMiddleware(axios.create());

export default client;
