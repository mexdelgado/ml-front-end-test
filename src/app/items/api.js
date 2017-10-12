// Constants
import { API } from './constants';

// Utils
import { apiFetch } from '../../shared/utils/api';

class MlApi {
  static getAllProducts(query = {}, fetchingFrom = 'client') {
    //console.log(query);
    return apiFetch(API.ML.ITEMS, { fetchingFrom }, query, 'all');
  }

  static getProduct(query = {}, fetchingFrom = 'client') {
    //console.log(query);
    return apiFetch(API.ML.ITEMS, { fetchingFrom }, query, 'single');
  }
}

export default MlApi;
