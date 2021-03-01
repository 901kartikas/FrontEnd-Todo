import React from 'react';
import { Link } from "react-router-dom";

const List = ({todoCategory}) => {
    return (  
      <div> 
        <React.Fragment>
          <tbody>
           {
              todoCategory.map(item => (
            <tr className="list-group" key={item._id}>
              <th className="list-group-item">{item.categoryTitle}</th>   
            </tr>
            ))
          }
         </tbody>
        

         <button>Add New</button>
        </React.Fragment>
      </div>
    );
} 

export default List;