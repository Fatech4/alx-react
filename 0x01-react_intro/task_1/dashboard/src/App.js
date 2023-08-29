import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='logo'>
          {' '}
          <img src={logo} alt='logo' />
        </div>
        <div className='title'>
          <h1>School Dashboard</h1>
        </div>
      </div>
      <div className='App-body'>
        <p>Login to access to the full dashboard</p>
        <form>
          <label for='email'>
            Email: <input type='email' id='email' />
          </label>{' '}
          <br />
          <label for='password'>
            Password: <input type='password' id='password' />
          </label>{' '}
          <br />
          <input type='submit' value='OK' />
        </form>
      </div>
      <div className='App-footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
