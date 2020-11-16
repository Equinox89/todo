import React from 'react';

import './add-item.css'

let AddItem  = ({onAddItem})=> {
    return (
       <div className='add-item'>
           <button
               className='btn btn-success'
               onClick={() => onAddItem('Hello')}
           >
               Add Item
           </button>

       </div>
    )
};

export default AddItem;
