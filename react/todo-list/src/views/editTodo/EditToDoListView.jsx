import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import './EditToDoListStyles.css';

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
        <div className="add-container">
            <h1>
                Edit To-Do
            </h1>
            <div className="form-container">
                <h3>Update your to-do here: </h3>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-container_input_container">
                        <input 
                            type="text" 
                            name="todoValue" 
                            id="todoValue" 
                            placeholder="Please enter your to-do" 
                            onChange={handleTodoChange}
                            defaultValue={todoValue.description}/>
                    </div>
                    <div className="form-container_submit_container">
                        <button type="submit">Update</button>
                    </div>
                </form>
                <br />
                {showLink && <h4><a href="/">View Updated to-do list</a></h4>}
                {showError && <h3 className="error_text">Please update your to-do</h3>}
            </div>
        </div>
    );
};

export default EditToDoListView;