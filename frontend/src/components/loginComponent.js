import React, {useState} from 'react';
import { connect } from "react-redux";
import {toast} from 'react-toastify';
import { loginUser } from "../Redux/actions/authAction";
import {  useToasts} from "react-toast-notifications";




const LoginComponent = ({dispatchLoginAction}) => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 

  const handleSubmit = (event) => {
    console.log(username, password)
    event.preventDefault();
    dispatchLoginAction(username, password, 
      () => toast.success("udah login thx"),
      (message) => toast.error(`Error: ${message}`));
  };

    return (
      <div>
        <React.Fragment>
          <form noValidate onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
              User Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange = {(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input type="password" 
              className="form-control" 
              id="password" 
              name="password"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}/>
            </div>
           
          </div>
          <button type="submit">
              Login
          </button>
          </form>
        </React.Fragment>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  dispatchLoginAction: (username, password, onSuccess, onError) =>
      dispatch(loginUser({username, password}, onSuccess, onError))
});

export default connect(null, mapDispatchToProps)(LoginComponent);