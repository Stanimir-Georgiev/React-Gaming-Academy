const courseService = {
    createCourse: function(data) {
        return fetch(`http://localhost:9999/api/course/`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include'
        }).then(res => res.json());
      },
      getAll: function() {
        return fetch(`http://localhost:9999/api/course/`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'include'
        }).then(res => res.json());
      }
}
export default courseService
