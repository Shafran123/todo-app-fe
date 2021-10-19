import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getTodoList } from '../../../redux/actions/todoActions'
import AddButton from '../../common/AddButton/AddButton';
import Todo from '../../common/Todo/Todo';


const Home = (props) => {

    useEffect(() => {
        props.getTodoList(res => {
            console.log(res, 'callback');
        })
    }, [])

    let { text } = props;

    return (
        <div>
            <h1>
                Todo App
            </h1>

            <div style={{ display: 'flex' , justifyContent: 'center'}}>
              
                <AddButton />
             
            </div>

            {
                props.todo_list.map((element, index) => {
                    return <div style={{display: 'flex' , justifyContent: 'center'}}>
                        <Todo data={element} key={index}  />
                    </div>
       
                })
            }

            {/* <div style={{display: 'flex' , justifyContent: 'center'}}>
                <Todo />
            </div> */}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo.todo_list
    };
};


export default connect(mapStateToProps, { getTodoList })(Home);

