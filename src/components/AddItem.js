import React, { useState } from 'react';
 
const AddItem = ({ addItem }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(userInput);
        setUserInput("");
    }

   return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={userInput} type="text" onChange={handleChange} placeholder="Enter a new item to do"/>
                <button>Submit</button>
            </form>

        </div>
   );
};
 
export default AddItem;