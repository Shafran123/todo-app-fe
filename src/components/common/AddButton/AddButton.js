import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import './AddButton.css'


const AddButton = (props) => {

    const history = useHistory();

    let { data } = props;

    return (
        <div onClick={() =>  history.push("/add-todo")} className="buttonLayoutDiv">
            <div className="buttonMainDiv">
                Add Todo
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo.todo_list
    };
};


export default connect(mapStateToProps, {})(AddButton);

