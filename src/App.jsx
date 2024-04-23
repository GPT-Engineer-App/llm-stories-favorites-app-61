import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LLMs from "./pages/LLMs.jsx";
import AIEthics from "./pages/AIEthics.jsx";
import Robotics from "./pages/Robotics.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/llms" element={<LLMs />} />
        <Route path="/ai-ethics" element={<AIEthics />} />
        <Route path="/robotics" element={<Robotics />} />
      </Routes>
    </Router>
  );
}

export default App;
