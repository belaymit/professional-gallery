import { motion } from "framer-motion";
import Slider from "react-slick";

import { projects } from "../constants";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { styles } from "../style";
import ProjectCard from "./ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Works (){

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


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
          className="mt-3 text-secondary text-[17px] leading-[30px] text-justify"
        >
          The following projects highlight my skills and experience through practical examples of my work. Each project includes a brief description, along with links to code repositories and live demos, demonstrating my ability to tackle complex challenges, utilize various technologies, and efficiently manage projects.
        </motion.p>
      </div>

      <div className="mt-20 pb-14 projects__wrapper">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </Slider>
      </div>
    </motion.section>
  );
}

