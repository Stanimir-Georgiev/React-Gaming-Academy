import React from 'react';
import courseService from '../../services/course-service';
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom';

const EnrollCourse = () => {
    const { id } = useParams();
    const history = useHistory();
    React.useEffect(() => {
        courseService.enroll(id)
        .then(res => {history.push('/')})
        .catch(error => console.log(error))
    }, [])
    return null
}
export default EnrollCourse