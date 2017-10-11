// Constants
import { API } from './constants';

// Utils
import { apiFetch } from '../../shared/utils/api';

class MlApi {
  static getAllPosts(query = {}, fetchingFrom = 'client') {
    //console.log(query);
    return apiFetch(API.ML.ITEMS, { fetchingFrom }, query, 'all');
  }

  static getPost(query = {}, fetchingFrom = 'client') {
    //console.log(query);
    return apiFetch(API.ML.ITEMS, { fetchingFrom }, query, 'single');
  }
}

export default MlApi;
