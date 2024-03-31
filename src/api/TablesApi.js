export class TablesApi {
  static API = `https://mokapi-server.onrender.com/tables/`

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

        throw new Error('Can not execute server request.');
      })
  }

  static getList() {
    return TablesApi.request().catch(() => {
      throw new Error('Can not retrieve table list from server.');
    })
  }

  static getOne(id) {
    return TablesApi.request(id).catch(() => {
      throw new Error('Can not retrieve one table from server.');
    })
  }

  static create(table) {
    return TablesApi.request('', 'POST', table).catch(() => {
      throw new Error('Can not create table on server.');
    })
  }

  static update(id, changes) {
    return TablesApi.request(id, 'PUT', changes).catch(() => {
      throw new Error('Can not update table on server.');
    })
  }

  static delete(id) {
    return TablesApi.request(id, 'DELETE').catch(() => {
      throw new Error('Can not delete table on server.');
    })
  }
}