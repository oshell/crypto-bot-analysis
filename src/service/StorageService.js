import axios from 'axios';
const storageUrl = 'https://jsonstorage.net/api/items/3affc12e-a987-4baa-a2fe-bdff5ddbe594';

export default class StorageService {
  static getJsonStorage() {
    return axios.get(storageUrl);
  }
}