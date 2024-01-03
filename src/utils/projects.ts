export interface Project {
  name: string;
  languages: string[];
  points: string[];
  photos: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    name: "TMU Prep",
    languages: ["React", "ChakraUI", "CSS", "Golang", "Gin", "MongoDB"],
    points: [
      "Collaborated with a group of 12 in an agile environment to build a web application that empowers CS students to visualize and organize their classes and check their graduation status.",
      "The project uses React for the front end and Golang with the Gin framework to handle the backend communications with Mongo.DB collections.",
      "Developed endpoints to ensure students can graduate with enrolled courses while helping the front end implement a responsive design that can reflect the backend functionalities.",
    ],
    photos: ["prep.jpg", "tmu_prep.png", "tmu_prep_1.png", "tmu_prep_logo.png"],
    link: "https://github.com/maryam-elbeshbishy/TMUPrep",
  },
  {
    name: "Customer Service Application",
    languages: ["React", "NodeJS", "ExpressJS", "MongoDB"],
    points: [
      "Created the backend for a mock e-commerce web application that enables customers to purchase items and get all the necessary information about their orders.",
      "The NodeJS and ExpressJS backend communicates with the MongoDB collections to schedule drivers and calculate distances to customer addresses.",
      "Implemented secure password handling for customer accounts.",
    ],
    photos: ["csa.png"],
    link: "https://github.com/igorpenedos/customer-service-application",
  },
  {
    name: "File Share",
    languages: ["React", "Express.JS", "Socket.IO"],
    points: [],
    photos: ["share.jpg", "file_share.png"],
    link: "https://github.com/igorpenedos/file-share",
  },
  {
    name: "Password Manager",
    languages: ["Python", "SQLite3"],
    points: [],
    photos: ["password_manager.png"],
    link: "https://github.com/igorpenedos/password-manager",
  },
];
