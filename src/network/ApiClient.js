
import { HttpError, ServerError } from './errors';
const BASEURL = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod';
const APIS = {
  fake: 'fake-auth'
}


export default class ApiClient {

  static async checkResponse(response: Response): Promise<?Object> {
    if (response.status === 400) {
      const msg = await response.json()
      throw new ServerError(msg);
    } else if (!response.ok) {
      throw new HttpError();
    }
    let json = await response.json();
    return json;
  }

  static async post(endpoint, params = {}) {
    const url = `${BASEURL}/${endpoint}`;
    const init = {
      method: 'POST',
      headers: {},
      body: undefined
    };
    init['body'] = JSON.stringify(params);
    let response = await fetch(url, init);
    let data = await this.checkResponse(response);
    return data;
  }

}