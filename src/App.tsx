import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Programs from "./pages/Programs"
import Plugins from "./pages/Plugins"
import ArgoMain from "./pages/ArgoMain"
import Discord from "./pages/Discord"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programlar" element={<Programs />} />
        <Route path="/pluginler" element={<Plugins />} />
        <Route path="/argomain" element={<ArgoMain />} />
        <Route path="/discord" element={<Discord />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App