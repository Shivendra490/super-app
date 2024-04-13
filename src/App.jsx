import { BrowserRouter, Route, Routes } from "react-router-dom"
import Genre from "./pages/genre/Genre"
import Registration from "./pages/registration/Registration"

function App() {


  return (
    <>
     {/* <Registration/>
     <Genre/> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/genre" element={<Genre/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
