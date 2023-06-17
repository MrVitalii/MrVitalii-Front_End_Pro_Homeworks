export class WaitersApi {
  static API = 'https://mock-api-5678.nw.r.appspot.com/waiters/'

  static request(url = '', method = 'GET', body) {
    return fetch(WaitersApi.API + url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          'Cantent-type': 'application/json',
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not execute server request.');
      })
  }

  static getList() {
    return WaitersApi.request().catch(() => {
      throw new Error('Can not retrieve waiters list from server.');
    })
  }

  static getOne(id) {
    return WaitersApi.request(id).catch(() => {
      throw new Error('Can not retrieve one waiter from server.');
    })
  }

  static create(todo) {
    return WaitersApi.request('', 'POST', todo).catch(() => {
      throw new Error('Can not create waiter on server.');
    })
  }

  static update(id, changes) {
    return WaitersApi.request(id, 'PUT', changes).catch(() => {
      throw new Error('Can not update waiter on server.');
    })
  }

  static delete(id) {
    return WaitersApi.request(id, 'DELETE').catch(() => {
      throw new Error('Can not delete waiter on server.');
    })
  }
}