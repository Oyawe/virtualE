import { CheckCircle } from "lucide-react";
import { pricingOptions } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant2 } from "../utils/motion";

const Pricing = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="mt-20">
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
            Pricing
          </h2>
        </motion.div>
        <div className="flex flex-wrap">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className="w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              <div>
                <div className="p-10 border border-neutral-700 rounded-xl">
                  <p className="text-4xl mb-8">
                    {option.title}{" "}
                    {option.title === "Pro" && (
                      <span className="bg-gradient-to-r from-gray-400 to-gray-600 text-transparent bg-clip-text text-xl ml-2 ">
                        (Most Popular)
                      </span>
                    )}
                  </p>
                  <p className="mb-8">
                    <span className="text-5xl mt-6 mr-2">{option.price}</span>
                    <span className="text-neutral-500 tracking-tight">
                      /Month
                    </span>
                  </p>
                  <ul>
                    {option.features.map((feature, index) => (
                      <li key={index} className="mt-8 flex items-center">
                        <CheckCircle />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-gray-800 border border-gray-400 rounded-lg transition duration-200 ease-in"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
