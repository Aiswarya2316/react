import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";




function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="About" element={<About/>}/>



      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App