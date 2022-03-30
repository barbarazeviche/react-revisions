import Navbar from './Navbar';
import Home from './Home';
import './index.css'

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>App Component</h1>
        <Home/>
      </div>
    </div>
    </>
  );
}

export default App;
