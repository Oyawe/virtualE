/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title }) => (
  <motion.span
    variants={textContainer}
    className=" bg-neutral-900 text-gray-300 rounded-full h-6 text-sm font-medium px-4 py-1 uppercase"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.span>
);

export const TitleText = ({ title }) => (
  <motion.h2 variants={textVariant2} initial="hidden" whileInView="show">
    {title}
  </motion.h2>
);
