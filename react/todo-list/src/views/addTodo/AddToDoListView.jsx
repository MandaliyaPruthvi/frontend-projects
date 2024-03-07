import React, { useState } from "react";
import './AddToDoListStyles.css';

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
        <div className="add-container">
            <h1>
                Add To-Do
            </h1>
            <div className="form-container">
                <h3>Enter your to-do here: </h3>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-container_input_container">
                        <input type="text" name="todoValue" id="todoValue" placeholder="Please enter your to-do" />
                    </div>
                    <div className="form-container_submit_container">
                        <button type="submit">Add <h4> +</h4></button>
                    </div>
                </form>
                <br />
                {showLink && <h4><a href="/">View to-do list</a></h4>}
            </div>
        </div>
    );
};

export default AddToDoListView;