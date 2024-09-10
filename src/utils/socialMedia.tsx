import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export type socialLink = {
  name: string;
  link: string;
  icon: JSX.Element;  
};

export const socialLinks: socialLink[] = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/belay-bgwa/",
    icon: <FaLinkedinIn />, 
  },
  {
    name: "github",
    link: "https://github.com/belaymit",
    icon: <FaGithub />,
  }

];