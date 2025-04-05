import './App.css'
import Dashboard from "./components/dashboard.jsx";
import Progress from './components/Progress.jsx';
import Activity from './components/Activity.jsx';
import Trainer from './components/TrainerProfile.jsx';
import DietMenu from './components/DIetMenu.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './cards/sidebar.jsx';
import Workout from './cards/Workout.jsx';
import LeftSidebar from './cards/LeftSidebar.jsx';
import CalorieChart from './components/CalorieChart.jsx';
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
