import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {deleteCategoryById} from '../Redux/actions/todolistAction';
import {toast} from 'react-toastify';

const List = ({todoCategory, dispatchDeleteAction}) => {

  const [selectTodoCategory, setSelectTodoCategory] = useState('')

  const showModal = (event, id) => {
    event.preventDefault();
    setSelectTodoCategory(id);
    window.$('#confirmationModal').modal('show');
  };

  const handleDelete = () => {
    dispatchDeleteAction(selectTodoCategory, () => {
      window.$('#confirmationModal').modal('hide');
      toast.success('Udah kehapus Nih!');
    },(message)=> {
      window.$('#confirmationModal').modal('hide');
      toast.error(`Error:${message}`);
    });
  };

    return (  
      <div> 
        <React.Fragment>
           {
              todoCategory.map(item => (
            <ul className="list-group" key={item.id}>
              <li className="list-group-item">
                {item.categoryTitle}
              </li>   
              <li>
                <Link to={`/edit/${item.id}`}>
                  <button >
                      edit
                  </button>
                </Link> 
                <a herd="/" onClick={(e) => showModal(e, 
                  item.id)}>
                    <i className="fas fa-trash-alt fa-2x text-danger" >
                    </i>
                </a>
              </li>
            </ul>
            ))
          }
         <Modal handleDelete={handleDelete}/>
        </React.Fragment>
      </div>
    );
} 

const mapDispatchToProps = dispatch => ({
  dispatchDeleteAction: (id, onSucces, onError) => 
    dispatch(deleteCategoryById(id, onSucces, onError))
});


export default connect(null, mapDispatchToProps)(List);


const Modal = ({handleDelete}) => (
    <div className="modal" id="confirmationModal" >
          <div role="document" className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"> confirmation </h5>
              </div>
              <div className="modal-body">
                <p>yakin mau hapus ?</p>
              </div>
              <div className="modal-footer">
                <button type="button" data-dismiss="modal" className="btn btn-secondary">
                  Enggak
                </button>
                <button className="btn btn-secondary" onClick={handleDelete} data-dismiss="modal"> 
                  Iya dong
                </button>
              </div>
            </div>
          </div>
    </div>
)