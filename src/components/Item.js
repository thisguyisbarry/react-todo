import React, { useState } from 'react';
 
const Item = ({item, toggleStrike, deleteItem}) => {

    const [itemEditting , setItemEditting] = useState(null);
    const [editText, setEditText] = useState({
        id: null,
        value: ""
      });
    

    const handleClick = (e) => {
        e.preventDefault()
        toggleStrike(item.id)
    }

    const editItemSubmit = () => {       
        item.task = editText;
        setItemEditting(null);
        setEditText({
            id: null,
            value: ""
        });
    }



   return (
        <div>

            {item.id === itemEditting  ? 
            (
            <div>
                <input type="text" 
                onChange={(e) => setEditText(e.target.value)}
                placeholder={item.task}/>
                <button onClick={() => editItemSubmit(item.id)}>Submit Edit</button>
            </div>
            ) : 
            (
            <div>
                <div onClick={handleClick} className={item.complete ? "item completed" : "item"}>
                {item.task}
                </div>
                <button onClick={() => setItemEditting(item.id)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}> Delete </button>
           </div>
            ) }
            
           
       </div>
   );
};
 
export default Item;