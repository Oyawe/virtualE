import { features } from "../constants";
import { TypingText } from "./CustomTexts";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant2 } from "../utils/motion";

const Features = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          {/* <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Features
          </span> */}
          <TypingText title={"Features"} />
          <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
              Easily build
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                {" "}
                your code
              </span>
            </h2>
          </motion.h2>
        </div>

        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <motion.div variants={fadeIn("up", "tween", 0.2, 1.5)}>
                <div className="flex">
                  <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                    <p className="text-md p-2 mb-20 text-neutral-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
