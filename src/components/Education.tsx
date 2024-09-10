import { VerticalTimeline} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { educations } from "../constants";
import { staggerContainer, textVariant } from "../utils/motion";
import EducationCard from "./cards/EducationCard";

export default function Education() {
  return (
    <motion.section
    variants={staggerContainer(0.1, 0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
  >
    <span className='hash-span' id="education">
      &nbsp;
    </span>
      <motion.div variants={textVariant(0.2)}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have learned so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Educations
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {educations.map((experience, index) => (
            <EducationCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};
