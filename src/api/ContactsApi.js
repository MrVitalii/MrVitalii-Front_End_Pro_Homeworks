export default class ContactsApi {
    static URL = 'https://6426d763556bad2a5b596110.mockapi.io/api/contacts'

    static request(url = '', method = 'GET', body) {
        return fetch(ContactsApi.URL + url, {
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
        return ContactsApi.request().catch(() => {
            throw new Error('Can not fetch contact list from server');
        })
    }

    static create(contact) {
        return ContactsApi.request('', 'POST', contact).catch(() => {
            throw new Error('Can not create contact on server');
        })
    }

    static update(id, changes) {
        return ContactsApi.request(`/${id}`, 'PUT', changes).catch(() => {
            throw new Error('Can not update contact on server');
        })
    }

    static delete(id) {
        return ContactsApi.request(`/${id}`, 'DELETE').catch(() => {
            throw new Error('Can not delete contact on server');
        })
    }
}