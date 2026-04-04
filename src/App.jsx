import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Features from "./Component/Features";
import Plans from "./Component/Plans";
// import Coverage from "./Component/Coverage";
import HowItWorks from "./Component/HowItWorks";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <div className="min-h-[100dvh] w-full selection:bg-accent/20 bg-[#f9fafb]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Plans />
        {/* <Coverage /> */}
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
