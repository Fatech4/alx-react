import logo from './logo.jpg';
import './App.css';

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
      </div>
      <div className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
