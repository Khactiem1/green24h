import baseApi from '@/apis/base/baseApi';
import httpclient from '../base/httpclient';

class dictionaryAPI extends baseApi {
  apiName = 'dictionary';
  controllerName = 'Dictionary';
  
  async GetDictionaryCustom(payload: any) {
    let request = {
      url: this.getAPIUrl+'/get_dictionary_custom',
      data: payload,
    }

    return await httpclient.postAsync(request);
  }
}

export default new dictionaryAPI();