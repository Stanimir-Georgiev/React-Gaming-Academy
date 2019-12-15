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
  editCourse: function (id, data) {
    return fetch(`http://localhost:9999/api/course/edit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(res => res.status === 200
        ? res.json()
        : res.text().then(text => Promise.reject(text)));
},
deleteCourse: function (id) {
  return fetch(`http://localhost:9999/api/course/${id}`, {
      method: 'DELETE',
      headers: {
          'Content-type': 'application/json'
      },
      credentials: 'include',
  }).then(res => res.status === 200
      ? res.json()
      : res.text().then(text => Promise.reject(text)));
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
  },
  enroll: function (id) {
    return fetch(`http://localhost:9999/api/course/enroll/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json());
  },
  getEnrolledCourses: function () {
    return fetch('http://localhost:9999/api/course/getEnrolled', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include'
    }).then(res => res.status === 200
        ? res.json()
        : res.text().then(text => Promise.reject(text)));
},

}
export default courseService
