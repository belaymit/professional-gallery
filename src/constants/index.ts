import {
  backend,
  typescript,
  reactjs,
  antd,
  redux,
  tailwind,
  nodejs,
  web,
  mongodb,
  graphql,
  strapi,
  web_dev,
  sass,
  translator,
  git,
  figma,
  prisma,
  microverse,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  hm_uni,

  miliyon,
  glenda,
  ahad,
  iqbal,
  giovani,
  birhanu,
  awesome_books,

  astu,
  mit,
  michu_tech
} from "../assets";

export type NavLink = {
  id: string;
  title: string;
};

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export type Service = {
  title: string;
  icon: string;
};



export const services: Service[] = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Full-stack Developer",
    icon: backend,
  },
  {
    title: "Web Development Tutor",
    icon: web_dev,
  },
  {
    title: "Translator and Transcriber",
    icon: translator,
  }
];


export type Technology = {
  name: string;
  icon: string;
};

export const technologies: Technology[] = [

  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: 'antd',
    icon: antd
  },
  {
    name: 'graphql',
    icon: graphql
  },
  {
    name: 'strapi',
    icon: strapi
  }, 
  {
    name: 'Sass',
    icon: sass
  },
  
];

export type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company_name: "10 Academy",
    icon: starbucks,
    iconBg: "#f8f9f9",
    date: "September 2023 - Present",
    points: [
      "Developing web applications with a focus on writing fast, optimized, and clean code",
      "Working with UI/UX designers to create user-friendly and visually appealing interfaces.",
      "Working with the back-end team to ensure smooth integration and optimize app performance.",   
      "Participating in code reviews to enhance quality and maintainability.",
      "Ensuring responsive design and cross-browser compatibility for optimal user experience."
    ],
  },
  {
    title: "Project Manager",
    company_name: "MichuTech Inc.",
    icon: michu_tech,
    iconBg: "#0e60b2",
    date: "October 2023 - February 2024",
    points: [
      "Planning project timelines and ensuring timely delivery of milestones.",
      "Testing functionality of web applications to guarantee quality and performance.",
      "Reviewing code for consistency, optimization, and adherence to best practices.",
      "Developing websites and ensuring they are responsive and cross-browser compatible."
    ],
  },  
  {
    title: "Frontend Developer, Intern",
    company_name: "10 Academy",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - September 2023",
    points: [
      "Writing comprehensive documentation for the codebase to enhance clarity and maintainability.",
      "Implementing mobile view and Progressive Web App (PWA) features for the Tenx platform.",
      "Collaborating with cross-functional teams to ensure a seamless and user-friendly experience.",
      "Optimizing code for performance improvements across various devices and platforms."
    ],
  },  
  {
    title: "Full stack Developer",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#6b1de4",
    date: "Oct 2022 - June 2023",
    points: [
      "Mentored junior web developers through code reviews, improving code quality and performance.",
       "Advised on maintaining motivation for program longevity.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2019 - Jan 2021",
    points: [
      "Developed websites for hospitals, colleges, and retail stores, ensuring their functionality and user experience.",
      "Designed UX for websites to provide intuitive and user-friendly interfaces.",
      "Trained students in website development, covering modern web technologies and best practices.",
    ],
  },  
  {
    title: "Instructor",
    company_name: "Haramaya University",
    icon: hm_uni,
    iconBg: "#fff",
    date: "Oct 2018 - Oct 2021",
    points: [
      "Taught courses such as Database Management Systems, Machine Learning, C++, and Python.",
      "Monitored and guided students on their final projects, ensuring quality and completion.",
      "Provided voluntary web development training to students, enhancing their practical skills.",
    ],
  }  
];

export type educations = {
  degree: string;
  institute: string;
  icon: string;
  iconBg: string;
  date: string;
  remark: string;
  score?: string;
  skills?: {
    name: string;
    color: string;
  }[];
}

export const educations: educations[] = [
  {
    degree: "Full stack Development Program",
    institute: "Microverse",
    icon: microverse,
    iconBg: "#fff",
    date: "Oct 2022 - June 2023",
    remark: "A full-time, online program that trains software developers to work remotely.",
    skills:[
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Ruby on Rails",
        color: "blue-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "green-text-gradient",
      },
      {
        name: "Code Reviews",
        color: "pink-text-gradient",
      }
    ]
  },
  {
    degree: "Master of Science",
    institute: "Adama Science and Technology University",
    icon: astu,
    iconBg: "#fff",
    date: "Oct 2021 - June 2023",
    remark: "Graduated with a degree and honors in Computer Science and Engineering",
    score: "First Class",
    skills: [
      {
        name: "Data Analysis",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Natural Language Processing",
        color: "pink-text-gradient",
      },
      {
        name: "Data Annotation",
        color: "blue-text-gradient",
      }
    ],
  },
  {
    degree: "Bachelor of Science",
    institute: "Mekelle Institute of Technology",
    icon: mit,
    iconBg: "#fff",
    date: "Oct 2014 - June 2018",
    remark: "Graduated with a degree and honors in Computer Science and Engineering",
    score: "First Class",
    skills: [
      {
        name: "Data Structures",
        color: "blue-text-gradient",
      },
      {
        name: "Algorithms",
        color: "green-text-gradient",
      },
      {
        name: "Database Management Systems",
        color: "pink-text-gradient",
      },
    ],
  },
];

