import "./App.scss";
import {
  HomePage,
  AboutPage,
  ProjectPage,
  ExtraPage,
  FrontMentorPage,
  NeogCampPage,
} from "./Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectPage />} />
        <Route path="/Projects/FrontEndMentor" element={<FrontMentorPage />} />
        <Route path="/Projects/NeogCamp" element={<NeogCampPage />} />
        <Route path="/Projects/Extra" element={<ExtraPage />} />
      </Routes>
    </div>
  );
}

export default App;
