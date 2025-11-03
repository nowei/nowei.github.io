import Navbar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Writing, WritingRoutes } from "./writing/Writing";
import AboutMe from "./about/About";
import Timeline from "./pages/timeline/Timeline";
import NotFoundPage from "./pages/notfoundpage";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";

function App() {
  return (
    <MantineProvider
      defaultColorScheme="auto"
      theme={{
        fontFamily: "Consolas, 'Liberation Mono', Menlo, Courier, monospace",
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          {WritingRoutes()}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
