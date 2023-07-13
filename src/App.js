import './App.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import EmployList from './EmployList';
import Createnew from './Createnew';
import Detail from './Detail';
import Edit from './Edit';
function App() {


 
  return (
    <div className="App">
    
       {/* <h1>React crud Operation</h1> */}
      
       <BrowserRouter>
      <Routes>
          <Route path='/' element = {<EmployList/>}> </Route>
          <Route path='/employee/createnew' element = {<Createnew/>}> </Route>
          <Route path='/employee/detail/:id' element = {<Detail/>}> </Route>
          <Route path='/employee/edit/:id' element = {<Edit/>}> </Route>

         
      </Routes>
  </BrowserRouter>

    </div>
  );
  // <th>{e.id}</th>
  // <th>{e.username}</th>
  // <th>{e.email}</th>
  // <th>{e.phone}</th>
  // <th>{e.id}</th>
 
}

export default App;
