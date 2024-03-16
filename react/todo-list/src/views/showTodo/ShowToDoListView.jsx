import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { BiEditAlt, BiTrash  } from "react-icons/bi";
import './ShowToDoListStyles.css';

const ShowToDoListView = () => {

    const navigate = useNavigate();

    const data = localStorage.getItem('todoList');
    const dataJSON = JSON.parse(data);
    const [todoList, setTodoList] = useState(dataJSON ? dataJSON : []);

    const handleEdit = (values) => {
        navigate('/edit', {state: {values}});
    }

    const handleDelete = (values) => {
        const updatedTodoList = todoList.filter((element) => {
            return element.id !== values.id;
        });
        setTodoList(updatedTodoList);
        localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    }

    return (
        <div className="show-container">
            {
                todoList && todoList.length === 0 && (
                    <div className="show-data-error-container">
                        <h1>There are no To-Do's</h1>
                    </div>
                )
            }
            {
                todoList && todoList.length > 0 && (
                    <div className="show-data-container">
                        <div className="header-style">
                            <h1>To-Do List</h1>
                        </div>

                        {
                            todoList && todoList?.map((element, index) => {
                                return (
                                    <div key={element.id} className='show-container_list_styles'>
                                        <h3>{element.description}</h3>
                                        <div className="button-container">
                                            <div onClick={() => {
                                                handleEdit(element)
                                            }} className="button-element">
                                                <BiEditAlt />
                                            </div>

                                            <div onClick={() => {
                                                handleDelete(element)
                                            }} className="button-element">
                                                <BiTrash />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                )
            }
        </div>
    );
};

export default ShowToDoListView;