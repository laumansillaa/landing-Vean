import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Funcionamiento from "./components/funcionamiento/Funcionamiento";
import Navv from "./components/nav/Nav";
import Project from "./components/project/Project";
import Roadmap from "./components/roadmap/Roadmap";
import Team from "./components/team/Team";

function App() {
  return (
    <div className="App">
      <Navv />
      <Home />
      <Funcionamiento />
      <Project />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
