
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Home/>
        <h1> App component</h1>
      </div>
    </div>
  );
}

export default App;
