import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skills/Skill";
import Works from "./components/Works/Works";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
