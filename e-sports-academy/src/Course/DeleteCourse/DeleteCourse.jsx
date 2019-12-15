import React from 'react';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'
import courseService from '../../services/course-service'

const DeleteCourse = () => {
    const history = useHistory()
    const { id } = useParams();
    courseService.deleteCourse(id).then(() => {
        history.push('/courses')
    })
    return null
}
export default DeleteCourse
