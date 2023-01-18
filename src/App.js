import "./App.scss";
import {
  AboutPage,
  BlogPage,
  BlogsListPage,
  HomePage,
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
        <Route path="/Blogs" element={<BlogsListPage />} />
        <Route path="/Blogs/Blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
