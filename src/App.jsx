import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import FaqSec from "./components/FaqSec";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <Benefits />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <section id="pricing">
          <Testimonials />
        </section>
        <section id="contact">
          <FaqSec />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
