import  React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import AuthPage from './pages/authPage';
import FormPage from "./pages/formPage";
import ListPage from './pages/actionPage';
import {connect} from 'react-redux'
import Spinner from "./components/spinner/spinner";
import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css' 
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
            <Route exact path="/form/:id" component={FormPage} />
            <Route exact path="/edit" component={ListPage} />
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