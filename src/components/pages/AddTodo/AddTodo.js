import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';


const AddTodo = (props) => {

    const history = useHistory();

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    return (
        <div style={{ width: '50vw', textAlign: 'left' }}>
            <h3 style={{ textAlign: 'left' }}>
                Add Todo
            </h3>

            <form>
                <div class="mb-3">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Todo Title</label>
                    <input type="text" class="form-control" id="todoTitle" aria-describedby="todoTitle" onChange={(text) => setTitle(text.target.value)} />

                </div>

                <div class="mb-3">
                    <label class="form-label">Todo Description</label>
                    <textarea class="form-control" id="todoDecription" rows="3" onChange={(text) => setDesc(text.target.value)}></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Add Todo</button>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo.todo_list
    };
};


export default connect(mapStateToProps, {})(AddTodo);

