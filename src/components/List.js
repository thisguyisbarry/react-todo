import React from 'react';
import Item from './Item';
 
 
const List = ({list, toggleStrike}) => {
   return (
       <div>
           {list.map(item => {
               return (
                   <Item item={item} toggleStrike={toggleStrike}/>
               )
           })}
       </div>
   );
};
 
export default List;