import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';


const EditTodo = (props) => {

    const history = useHistory();
    const { id } = useParams()

    return (
        <div>

            edit todo  {id}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo.todo_list
    };
};


export default connect(mapStateToProps, {  })(EditTodo);

