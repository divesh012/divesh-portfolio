import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

//Read all file header Comment Line
//This is the main file for the portfolio website. It imports all the sections and components and renders them in the correct order. The Toaster component is used to display toast notifications throughout the website.
//They are help to see all files 
//check all files for more information about the project and the code.
//All files Top header comment line is important for understanding the purpose of the file and how it fits into the overall project.
//Index.js file is used for image purpose and all files are used for that purpose.
//Assets folder is used for to store images and other assets.

const App = () => (
  <>
   <Toaster position="top-right" />
    <Navbar />
    <Hero />
    <ShowcaseSection /> 
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
