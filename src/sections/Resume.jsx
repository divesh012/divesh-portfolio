import TitleHeader from "../components/TitleHeader";

const Resume = () => {
  return (
    <section id="resume" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Resume"
          sub="📄 View or download my resume"
        />

        <div className="flex justify-center mt-10">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;