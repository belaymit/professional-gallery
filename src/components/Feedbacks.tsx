import { motion } from "framer-motion";
import Slider from "react-slick";

import { staggerContainer, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import FeedbackCard from "./FeedbackCard";
import { styles } from "../style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Feedbacks() {
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
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id="">
          &nbsp;
        </span>

    <div className='mt-12 bg-slate-100 rounded-[20px]'>
      <div className={`bg-transparent rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant(0.2)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          >
          <p className={styles.sectionSubText}>What others say about me</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className="mt-2 pb-14 testimonial__wrapper">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
            ))}
          </Slider>
        </div>
    </div>
    </motion.section>
  );
}

