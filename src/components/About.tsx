
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
        Full-Stack Developer with 4+ years of experience specializing in high-performance web applications using React, TypeScript, Next.js, Node.js, and Python, designed to handle 10,000+ concurrent users. I excel at building scalable frontend architectures with Redux and TanStack Query, crafting optimized UIs with Tailwind CSS, Ant Design, and Three.js, and developing robust backend systems with Node.js, Express, .NET (C#), and GraphQL/REST APIs—all engineered for speed, scalability, and maintainability. With additional expertise in PostgreSQL, Prisma, Strapi, and cloud deployment, I also leverage AI/ML, LLMs, and data analysis to build intelligent, data-driven solutions. A collaborative problem-solver, I thrive on transforming complex challenges into efficient, user-centric applications that deliver real-world impact.
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
