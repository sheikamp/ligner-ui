import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div>
                <input placeholder="Enter your username here..."/>
                <button>Login</button>
            </div>
            <p className="Sign-in-text">Not a member yet? Sign in <Link className="Sign-in-link" to="/signin">here.</Link></p>
        </>
    );
}

export default Login;