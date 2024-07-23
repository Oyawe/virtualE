import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="flex flex-col items-center mt-6 lg:mt-20 ">
        <motion.h1 variants={textVariant(1.1)}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            VirtualE build tools
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 text-transparent bg-clip-text">
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
        <motion.div variants={textVariant(0.7)}>
          <div className="flex justify-center my-10">
            <a
              href="#"
              className="bg-gradient-to-r from-gray-600 to-gray-800 py-3 px-4 mx-3 rounded-md"
            >
              Start for free
            </a>
            <a
              href="#"
              className="py-3 px-4 mx-3 border hover:border-gray-500 ease-in duration-150 rounded-md"
            >
              Documentation
            </a>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("down", "spring", 0.2, 1.5)}>
          <div className="flex flex-col lg:flex-row mt-10 justify-center">
            <video
              autoPlay
              loop
              muted
              className="relative right-2 rounded-lg w-full lg:w-1/2 border border-gray-700 shadow shadow-gray-300 mx-2 my-4 "
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support this video.
            </video>
            <video
              autoPlay
              loop
              muted
              className="relative right-2 rounded-lg w-full lg:w-1/2 border border-gray-700 shadow shadow-gray-300 mx-2 my-4 "
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support this video.
            </video>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
