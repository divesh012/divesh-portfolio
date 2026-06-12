import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
//Projects File
//read all file header Comment Line

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          
          {/* First Project */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/carRent.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          {/* Other Projects */}
          <div className="project-list-wrapper overflow-hidden">
            
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projectt2.png"
                  alt="Spotify-app"
                />
              </div>
              <h2>Ad-free Spotify-style music experience.</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/proj3.png" alt="lion coder App" />
              </div>
              <h2>A Startup Showcase App</h2>
              <p>Designed for clarity, speed, and user satisfaction.</p>
              <h3 className="text-purple-600 text-lg font-medium mt-2">
                Developed by Lion Coder DK
              </h3>
            </div>

          </div>
        </div>

        {/* Show All Projects Button */}
        <div className="w-full mt-12 flex justify-center">
            <a
              href="https://my-projects-six-omega.vercel.app/"
              className="inline-block px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 
                         font-semibold rounded-xl shadow-md hover:shadow-xl 
                         transition duration-300 ease-in-out"
            >
              Show All Projects
            </a>
          </div>
      </div>
    </div>
  );
};

export default AppShowcase;
