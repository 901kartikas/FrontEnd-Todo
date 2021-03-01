import React, {useState} from 'react';
import LoginForm from '../components/loginComponent';
import RegisterForm from '../components/registerComponent';

const AuthPage = () => {

     const [pilih, setPilih] = useState({login : true})

     const handleClick = () => {
        setPilih({...pilih, login: !pilih.login})
     };
    
    return (

        <div>
            <React.Fragment>
                <h1> {pilih.login ? 'Daftar Dulu' : 'Langsung Login Aja Yuk'} </h1>
                
                {pilih.login ? <RegisterForm/> : <LoginForm/>}
                <button
                    className = "btn btn-dark"
                    onClick = {handleClick}
                >
                <p> {pilih.login ? 'Login' : 'Register' } </p>
                </button>
            </React.Fragment>            
        </div>
    )
}



export default AuthPage;