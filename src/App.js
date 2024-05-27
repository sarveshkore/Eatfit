// import logo from './logo.svg';
import './App.css';
import Logo from "./assets/images/logo.png"
// import Cardcontainer from './Components/CardContainer';  
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';
import {Body} from './Components/Body';     //named export/import 

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer/>
    </>
  );
}

export default App;
