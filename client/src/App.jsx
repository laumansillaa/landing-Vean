import './App.css'
import Home from './components/home/Home'
import Navv from './components/nav/Nav'
import Project from './components/project/Project'
import Roadmap from './components/roadmap/Roadmap'

function App() {

  return (
    <div className="App">
      <Navv/>
      <Home/>
      <Project/>
      <Roadmap/>
    </div>
  )
}

export default App
