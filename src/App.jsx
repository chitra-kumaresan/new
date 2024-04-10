
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import ViewEmployeeComponent from './components/ViewEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'
import FrontPageComponent from './components/FrontPageComponent'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
<Routes>
  <Route path='/' element={<FrontPageComponent />}></Route>
<Route path="/list" element={<ListEmployeeComponent />}></Route>
<Route path="/add-emp" element={<EmployeeComponent />}></Route>
<Route path='/view/:empId' element={<ViewEmployeeComponent />}></Route>
<Route path='/update-emp/:empId' element={<EmployeeComponent />}></Route>
<Route path='/login' element={<LoginComponent />}></Route>
<Route path='/reg' element={<RegisterComponent />}></Route>
</Routes>
 </BrowserRouter>
</>
  )
}

export default App;
