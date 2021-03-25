import './Login.css'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    input: {
        background: "rgb(232, 241, 250)"
    }
}));

const Login = () => {
    const classes = useStyles();
    return (
        <>
            <div>
                <form>
                    <TextField id="standard-basic" InputProps={{ className: classes.input }} />
                    <Button variant="contained" color="primary" component={Link} to="/dashboard">Login</Button>
                </form>
            </div>
            <p className="Sign-in-text">Not a member yet? Sign in <Link className="Sign-in-link" to="/signin">here.</Link></p>
        </>
    );
}

export default Login;