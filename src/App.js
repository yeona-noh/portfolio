import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
