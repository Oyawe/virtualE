import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant2 } from "../utils/motion";

const Testimonials = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="mt-20 tracking-wide">
        <motion.h2 variants={textVariant2} initial="hidden" whileInView="show">
          <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20">
            What People are saying
          </h2>
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testy, index) => (
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1.5)}
              key={index}
              className="flex w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
            >
              <div>
                <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                  <div>
                    <p>{testy.text}</p>
                  </div>
                  <div className="flex mt-8 justify-start items-center">
                    <img
                      className="w-12 h-12 mr-6 rounded-full border border-neutral-500"
                      src={testy.image}
                      alt={testy.user}
                    />
                    <div>
                      <h6>{testy.user}</h6>
                      <span className="text-sm font-normal italic text-neutral-600">
                        {testy.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
