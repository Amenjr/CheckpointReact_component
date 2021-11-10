import Profilephoto from './component/profile/ProfilePhoto';
import Ful from './component/profile/FullName';
import Adrees from './component/profile/Adress';


import './App.css';

function App() {
  return (
    <div>
      <div className="contenant">
      <Profilephoto/>
      <Ful/>
      <Adrees/>
      </div>
   
     
    </div>
  );
}

export default App;
