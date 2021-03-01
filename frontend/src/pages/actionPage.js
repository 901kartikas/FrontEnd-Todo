import React, { useState } from "react";
import List from "../components/List";
import {connect} from 'react-redux'
import { CreateTodo } from "../Redux/actions/todolistAction";


const ListPage = ({dispatchCreateTodoAction}) => {

    const [title, setTitle] = useState('')

    return (
        <div>
            <form noValidate>
                <div className="form-group">
                    <input
                    placeholder="judul"
                    
                    />
                    
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchCreateTodoAction : (data, onSuccess, onError) => 
        dispatch(CreateTodo(data, onSuccess,onError))
});



export default connect(null,mapDispatchToProps)(ListPage);
