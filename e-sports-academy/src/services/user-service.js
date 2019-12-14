const userSurvice = {
    register: function (data) {
        return fetch('http://localhost:9999/api/user/register', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.status === 200
            ? res.json()
            : res.text().then(text => Promise.reject(text)));
    },
    login: function (data) {
        return fetch('http://localhost:9999/api/user/login', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.status === 200
            ? res.json()
            : res.text().then(text => Promise.reject(text)));
    },
    logout: function () {
        return fetch('http://localhost:9999/api/user/logout', {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text())
    },
    updateInformation: function (data) {
        return fetch('http://localhost:9999/api/user/', {
            body: JSON.stringify(data),
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.status === 200
            ? res.json()
            : res.text().then(text => Promise.reject(text)));
    },
}
export default userSurvice