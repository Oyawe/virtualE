import code from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant2 } from "../utils/motion";

const Workflow = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="workflow"
    >
      <div className=" mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <h2 className="mt-10 text-3xl tracking-wide sm:text-5xl lg:text-6xl lg:mt-20">
              Accelerate your
              <span className="text-transparent bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text">
                {" "}
                coding workflow.
              </span>
            </h2>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center mt-10">
          <div className="w-full p-2 lg:w-1/2">
            <motion.div variants={fadeIn("right", "spring", 0.2, 1.5)}>
              <img src={code} alt="code" />
            </motion.div>
          </div>

          <div className="w-full pt-10 lg:w-1/2">
            {checklistItems.map((items, index) => (
              <motion.div
                key={index}
                variants={fadeIn("left", "spring", 0.2, 1.5)}
              >
                <div className="flex">
                  <div className="items-center justify-center w-10 h-10 p-2 mx-6 text-green-700 rounded-full bg-neutral-900">
                    <CheckCircle />
                  </div>
                  <div>
                    <h5 className="mt-1 mb-2 text-xl">{items.title}</h5>
                    <p className="p-2 mb-20 text-md text-neutral-500">
                      {items.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Workflow;
