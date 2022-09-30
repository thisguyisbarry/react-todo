import React, {useState} from 'react';
import Item from './Item';
 
 
const List = ({list, setList, toggleStrike}) => {

    const deleteItem = (id) => {
        let updatedList = [...list].filter((item) => item.id !== id);
        setList(updatedList);
    }

   return (
       <div>
           {
           list.map(item => {
               return (
                   <Item item={item} toggleStrike={toggleStrike} deleteItem={deleteItem}/>
               )
           })}
       </div>
   );
};
 
export default List;