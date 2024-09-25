import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const ShowToDoListView = () => {

    const navigate = useNavigate();

    const data = localStorage.getItem('todoList');
    const dataJSON = JSON.parse(data);
    const [todoList, setTodoList] = useState(dataJSON ? dataJSON : []);

    const handleEdit = (values) => {
        navigate('/edit', { state: { values } });
    }

    const handleDelete = (values) => {
        const updatedTodoList = todoList.filter((element) => {
            return element.id !== values.id;
        });
        setTodoList(updatedTodoList);
        localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    }

    return (
        <div className="flex flex-col justify-center items-center flex-grow px-8 py-12 ">
            {
                todoList && todoList.length === 0 && (
                    <div className="flex flex-col justify-center items-center p-8 border-2 rounded-2xl border-solid border-black bg-orange-300 shadow-lg w-3/6 dark:bg-gray-300">
                        <h1 className="font-bold text-xl">There are no To-Do's</h1>
                    </div>
                )
            }
            {
                todoList && todoList.length > 0 && (
                    <div className="flex flex-col justify-center items-center border-2 rounded-2xl border-solid border-black bg-orange-300 shadow-lg w-3/6 pt-4 pb-20 px-8 dark:bg-gray-300">
                        <div className="pb-8 p-4 font-bold text-3xl">
                            <h1>To-Do List</h1>
                        </div>

                        {
                            todoList && todoList?.map((element, index) => {
                                return (
                                    <div key={element.id} className='flex flex-row justify-between border-b-2 border-black text-center py-1 text-base font-bold w-full'>
                                        <h3>{element.description}</h3>
                                        <div className="flex flex-row">
                                            <div onClick={() => {
                                                handleEdit(element)
                                            }} className="text-3xl">
                                                <BiEditAlt />
                                            </div>

                                            <div onClick={() => {
                                                handleDelete(element)
                                            }} className="text-3xl">
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