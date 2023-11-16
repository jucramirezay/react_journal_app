import { Routes, Route, Navigate } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";

export const JournalRoutes = () => {
  return (
    <Routes>

        { /* JournalApp */ }
        <Route path="/" element={<JournalPage /> } />

        { /* Cualquier otra ruta */ }
        <Route path="/*" element={<Navigate to="/" /> } />


    </Routes>
  )
}
