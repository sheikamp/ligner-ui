import './Login.css'
import { Router, Link } from 'react-router-dom'

const Login = () => {
    return (
        <Router>
            <div>
                <input placeholder="Enter your username here..."/>
                <button>Login</button>
            </div>
            <p className="Sign-in-text">Not a member yet? Sign in <Link className="Sign-in-link" to="/signin">here.</Link></p>
        </Router>
    );
}

export default Login;