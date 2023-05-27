export default class TodoApi {
    static URL = 'https://6426d763556bad2a5b596110.mockapi.io/api/todo';

    static request(url = '', method = 'GET', body) {
        return fetch(TodoApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not execute request to server');
            })
    }

    static getList() {
        return TodoApi.request().catch(() => {
            throw new Error('Can not fetch to do list from server');
        })
    }

    static create(contact) {
        return TodoApi.request('', 'POST', contact).catch(() => {
            throw new Error('Can not create to do on server');
        })
    }

    static update(id, changes) {
        return TodoApi.request(`/${id}`, 'PUT', changes).catch(() => {
            throw new Error('Can not update to do on server');
        })
    }

    static delete(id) {
        return TodoApi.request(`/${id}`, 'DELETE').catch(() => {
            throw new Error('Can not delete to do on server');
        })
    }
}