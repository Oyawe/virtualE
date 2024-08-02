import video1 from "../assets/video1.mp4";
import video3 from "../assets/video3.mp4";
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
          <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl">
            VirtualE build tools
            <span className="text-transparent bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text">
              {" "}
              for developers
            </span>
          </h1>
        </motion.h1>
        <motion.p variants={textVariant(1.2)}>
          <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500">
            Empower your creativity and bring your VR app ideas to life with our
            intuitive development tools. Get started today and turn your
            imagination into immersive reality!
          </p>
        </motion.p>
        <motion.div variants={textVariant(0.7)}>
          <div className="flex justify-center my-10">
            <a
              href="#"
              className="px-4 py-3 mx-3 rounded-md bg-gradient-to-r from-gray-600 to-gray-800"
            >
              Start for free
            </a>
            <a
              href="#"
              className="px-4 py-3 mx-3 duration-150 ease-in border rounded-md hover:border-gray-500"
            >
              Documentation
            </a>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("down", "spring", 0.2, 1.5)}>
          <div className="flex flex-col justify-center mt-10 gap-x-5 lg:flex-row">
            <video
              autoPlay
              loop
              muted
              className="relative w-full mx-2 my-4 border border-gray-700 rounded-lg shadow right-2 lg:w-1/2 shadow-gray-300"
            >
              <source src={video3} type="video/mp4" />
              Your browser does not support this video.
            </video>
            <video
              autoPlay
              loop
              muted
              className="relative w-full mx-2 my-4 border border-gray-700 rounded-lg shadow right-2 lg:w-1/2 shadow-gray-300 "
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support this video.
            </video>
            {/* <img
              src={pic11}
              alt=""
              className="relative object-fill w-full mx-2 my-4 border border-gray-700 rounded-lg shadow right-2 lg:w-1/2 shadow-gray-300 opacity-90"
            />
            <img
              src={pic10}
              alt=""
              className="relative object-cover w-full mx-2 my-4 border border-gray-700 rounded-lg shadow right-2 lg:w-1/2 shadow-gray-300"
            /> */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
