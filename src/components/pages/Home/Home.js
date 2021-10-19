import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { getTodoList } from '../../../redux/actions/todoActions'
import AddButton from '../../common/AddButton/AddButton';
import Todo from '../../common/Todo/Todo';
import * as  firestore from "../../../utils/friebase";

const Home = (props) => {

    const history = useHistory();

    useEffect(() => {
       

        //history.push("/add-todo");

        const unsub1 = firestore.default.firestore.collection('todos').onSnapshot(doc => {
            console.log('chnage');
            props.getTodoList( res => {
                console.log(res, 'callback');
            })
        })

    }, [])

    let { text } = props;

    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <AddButton />

            </div>

            {
                props?.todo_list?.map((element, index) => {
                    return <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Todo data={element} key={element.id}  index={index}/>
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

