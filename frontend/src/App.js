import  React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css' 
import {connect} from 'react-redux'

import Header from "./components/header";
import Spinner from "./components/spinner/spinner";

import AuthPage from './pages/authPage';
import FormPage from "./pages/formPage";
import AddTodo from './pages/addTodo';
import EditTodo from './pages/editTodo';
import SubList from './pages/sublist';
import FormEdit from './pages/editSubTodo';
import  FormCreateSubTodo  from "./pages/formCreateSubTodo";
import {logOutUser} from './Redux/actions/authAction'


const App = ({user, dispatchLogoutAction}) => {
  return (
    <React.Fragment>
      <ToastContainer position="top-right" 
        autoClose={2000} hideProgressBar transition={Slide}/>
      <Spinner/>
      <Header isLoggedIn={user.isLoggedIn} 
              onLogOut={dispatchLogoutAction}/>
      <div className="container my-5">
        {!user.isLoggedIn ? (
          <Switch>
            <Route exact path="/auth" component={AuthPage} />
            <Redirect to="/auth" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/form" component={FormPage} />
            <Route exact path="/edit/:id" component={EditTodo} />
            <Route exact path="/add" component={AddTodo} />
            <Route exact path="/detail/:todoCategoryID" component={SubList}/>
            <Route exact path="/editSubTodo/:EditSubTodo" component={FormEdit}/>
            <Route exact path="/addSubTodo/:id" component={FormCreateSubTodo}/>
            <Redirect to="/form" />
          </Switch>
        )}    
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({user : state.user});
const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutAction : () => dispatch(logOutUser())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);