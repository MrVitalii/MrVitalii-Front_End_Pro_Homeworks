export class DishesApi {
    static API = `https://mokapi-server.onrender.com/dishes/`

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

                throw new Error('Can not execute server request.');
            })
    }

    static getList() {
        return DishesApi.request().catch(() => {
            throw new Error('Can not retrieve dishes list from server.');
        })
    }

    static getOne(id) {
        return DishesApi.request(id).catch(() => {
            throw new Error('Can not retrieve one dish from server.');
        })
    }

    static create(dish) {
        return DishesApi.request('', 'POST', dish).catch(() => {
            throw new Error('Can not create dish on server.');
        })
    }

    static update(id, changes) {
        return DishesApi.request(id, 'PUT', changes).catch(() => {
            throw new Error('Can not update dish on server.');
        })
    }

    static delete(id) {
        return DishesApi.request(id, 'DELETE').catch(() => {
            throw new Error('Can not delete dish on server.');
        })
    }
}