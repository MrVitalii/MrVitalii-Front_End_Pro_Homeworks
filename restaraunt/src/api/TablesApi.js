export class TablesApi {
  static API = 'https://mock-api-5678.nw.r.appspot.com/tables/'

  static request(url = '', method = 'GET', body) {
    return fetch(TablesApi.API + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Con not execute server request.');
      })
  }

  static getList() {
    return TablesApi.request().catch(() => {
      throw new Error('Con not retrieve table list from server.');
    })
  }

  static getOne(id) {
    return TablesApi.request(id).catch(() => {
      throw new Error('Con not retrieve one table from server.');
    })
  }

  static create(table) {
    return TablesApi.request('', 'POST', table).catch(() => {
      throw new Error('Con not create table on server.');
    })
  }

  static update(id, changes) {
    return TablesApi.request(id, 'PUT', changes).catch(() => {
      throw new Error('Con not update table on server.');
    })
  }

  static delete(id) {
    return TablesApi.request(id, 'DELETE').catch(() => {
      throw new Error('Con not delete table on server.');
    })
  }
}