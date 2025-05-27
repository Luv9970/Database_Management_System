import React , {useEffect, useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // },)


  const[user , setUser] = useState(null)

  //Check karega ki password match kar raha hai ki nahi
  const handleLogin = (email , password) => {
    if(email == 'admin.james@example.com' && password == "123"){
      setUser('admin')
    }
    else if(email == "eve.johnson@example.com" && password == "qwe"){
      setUser('employee')
    }
    else{
      alert("Invalid Credentials");
    }
  }

  // handleLogin("admin.james@example.com" , 123)

  return (
  <>
    {!user ? <Login handleLogin = {handleLogin}/> : ""}
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}

  </>  
  )
}

export default App