import logo from './logo.svg';
import './App.css';
import FullName from './Profile/FullName';
import Adress from './Profile/Adress';
import ProfilPhoto from './Profile/ProfilPhoto';



function App() {
  return (
    <div className="App">
     <FullName/>
     <Adress/>
     <ProfilPhoto/>
    </div>
  );
}

export default App;
