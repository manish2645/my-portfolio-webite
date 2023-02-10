import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <div id="lp">
        <Header />
        <LandingPage />
      </div>
      <div id="sk">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="am">
        <AboutMe />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
