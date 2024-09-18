import React from "react";
// import AboutImage from "../assets/aboutme-image.png";
import AboutImage from "../assets/Tarak_Nath_Bar.png";

const About = () => {
  const skills = [
    { id: 1, title: "HTML & CSS", level: "w-10/12" },
    { id: 2, title: "React", level: "w-11/12" },
    { id: 3, title: "Node", level: "w-11/12" },
    { id: 4, title: "Express", level: "w-11/12" },
    { id: 5, title: "MySQL", level: "w-10/12" },
    { id: 6, title: "MongoDB", level: "w-11/12" },
  ];

  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 text-justify">
              I am an aspiring full-stack developer with a growing passion for both frontend and backend development.
              While I'm still in the early stages of my journey, I’ve already built several projects that have helped me gain hands-on experience and a deeper understanding of modern web technologies.
              I’m eager to continue learning, improving my skills, and taking on new challenges that push me to create more dynamic and responsive applications.
            </p>
           {skills.map((skill,index)=>(
            <div key={index} className="flex flex-col md:flex-row items-center md:space-x-4 text-sm md:text-base">
            <label className="w-full md:w-1/4 text-start md:text-left mb-2 md:mb-0">
              {skill.title}
            </label>
            <div className="w-full md:w-3/4 bg-gray-800 rounded-full h-2.5">
              <div
                className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.level}`}
              ></div>
            </div>
          </div>
           ))}
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Industrial Training</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  250+
                </h3>
                <p>Coding Problems</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Full Stack Projects </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
