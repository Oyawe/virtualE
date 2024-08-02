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
      id="pricing"
    >
      <div className="mt-20">
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <h2 className="my-8 text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl">
            Pricing
          </h2>
        </motion.div>
        <div className="flex flex-wrap">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className="w-full p-2 sm:w-1/2 lg:w-1/3"
            >
              <div>
                <div className="p-10 border border-neutral-700 rounded-xl">
                  <p className="mb-8 text-4xl">
                    {option.title}{" "}
                    {option.title === "Pro" && (
                      <span className="ml-2 text-xl text-transparent bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text ">
                        (Most Popular)
                      </span>
                    )}
                  </p>
                  <p className="mb-8">
                    <span className="mt-6 mr-2 text-5xl">{option.price}</span>
                    <span className="tracking-tight text-neutral-500">
                      /Month
                    </span>
                  </p>
                  <ul>
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center mt-8">
                        <CheckCircle />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full h-12 p-5 mt-20 text-xl tracking-tight text-center transition duration-200 ease-in border border-gray-400 rounded-lg hover:bg-gray-800"
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
