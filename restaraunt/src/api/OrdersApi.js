export class OrdersApi {
  static API = 'https://mock-api-5678.nw.r.appspot.com/orders/'

  static request(url = '', method = 'GET', body) {
    return fetch(OrdersApi.API + url, {
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
    return OrdersApi.request().catch(() => {
      throw new Error('Con not retrieve order list from server.');
    })
  }

  static getOne(id) {
    return OrdersApi.request(id).catch(() => {
      throw new Error('Con not retrieve one order from server.');
    })
  }

  static create(order) {
    return OrdersApi.request('', 'POST', order).catch(() => {
      throw new Error('Con not create order on server.');
    })
  }

  static update(id, changes) {
    return OrdersApi.request(id, 'PUT', changes).catch(() => {
      throw new Error('Con not update order on server.');
    })
  }

  static delete(id) {
    return OrdersApi.request(id, 'DELETE').catch(() => {
      throw new Error('Con not delete order on server.');
    })
  }
}