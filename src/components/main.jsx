import React from "react";
import { BsFacebook } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram , FaLinkedin, FaGithub } from 'react-icons/fa';

function MainPart() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://s3.voyapon.com/wp-content/uploads/2018/03/20162333/Kamishikimi-Kumanoimasu-Shrine.jpg"
        alt="img"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
      <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Muhammed Raheem</h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
          <span>I'm a </span>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              " Web Devaloper",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              " Coder",
              2000,
              " Self learner",
              2000,
              // 'We produce food for Chinchillas',
              // 1000
            ]}
            wrapper="div"
            cursor={true}
            speed={50}
            style={{ fontSize: "1em", paddingLeft:'5px', display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>
        <div className="flex justify-between pt-6 max-w-[200px] w-full">
          <FaGithub  className="cursor-pointer" size={30}/>
          <FaLinkedin className="cursor-pointer" size={30}/>
          <FaInstagram className="cursor-pointer" size={30}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default MainPart;
