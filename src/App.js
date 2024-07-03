import './App.css';
import HeaderMain from './components/Body/Main/HeaderMain';
import Navbar from './components/navbar/Navbar'
import Subnav from './components/navbar/Subnav'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Subnav/>
        <HeaderMain/>
    </div>
  );
}

export default App;
