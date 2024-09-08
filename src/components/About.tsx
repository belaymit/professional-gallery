import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}


const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Tilt className='xs:w-[250px] w-full' options={{
    max: 45,
    scale: 1,
    speed: 450,
  }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-green-orange-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-black-100 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
       variants={fadeIn("up", "spring", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");