import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {

    const [course, setCourse] = useState('');
    const courses = useSelector(state => state.data,[course]);
    const dispatch = useDispatch();

    function addCourse(){

        if (course !== ''){
            dispatch({type: 'ADD_COURSE', title:course});
        }
    }

    return (
        <>
            <input type='text' placeholder='Informe o título do curso' onChange={e=>setCourse(e.target.value)}/>
            <button type="button" onClick={addCourse}>Adicionar Curso</button>
            <ul>
                {courses.map(course =>
                    <li key={course}>
                        {course}
                    </li>
                )}
            </ul>
        </>
    )
}
