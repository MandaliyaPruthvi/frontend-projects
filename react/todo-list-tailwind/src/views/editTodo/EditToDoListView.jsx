import React, { useState } from "react";
import { useLocation, Link } from 'react-router-dom';

const EditToDoListView = () => {
    // Edit
    // Get data - done
    // Make a form with data - done
    // edit - done
    // Update data -  
    // navigate back to list of data

    const location = useLocation();
    const [showLink, setShowLink] = useState(false);
    const [showError, setShowError] = useState(false);
    const [todoValue, setToDoValue] = useState(location.state.values);
    const currentList = localStorage.getItem('todoList');
    const currentListJSON = JSON.parse(currentList);

    const handleTodoChange = (event) => {
        event.preventDefault();
        setToDoValue({...todoValue, ...{description: event.target.value}});
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const todoInput = formData.get('todoValue');

        if (todoInput.toString().toLowerCase() === location.state.values.description.toString().toLowerCase()) {
            setShowLink(false);
            setShowError(true);
            return;
        } 

        try {
            if (currentListJSON.length === 1) {
                currentListJSON[0].description = todoValue.description;
                localStorage.setItem('todoList', JSON.stringify(currentListJSON));
            } else {
                const output = currentListJSON.map((element) => {
                    if (element.id === todoValue.id) {
                        element.description = todoValue.description;
                    }
                    return element;
                });
                localStorage.setItem('todoList', JSON.stringify(output));
            }
        } catch (e) {
            console.log("error while submitting form: ", e);
        }
        setShowLink(true);
        setShowError(false);
    }

    return (
        <div className="flex flex-col justify-center items-center p-16">
            <h1 className="text-xl font-extrabold">
                Edit To-Do
            </h1>
            <div className="flex flex-col justify-center items-center bg-orange-300 shadow-lg rounded-2xl border-2 border-solid border-black px-24 py-12 mt-4 dark:bg-gray-300">
                <h3 className="text-xl font-bold">Update your to-do here: </h3>
                <form onSubmit={handleOnSubmit}>
                    <div >
                        <input 
                            className="py-2 pr-8 pl-2 mt-4" 
                            type="text" 
                            name="todoValue" 
                            id="todoValue" 
                            placeholder="Please enter your to-do" 
                            onChange={handleTodoChange}
                            defaultValue={todoValue.description}/>
                    </div>
                    <div className="flex justify-center">
                        <button className="flex text-white py-3 px-7 mt-6 bg-orange-500 rounded-xl dark:bg-gray-900" type="submit">Update</button>
                    </div>
                </form>
                <br />
                {showLink && <h4 className="font-bold underline text-lg"><Link to="/">View Updated to-do list</Link></h4>}
                {showError && <h3 className="text-red-800 font-bold">Please update your to-do</h3>}
            </div>
        </div>
    );
};

export default EditToDoListView;