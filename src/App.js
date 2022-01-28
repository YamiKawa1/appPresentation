import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import aboutImage from "./images/about.png"
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App" >
      <Header/>
      <Feature/>
      <About image={aboutImage} title="Comes with all your needs for daily life" button="Get the app"/>
      <Presentation/>
      <Contact/>
    </div>
  );
}

export default App;
