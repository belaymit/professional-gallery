import { motion } from "framer-motion";

import { projects } from "../constants";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { styles } from "../style";
import ProjectCard from "./ProjectCard";

export default function Works (){
  return (
    <motion.section
        variants={staggerContainer(0.1, 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className='hash-span' id="">&nbsp;</span>
  
      <motion.div variants={textVariant(0.2)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", 
      }}
      >
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
}

