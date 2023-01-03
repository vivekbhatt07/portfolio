import "./App.scss";
import { HomePage, AboutPage, ProjectPage } from "./Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
