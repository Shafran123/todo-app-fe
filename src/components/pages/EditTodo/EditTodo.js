import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import back from '../../../assets/icons/back.png'

const EditTodo = (props) => {

    const history = useHistory();
    const { id } = useParams()


    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')


    useEffect(() => {
        console.log(history);

        let todoData = history.location.state.data

        setTitle(todoData.title)

    }, [])

    return (
        <div style={{ width: '50vw', textAlign: 'left' }}>
            <div style={{display: 'flex' , alignItems: 'center'}}>
                <div onClick={() =>  history.push(`/`)}>
                    <img src={back} alt={"back"} className="backIcon" />
                </div>
                <div style={{width: 10}}>

                </div>
                <h3 style={{ textAlign: 'left' , margin: 0 }}>
                    Edit Todo&nbsp;{id}
                </h3>
            </div>

            <form>
                <div class="mb-3">
                </div>
                <div class="mb-3">
                    <label class="form-label">Todo Title</label>
                    <input type="text" class="form-control" id="todoTitle" aria-describedby="todoTitle" value={title} onChange={(text) => setTitle(text.target.value)} />

                </div>

                <div class="mb-3">
                    <label class="form-label">Todo Description</label>
                    <textarea class="form-control" id="todoDecription" rows="3" onChange={(text) => setDesc(text.target.value)}></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Edit Todo</button>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo.todo_list
    };
};


export default connect(mapStateToProps, {})(EditTodo);

