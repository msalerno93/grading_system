// App.tsx
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import HomePage from "./pages/home/HomePage";
import StudentsPage from "./pages/students/StudentsPage";
import TeachersPage from "./pages/teachers/TeachersPage";
import SubjectsPage from "./pages/subjects/SubjectsPage";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
