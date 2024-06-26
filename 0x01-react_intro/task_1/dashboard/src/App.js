import logo from './Holberton Logo.jpg'
import './App.css'
import { getFooterCopy, getFullYear } from './utils';

export default function App() {
  return(
    <div className="app">
      <div className="App-header">
        <img src={logo} alt="Holberton Logo"></img>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {getFooterCopy()} - {getFullYear()}</p>
      </div>
    </div>
  );
}
