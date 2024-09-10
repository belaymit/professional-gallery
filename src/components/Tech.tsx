import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { styles } from "../style";
import { staggerContainer, textVariant } from "../utils/motion";

export default function Tech (){
  return (
    <motion.section
    variants={staggerContainer(0.1, 0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
  >
    <span className='hash-span' id="">
      &nbsp;
    </span>
     <motion.div variants={textVariant(0.2)}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I've worked with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          TechStack
        </h2>
      </motion.div>
      
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </motion.section>
  );
};
