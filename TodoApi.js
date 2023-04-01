class TodoApi {
    static API = 'https://6426d763556bad2a5b596110.mockapi.io/api/todo'

    static getList() {
        return fetch(TodoApi.API).then((res) => {
            if (res.ok) {
                return res.json()
            }

            throw new Error('Can not retrieve todo list from server.');
        })
    }

    static create(todo) {
        return fetch(TodoApi.API, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                return res.json()
            }

            throw new Error('Can not create todo on server.');
        })
    }

    static delete(id) {
        return fetch(`https://6426d763556bad2a5b596110.mockapi.io/api/todo/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error('Can not delete todo from server.');
        })
    }
}