import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import my_photo from "./my_photo.png";
import olx from "./OLX.png";
import olx1 from "./olx1.png";
import olx2 from "./olx2.png";

import ecomm from "./E-comm.png";
import ecomm1 from "./E-comm1.png";
import ecomm2 from "./E-comm2.png";

import zentry from './zentry.png'
import zentry1 from './zentry1.png'
import zentry2 from './zentry2.png'

import UMS from './UMS.png'
import UMS1 from './UMS1.png'
import UMS2 from './UMS2.png'

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  my_photo,
};

export const workData = [
  {
    id: 0,
    title: "OLX - Clone",
    description: "Web Design ",
    bgImage: olx,
    image: [olx, olx1, olx2],
    link: "https://olx-clone-react-six.vercel.app/",
    technologies:['React','Firebase',"TypeScript",'cloudinary']

  },
  {
    id: 1,
    title: "E-commerce",
    description: "Web Design",
    bgImage: ecomm2,
    image: [ecomm2, ecomm, ecomm1],
    link: "https://first-project-alfr.onrender.com",
    githubLink: "https://github.com/MuhammedT04/First-Project",
    technologies:['JavaScript',"NodeJs","ExpressJS","Razorpay",'Mongodb',"Ejs","Multer",'Google auth']
  },
  {
    id: 2,
    title: "Zentry-Clone",
    description: "Gsap Animation",
    bgImage: zentry2,
     image: [zentry2, zentry, zentry1],
    link:'https://zentry-clone-nu-one.vercel.app/',
    githubLink:'https://github.com/MuhammedT04/zentry-clone-gsap',
    technologies:['React','Gsap']
  },
  {
    id: 3,
    title: "User Management System",
    description: "Web Design",
     bgImage: UMS,
     image: [UMS, UMS1, UMS2],
    link:'',
    githubLink:'https://github.com/MuhammedT04/UMS-MERN',
    technologies:['React','Redux','TypeScript','NodeJs','ExpressJS','Mongodb',"JWT auth"]
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "JavaScript, TypeScript, Node Js, React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Plus two in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
