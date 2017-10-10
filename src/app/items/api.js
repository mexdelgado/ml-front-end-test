// Constants
import { API } from './constants';

// Utils
import { apiFetch } from '../../shared/utils/api';

class MlApi {
  static getAllPosts(query = {}, fetchingFrom = 'client') {
    return apiFetch(API.ML.ITEMS, { fetchingFrom }, query);
  }
}

export default MlApi;
