import './App.css';
import Homepage from './component/Homepage';
import Howbuild from './component/Howbuild';
import Introduction from './component/Introduction';
import Navbars from './component/Navbars.js';
import Technologi from './component/Technologi';
import Whybuild from './component/Whybuild';
function App() {
  return (
    <div className="App">
       <Navbars/>
       <Homepage/>
       <Introduction/>
       <Whybuild/>
       <Technologi/>
       <Howbuild/>
     
    </div>
  );
}

export default App;
