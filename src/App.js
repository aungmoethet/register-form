
import './App.css';
import Mainpage from './component/Mainpage';
import { BrowserRouter } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
         <Mainpage/>
      </BrowserRouter>

    </div>
  );
}

export default App;