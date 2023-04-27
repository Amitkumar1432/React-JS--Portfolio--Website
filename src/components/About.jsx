import React from "react";
const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-2">
          Hello, I'm Amit Kumar. I hope you are doing well. I work for Let Me
          Grab. Over the past 4 months, I have acquired relevant skills and
          experiences, which I will bring to your organization. In addition, I
          have 3 months of experience working at Ajatus Software, which I will
          use in my future career.
        </p>
        <br />
        <p className="text-xl">
          I was curious as to whether your team was in charge of the Software
          Developer Intern position that was posted on LinkedIn. I'd be
          interested in talking with you further if your hiring manager is
          looking to fill this position.
        </p>
      </div>
    </div>
  );
};

export default About;
