import React, { useState } from "react";
import { Link } from 'react-router-dom';

const AddToDoListView = () => {

    const [showLink, setShowLink] = useState(false);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);
            const todoInput = formData.get('todoValue');
            const obj = {
                description: todoInput,
                id: 0,
            };
            const currentList = localStorage.getItem('todoList');
            const currentListJSON = JSON.parse(currentList);

            // object based
            // if (currentList) {
            //     const newDataIndex = Object.keys(currentListJSON)?.length;
            //     const newDataObj = { description: todoInput, index: newDataIndex };
            //     const output = JSON.stringify({ ...currentListJSON, ...{ [newDataIndex]: newDataObj } });
            //     localStorage.setItem('todoList', output);
            // } else {
            //     localStorage.setItem('todoList', JSON.stringify({ 0: obj }));
            // }

            // array based
            if (currentList) {
                const newDataIndex = Object.keys(currentListJSON)?.length;
                const newDataObj = { description: todoInput, id: newDataIndex };
                currentListJSON.push(newDataObj);
                localStorage.setItem('todoList', JSON.stringify(currentListJSON));
            } else {
                localStorage.setItem('todoList', JSON.stringify([obj]));
            }

        } catch (e) {
            console.log("error while submitting form: ", e);
        }

        event.target.reset();
        setShowLink(true);
    }

    return (
        <div className="flex flex-col justify-center items-center p-16">
            <h1 className="text-xl font-extrabold">
                Add To-Do
            </h1>
            <div className="flex flex-col justify-center items-center bg-orange-300 shadow-lg rounded-2xl border-2 border-solid border-black px-24 py-12 mt-4 dark:bg-gray-300">
                <h3 className="text-xl font-bold">Enter your to-do here: </h3>
                <form onSubmit={handleOnSubmit}>
                    <div >
                        <input className="py-2 pr-8 pl-2 mt-4" type="text" name="todoValue" id="todoValue" placeholder="Please enter your to-do" />
                    </div>
                    <div className="flex justify-center">
                        <button className="flex text-white py-3 px-7 mt-6 bg-orange-500 rounded-xl dark:bg-gray-900" type="submit">Add <h4> +</h4></button>
                    </div>
                </form>
                <br />
                {showLink && <h4 className="font-bold underline text-lg"><Link to="/">View to-do list</Link></h4>}
            </div>
        </div>
    );
};

export default AddToDoListView;