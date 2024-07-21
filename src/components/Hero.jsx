import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex flex-col items-center mt-6 lg:mt-20 ">
        <motion.h1 variants={textVariant(1.1)}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            VirtualR build tools
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              {" "}
              for developers
            </span>
          </h1>
        </motion.h1>
        <motion.p variants={textVariant(1.2)}>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Empower your creativity and bring your VR app ideas to life with our
            intuitive development tools. Get started today and turn your
            imagination into immersive reality!
          </p>
        </motion.p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </a>
          <a
            href="#"
            className="py-3 px-4 mx-3 border hover:border-orange-500 ease-in duration-150 rounded-md"
          >
            Documentation
          </a>
        </div>
        <div className="flex flex-col lg:flex-row mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="relative right-2 rounded-lg w-full lg:w-1/2 border border-orange-700 shadow shadow-orange-400 mx-2 my-4 "
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support this video.
          </video>
          <video
            autoPlay
            loop
            muted
            className="relative right-2 rounded-lg w-full lg:w-1/2 border border-orange-700 shadow shadow-orange-400 mx-2 my-4 "
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support this video.
          </video>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
