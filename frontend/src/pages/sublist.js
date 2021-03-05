import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {getCategoryId, updateCategoryId } from "../Redux/actions/todolistAction";
import {toast} from 'react-toastify'


const EditTodo = ({ dispatchGetTodoIdAction, match, }) => {
  
  const [categoryTitle, setCategoryTitle] = useState("");
  

  // useEffect(()=> {
  //   const {id} = match.params;
  //   console.log(match.params);
  //   if(id){
  //     dispatchGetTodoIdAction(id, ({categoryTitle}) =>
  //     {
  //       setCategoryTitle(categoryTitle);
  //     });
  //   }
  // }, [dispatchGetTodoIdAction, match.params])

  useEffect(() => {
    function getDetail() {
      if(id){
      
      }
    }
  })

  return (
    <React.Fragment>
    <div className="container-sm">
         <div className="row">
        <div className="col">
          <h3>Add Todo</h3>
        </div>
      </div>

      <div className="row align-items-center ">
        <div className="col-md-6" >
          <form noValidate >
            <div className="form-group">
              <label htmlFor="categoryTitle">Title</label>
              
             
            </div>
          </form>
        </div>
      </div>
    </div>
     
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
    
  dispatchGetTodoIdAction: (id, onSuccess) => 
    dispatch(getCategoryId(id, onSuccess))
});

export default connect(null, mapDispatchToProps)(EditTodo);



