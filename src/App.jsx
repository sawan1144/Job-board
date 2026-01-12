import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Jobdetails from "./pages/Jobdetails"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details/:id" element={<Jobdetails />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App
