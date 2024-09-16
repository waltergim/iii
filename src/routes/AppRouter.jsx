import { Route, Routes } from "react-router-dom"
import { Content } from "../pages/Content"
import { NavBar } from "../components/NavBar"
import { Nosotros } from "../pages/Nosotros"
import { Contacto } from "../pages/Contacto"
import { Footeer } from "../components/Footeer"
import { Trabajos } from "../pages/Trabajos"
import { LoginPage } from "../pages/Login/LoginPage"

 

export const AppRouter = () => {
  return (
    <>
     <NavBar/>
    <Routes>
       
    <Route  path="/" element={<Content />} />
    <Route path="/Nosotros" element={ <Nosotros/> }/>
    <Route path="/Contacto" element={ <Contacto/> }/>
    <Route path="/Trabajos" element={ <Trabajos/> }/>
    <Route path="/Login"  element={ <LoginPage /> }/>

    <Route path="/*"  element={<Content />} />


    </Routes>
      <Footeer/>
    </>
  )
}
