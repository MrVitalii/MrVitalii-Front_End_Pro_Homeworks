export class DishesApi {
    static API = 'https://mock-api-5678.nw.r.appspot.com/dishes/'

    static request(url = '', method = 'GET', body) {
        return fetch(DishesApi.API + url, {
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
        return DishesApi.request().catch(() => {
            throw new Error('Con not retrieve dishes list from server.');
        })
    }

    static getOne(id) {
        return DishesApi.request(id).catch(() => {
            throw new Error('Con not retrieve one dish from server.');
        })
    }

    static create(todo) {
        return DishesApi.request('', 'POST', todo).catch(() => {
            throw new Error('Con not create dish on server.');
        })
    }

    static update(id, changes) {
        return DishesApi.request(id, 'PUT', changes).catch(() => {
            throw new Error('Con not update dish on server.');
        })
    }

    static delete(id) {
        return DishesApi.request(id, 'DELETE').catch(() => {
            throw new Error('Con not delete dish on server.');
        })
    }
}