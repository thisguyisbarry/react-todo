import React from 'react';
 
const Item = ({item, toggleStrike}) => {

    const handleClick = (e) => {
        e.preventDefault()
        toggleStrike(e.currentTarget.id)
    }

   return (
       <div onClick={handleClick} className={item.complete ? "item completed" : "item"}>
           {item.task}
       </div>
   );
};
 
export default Item;