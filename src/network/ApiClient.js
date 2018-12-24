
import { HttpError, ServerError } from './errors';
const BASEURL = 'http://localhost:5000';
const token = '7C0MJzDi772ZPLIIH6R3AF96IXV3QszzC1D1uTjdL8xGRJPwkKJ3ZII-TgrJDmdE';
// const BASEURL = 'https://api.gongleyun.com:5000';
// const token = 'QWeUhsPdG3y5cxr5J4NHCxB79bdKife04x9EJ7nbq9FbPxPeO5PNYMUb3ZdcXg6H'
const APIS = {
  graphql: 'baby_photo/graphql?'
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

  static async query(gql, variables) {
    const url = `${BASEURL}/${APIS.graphql}`;
    const init = {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        query: gql,
        variables: ""
      })      
    }
    let response = await fetch(url, init);
    return await this.checkResponse(response);
  }

  static async queryPhotosData(babyId) {
    const gql = 
    `query {
        photobookData(babyId: ${babyId})
      }
    `;
    const variables = {
      babyId: babyId
    }
    return await this.query(gql, variables);
  }

  static async login(userName, password) {
    const gql = 
    `mutation {
      photobookLogin(username: "${userName}", password: "${password}") {
        token
      }
    }`
    return await this.query(gql);
  }
}
