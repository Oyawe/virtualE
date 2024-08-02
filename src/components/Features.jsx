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
      id="features"
    >
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          {/* <span className="h-6 px-2 py-1 text-sm font-medium text-orange-500 uppercase rounded-full bg-neutral-900">
            Features
          </span> */}
          <TypingText title={"Features"} />
          <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <h2 className="mt-10 text-3xl tracking-wide sm:text-5xl lg:text-6xl lg:mt-20">
              Easily build
              <span className="text-transparent bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text">
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
                  <div className="flex items-center justify-center w-10 h-10 p-2 mx-6 text-gray-600 rounded-full bg-neutral-900">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                    <p className="p-2 mb-20 text-md text-neutral-500">
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
