import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiPolywork } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const socials = [
  {
    alt: "github",
    img: <BsGithub className="text-2xl md:text-3xl" />,
    link: "https://github.com/j1mmyzz",
  },
  {
    alt: "insta",
    img: <BsInstagram className="text-2xl md:text-3xl" />,
    link: "https://www.instagram.com/j1mmy_zz/",
  },
  {
    alt: "linkedin",
    img: <BsLinkedin className="text-2xl md:text-3xl" />,
    link: "https://www.linkedin.com/in/jimmyzz/",
  },
];

export const Social = () => {
  return (
    <div className="flex flex-row items-center justify-start px-6">
      {socials.map((icon, i) => (
        <div
          key={i}
          className="mr-6 duration-200 cursor-pointer text-white hover:text-gray-400"
        >
          <a href={icon.link} target="_blank" rel="noreferrer">
            {icon.img}
          </a>
        </div>
      ))}
    </div>
  );
};
