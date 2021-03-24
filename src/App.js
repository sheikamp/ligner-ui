import logo from './logo.png';
import './App.css';
import Login from './Login';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Ligner!
        </p>
        <Login />
      </header>
    </div>
  );
}

export default App;
