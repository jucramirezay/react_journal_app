import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";


export const AuthRoutes = () => {
  return (
    <Routes>

        { /* Login */ }
        <Route path='login' element={<LoginPage />}/>

        { /* Register */ }
        <Route path="register" element={<RegisterPage />}/>

        { /* Ruta diferente */}
        <Route path="/*" element={<Navigate to="/auth/login" />}/>
        
    </Routes>
  )
}
