import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Modal from "./cards/Modal";

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export default function FeedbackCard({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: FeedbackCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const truncatedTestimonial =
    testimonial.length > 90 ? `${testimonial.substring(0, 90)}...` : testimonial;

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
      >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className='mt-1'>
          <p className='text-white tracking-wider text-[18px]'>
            {truncatedTestimonial}
            {testimonial.length > 90 && (
              <span
                onClick={toggleModal}
                className='cursor-pointer text-blue-500 ml-2'
              >
                more
              </span>
            )}
          </p>

          <div className='mt-7 flex justify-between items-center gap-1'>
            <div className='flex-1 flex flex-col'>
              <p className='text-white font-medium text-[16px]'>
                <span className='blue-text-gradient'>@</span> {name}
              </p>
              <div className='mt-1 text-secondary text-[12px]'>
                {designation}
              </div>
              <div className='mt-1 text-blue-400 text-[12px]'>{company}</div>
            </div>

            <img
              src={image}
              alt={`feedback_by-${name}`}
              className='w-10 h-10 rounded-full object-cover'
            />
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <div className='p-4 relative'>
            <h3 className='text-lg font-bold'>{name}</h3>
            <p className="mt-4">{testimonial}</p>
            <div style={{
              position: 'absolute',
              top: -36,
              left: -36,
            }}><img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-12 h-12 rounded-full object-cover'
          /></div>
            <button
              className='mt-4 bg-red-500 text-white p-2 rounded'
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
