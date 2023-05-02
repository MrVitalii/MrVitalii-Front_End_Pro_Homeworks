export class StudentsApi {
    static URL = 'https://6391adecac688bbe4c4f165a.mockapi.io/api/students';

    static request(url = '', method = 'GET', body) {
        return fetch(StudentsApi.URL + url, {
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
        return StudentsApi.request().catch(() => {
            throw new Error('Can not fetch student list from server');
        })
    }

    static create(student) {
        return StudentsApi.request('', 'POST', student).catch(() => {
            throw new Error('Can not create student on server');
        })
    }

    static update(id, changes) {
        return StudentsApi.request(`/${id}`, 'PUT', changes).catch(() => {
            throw new Error('Can not update student data on server');
        })
    }

    static delete(id) {
        return StudentsApi.request(`/${id}`, 'DELETE').catch(() => {
            throw new Error('Can not delete student on server');
        })
    }
}