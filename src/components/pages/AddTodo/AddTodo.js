import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';


const AddTodo = (props) => {

    const history = useHistory();
    // const { id } = props.match.params

    return (
        <div>

            add todo 

        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo.todo_list
    };
};


export default connect(mapStateToProps, {  })(AddTodo);

