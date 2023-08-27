import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
     <BrowserRouter>
     <dev className="relative z-0 bg-primary">
      <dev className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </dev>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <dev className="relative z-0">
        <Contact />
        <StarsCanvas />

      </dev>
     </dev>
     </BrowserRouter>
  )
}

export default App
