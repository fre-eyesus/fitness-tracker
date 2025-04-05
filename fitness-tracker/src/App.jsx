import './App.css'
import Dashboard from "./components/dashboard.jsx";
import Progress from './components/Progress.jsx';
import Activity from './components/Activity.jsx';
import Trainer from './components/TrainerProfile.jsx';
import DietMenu from './components/DIetMenu.jsx';
import Footer from './components/Footer.jsx';
function App() {

  return (
    <>
    <div >
      <Dashboard />
      <div className='md:flex md:flex-row md:ml-22'>
        <Activity />
        <Progress />
      </div>
         <Trainer />
        <DietMenu />
      
    </div>
    <Footer />
    </>
  )
}

export default App
