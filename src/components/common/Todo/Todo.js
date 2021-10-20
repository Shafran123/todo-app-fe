import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import edit from '../../../assets/icons/edit.png'
import trash from '../../../assets/icons/trash.png'
import './Todo.css'

import { deleteTodo } from '../../../redux/actions/todoActions'

const Todo = (props) => {

    const history = useHistory();
    let { data, index } = props;

    const onClickTodoDelete = (e) => {
        e.preventDefault();

        props.deleteTodo(data , res =>{
            console.log(res);
        })
    }

    return (
        <div className="mainLayout">
            <div className="mainContainer">
                <div className="txtTitle">
                    <span>
                        #{index + 1}.
                    </span>&nbsp;
                    {data?.title}
                </div>
                <div className="actions">
                    <div onClick={() => history.push(`/edit-todo/${data.id}`, { data: data })}>
                        <img src={edit} alt={"edit"} className="editIcon" />
                    </div>

                    <div className="spacer">

                    </div>

                    <div onClick={(e) => onClickTodoDelete(e)}>
                        <img src={trash} alt={"trash"} className="deleteIcon" />
                    </div>
                </div>
            </div>

            <div>
                <div className="txtId">

                    Id : {data?.id}

                  
                </div>

                <div className="txtDescription">

                Description : {data?.desc}
                </div>
            </div>

        </div>

    )
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo.todo_list
    };
};


export default connect(mapStateToProps, {deleteTodo})(Todo);

