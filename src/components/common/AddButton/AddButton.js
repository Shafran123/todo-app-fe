import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './AddButton.css'


const AddButton = (props) => {


    let { data } = props;

    return (
        <div style={{width: '50vw' , display: 'flex' , justifyContent: 'flex-end' , marginBottom: 10}}>
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

