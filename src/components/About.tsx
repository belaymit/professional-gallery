
import { services } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { styles } from "../style";
import ServiceCard from "./cards/ServiceCard";
import { socialLinks } from "../utils/socialMedia";


export default function About () {
  return (
    <motion.section
    variants={staggerContainer(0.1, 0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
  >
    <span className='hash-span' id="about">
      &nbsp;
    </span>
      <motion.div variants={textVariant(0.2)}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
       variants={fadeIn("up", "spring", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
        I'm a skilled frontend developer with a strong background in TypeScript and JavaScript, and deep expertise in frameworks like React, Node.js, Three.js and Next.js. 
        My experience spans across technologies such as Ant Design, TailwindCSS, Prisma, Strapi, GraphQL, and more. 
        Additionally, I'm familiar with LLM, machine learning, data analysis, and data cleaning. 
        I'm a quick learner who enjoys collaborating with clients to create efficient, scalable, and user-centric solutions that address real-world problems. 
        Let's work together to bring your vision to life!
      </motion.p>

      <motion.div
        variants={textVariant(0.2)}
        className='mt-12 flex gap-4'
      >
        {
          socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-4 bg-primary text-white p-2 rounded-full transition-transform duration-300 ease-in-out transform hover:bg-[#ff4405] hover:text-white hover:scale-110'
            >
              {link.icon}
            </a>
          ))
        }
      </motion.div>
      
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};
