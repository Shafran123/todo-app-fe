import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import back from '../../../assets/icons/back.png'

import { editTodo } from '../../../redux/actions/todoActions'

const EditTodo = (props) => {

    const history = useHistory();
    const { id } = useParams()

    const [todo_id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const [loading, setLoading] = useState(false)
    const [scuess, setScuess] = useState(false)
    const [fail, setFail] = useState(false)


    useEffect(() => {
        console.log(history);

        let todoData = history.location.state.data
        setId(todoData.id)
        setTitle(todoData.title)
        setDesc(todoData.desc)

    }, [])

    const onClickTodoEdit = (e) => {
        e.preventDefault();

        setLoading(true)

        let data = {
            id: todo_id,
            title: title,
            desc: desc
        }

        props.editTodo(data, res => {
            console.log(res);

            if (res) {
                setScuess(true)
                setLoading(false)

                history.push(`/`)

            } else {
                setFail(true)
                setLoading(false)
            }
        })

    }

    return (
        <div style={{ width: '50vw', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div onClick={() => history.push(`/`)}>
                    <img src={back} alt={"back"} className="backIcon" />
                </div>
                <div style={{ width: 10 }}>

                </div>
                <h3 style={{ textAlign: 'left', margin: 0 }}>
                    📝 Edit Todo
                </h3>
            </div>

            {fail ?
                <div class="alert alert-danger mt-3" role="alert">
                    🙁  &nbsp; Opps Todo Edit Failed!
                </div>
                : null
            }

            <form>
                <div class="mb-3">
                </div>

                <div class="mb-3">
                    <label class="form-label">Todo Id</label>
                    <input type="text" disabled={true} class="form-control" id="todoId" aria-describedby="todoId" value={todo_id} />

                </div>

                <div class="mb-3">
                    <label class="form-label">Todo Title</label>
                    <input type="text" class="form-control" id="todoTitle" aria-describedby="todoTitle" value={title} onChange={(text) => setTitle(text.target.value)} />

                </div>

                <div class="mb-3">
                    <label class="form-label">Todo Description</label>
                    <textarea class="form-control" id="todoDecription" rows="3" value={desc} onChange={(text) => setDesc(text.target.value)}></textarea>
                </div>

                {loading ?
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <button onClick={(e) => onClickTodoEdit(e)} type="submit" class="btn btn-primary">Edit Todo</button>
                }

             
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo.todo_list
    };
};


export default connect(mapStateToProps, { editTodo })(EditTodo);

