
import './App.css';
import Login from './Components/Login'
import InfiniteScroll from './Components/InfiniteScroll';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false)


  return (
    <BrowserRouter>
    <div className="App ">
      <Routes>
   <Route path='/' element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}/>
   <Route path='/list' element={<InfiniteScroll  isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
