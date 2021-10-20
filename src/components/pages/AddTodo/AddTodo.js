import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { addTodo } from '../../../redux/actions/todoActions'
import back from '../../../assets/icons/back.png'
import './AddTodo.css'

const AddTodo = (props) => {

    const history = useHistory();

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')


    const [loading, setLoading] = useState(false)
    const [scuess, setScuess] = useState(false)
    const [fail, setFail] = useState(false)

    const onClickTodoAdd = (e) => {
        setLoading(true)

        e.preventDefault();
        let data = {
            title: title,
            desc: desc
        }

        props.addTodo(data, res => {
            console.log(res);
            if (res) {
                setScuess(true)
                setLoading(false)

                setTimeout(() => {
                    history.push(`/`)
                }, 1000);
            } else {
                setFail(true)
                setLoading(false)
            }
        })
    }

    return (
        <div className="mainAddTodoLayout">
            <div className="headingDiv">
                <div onClick={() => history.push(`/`)}>
                    <img src={back} alt={"back"} className="backIcon" />
                </div>
                <div className="spacer">

                </div>
                <h3 className="txtHeading">
                    📝 Add Todo
                </h3>
            </div>


            {scuess ?
                <div class="alert alert-success mt-3" role="alert">
                    👏  &nbsp; Huree Todo Added Sucessfully
                </div>
                : null
            }

            {fail ?
                <div class="alert alert-danger mt-3" role="alert">
                    🙁  &nbsp; Opps Todo Adding Failed!
                </div>
                : null
            }


            <form>
                <div class="mb-3">
                </div>
                <div class="mb-3">
                    <label class="form-label">Todo Title</label>
                    <input type="text" class="form-control" id="todoTitle" aria-describedby="todoTitle" onChange={(text) => setTitle(text.target.value)} />

                </div>

                <div class="mb-3">
                    <label class="form-label">Todo Description</label>
                    <textarea class="form-control" id="todoDecription" rows="3" onChange={(text) => setDesc(text.target.value)}></textarea>
                </div>

                {loading ?
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <button onClick={(e) => onClickTodoAdd(e)} class="btn btn-primary">Add Todo</button>
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


export default connect(mapStateToProps, { addTodo })(AddTodo);

