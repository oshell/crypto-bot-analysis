import axios from 'axios';
const storageUrl = 'https://api.jsonbin.io/b/5e7406cfd3ffb01648aaed03/latest';

export default class StorageService {
  static getJsonStorage() {
    return axios.get(storageUrl);
  }
}