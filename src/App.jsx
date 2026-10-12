
import api from "./api/axios.js"
import {Signup} from "./components/Signup.jsx"

import './App.css'

function App() {
const getBloodRequests=async()=>{
  try{
    const response=await api.get("/bloodReq/request/me");
    console.log(response.data)
  }
catch(error){
  console.log("error:",error)
}
}

  return (
    <>
    <Signup/>
    </>
  )
}

export default App