export type Testimonial = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    testimonial:
      `I have had the privilege of working alongside Belay as a Front-end developer at 10 Academy. Belay is not only an accomplished front-end developer but also a true master of UI and UX design. His passion for creating seamless and visually appealing user experiences is evident in every project he undertakes. He combines technical expertise with a keen eye for design, producing results that consistently exceed expectations. What truly sets Belay apart is his unwavering dedication and strong work ethic. He consistently goes the extra mile to ensure project success, never shying away from a challenge, and his ability to remain focused and deliver under tight deadlines is truly remarkable. Moreover, Belay is a creative thinker who consistently brings innovative ideas to the table. His insights and suggestions have proven invaluable in driving the success of our projects at 10 Academy. If you're looking for a front-end developer with an exceptional blend of technical skills, design sensibilities, and a commitment to delivering quality results, Belay is the perfect candidate. I am confident that he will be a valuable asset to any team or project, and I wholeheartedly recommend him as an exceptional professional.`,
    name: "Miliyon Ayalew",
    designation: "Frontend Developer",
    company: "10 Academy",
    image: miliyon,
  },
  {
    testimonial:
      `Belay was my coding partner during the Microverse Program, and his skills and knowledge were unparalleled. Along with that, he brought energy and dependability that made him crucial to our project.
      He showed broad knowledge in Jest and save our team time, by finding the simplest solution, he was never late for a meeting, and he was always ready to solve any issue that will come our way, I wish him the best in all he does and I know that any position he wishes to undertake he will doubtlessly be a star in it.`,
    name: "Glenda Diaz",
    designation: "Full Stack Developer",
    company: "Microverse",
    image: glenda,
  },
  {
    testimonial:
      "Having the opportunity to work together on coding projects with Belay has been a great experience. Belay's positive attitude makes work more enjoyable. Any company would be lucky to have him as a team member.",
    name: "Giovanni Juliao",
    designation: "Product Manager, Full Stack Developer",
    company: "Microverse",
    image: giovani,
  },
  {
    testimonial:
      `Belay is exactly the sort of developer any company would love. He has brilliant communication skills. 
        I worked alongside him while building 2 different projects and he was always positive and open to learning from others. He was great at remote teamwork, and pair programming and has a keen eye for design. He is also super friendly and respectful so when we worked together, I felt like we'd known each other for years. I can't recommend him enough!`,
    name: "Iqbal Elham",
    designation: "Full Stack Developer",
    company: "Microverse",
    image: iqbal,
  },
  {
    testimonial:
      `It is my pleasure to recommend Mr. Belay Birhanu who worked with me at microverse as a full-stack developer. He is a very determined, well-qualified and intelligent individual. He is passionate about writing codes and solving different problems through the development of creative and innovative software. 
       He is also a delight to work with a team player with a positive attitude and interpersonal relationship all the way. I wouldn’t hesitate to work with him again if the opportunity arose.`,
    name: "Birhanu Gudisa",
    designation: "Full Stack Developer",
    company: "Microverse",
    image: birhanu,
  },
  {
    testimonial:
      `It was a wonderful experience to collaborate with Belay Birhanu on various projects at the Microverse program. He is a highly competent developer who uses effective problem-solving techniques. I would like to express my appreciation for his coding expertise, time management skills, and professionalism. I firmly believe he would be a valuable member of any team undertaking. If the chance arose, I wouldn't think twice about working with him again`,
    name: "Abdul Ahad Bhatti",
    designation: "Frontend Engineer",
    company: "Atsol Inc.",
    image: ahad,
  },
];

export type ProjectTag = {
  name: string;
  color: string;
};

export type Project = {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Space Travelers' Hub",
    description:
      "Users can reserve rockets, sign up for space missions, and modify or cancel their bookings through this website. They can also track their mission participation and reservations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/belaymit/space-x-react-redux",
    link: "https://space-traveler-app-react-redux.onrender.com/"
  },
  {
    name: "Book Store CMS",
    description:
      "Users can add or remove books and view the details of the books available in this web application. They can also manage their book collection efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/belaymit/bookstore-react-redux",
    link: "https://bookstore-react-redux.onrender.com/"
  },
  {
    name: "Movie App",
    description:
      "The app enables users to browse a list of movies, like and comment on their favorites, and make reservations. They can also manage and view their movie reservations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/belaymit/Capstone-module-2",
    link: "https://belaymit.github.io/Capstone-module-2/dist/"
  },
  {
    name: "Awesome Books",
    description:
      "The web app allows users to add books with details, view a list of all books, and delete entries. It also lets users manage and organize their book collection.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: awesome_books,
    source_code_link: "https://github.com/belaymit/Awesome-books--ES6",
    link: "https://belaymit.github.io/Awesome-books--ES6/"
  },
];

