import { BrowserRouter, Route, Routes } from "react-router-dom"
import Genre from "./pages/genre/Genre"
import Registration from "./pages/registration/Registration"
import Dashboard from "./pages/dashboard/Dashboard"

function App() {


  return (
    <>
     {/* <Registration/>
     <Genre/> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/genre" element={<Genre/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
