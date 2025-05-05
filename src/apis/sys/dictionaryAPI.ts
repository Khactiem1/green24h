import baseApi from '@/apis/base/baseApi';
import httpclient from '../base/httpclient';

class dictionaryAPI extends baseApi {
  apiName = 'dictionary';
  controllerName = 'Dictionary';
  
}

export default new dictionaryAPI();