import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import edit from '../../../assets/icons/edit.png'
import trash from '../../../assets/icons/trash.png'
import './Todo.css'


const Todo = (props) => {

    const history = useHistory();
    let { data } = props;

    return (
        <div className="mainContainer1">
            <div className="mainContainer">
                <div className="txtTitle">
                    <span>
                        #{data?.id}.
                    </span>&nbsp;
                    {data?.title}
                </div>
                <div className="actions">
                    <div onClick={() => history.push(`/edit-todo/${data.id}`)}>
                        <img src={edit} alt={"edit"} className="editIcon" />
                    </div>

                    <div className="spacer">
                         
                    </div>

                    <div onClick={() => console.log('delete')}>
                        <img src={trash} alt={"trash"} className="deleteIcon" />
                    </div>
                </div>
            </div>

            <div className="txtDescription">
                Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo.todo_list
    };
};


export default connect(mapStateToProps, {})(Todo);

