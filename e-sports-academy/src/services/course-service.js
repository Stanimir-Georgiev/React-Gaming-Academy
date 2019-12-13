const courseService = {
  createCourse: function (data) {
    return fetch(`http://localhost:9999/api/course/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res.json());
  },
  getAll: function () {
    return fetch(`http://localhost:9999/api/course/getAll`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json());
  },
  getOne: function (id) {
    return fetch(`http://localhost:9999/api/course/getOne/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json());
  }
}
export default courseService
