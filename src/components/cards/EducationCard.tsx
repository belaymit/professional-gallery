import { VerticalTimelineElement} from "react-vertical-timeline-component";
import { educations } from "../../constants";

type Experience = {
  experience:educations
 }

 const colors = ['#e74c3c', '#ed091b', 'green', 'orange'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function EducationCard({ experience }:Experience){
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "0.5rem"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.institute}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.degree}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.institute}
        </p>
        <p
          className='text-blue-300 text-[14px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.date}
        </p>
      </div>
      <div>
        <p>{experience.remark}</p>
        <p>{experience.score}</p>

          <div className='mt-4 flex flex-wrap gap-2'>
          {experience?.skills && experience?.skills.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>

    </VerticalTimelineElement>
  );
};
