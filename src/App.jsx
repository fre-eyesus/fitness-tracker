import './App.css'
import Dashboard from "./components/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalorieInput from './components/CalorieInput.jsx';


function App() {

  return (
   <>
<Router>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/calories" element={<CalorieInput />} />
  </Routes>
</Router>

  </>
  )
}

export default App
