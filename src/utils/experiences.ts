interface Experiences {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  points: string[];
  logo: string;
}
export const experiences: Experiences[] = [
  {
    company: "Coveo",
    position: "Software Developer",
    startDate: "May 2023",
    endDate: "August 2023",
    location: "Montreal, QC",
    points: [
      "Worked with major clients to improve search relevance and user experience by developing tailored enterprise search solutions, for example LG and Metro.",
      "Implemented a deployment pipeline for internal tools that speed up deployment by 90%.",
      "Worked across multiple projects, concurrently, dealing with different technologies while maintaining internal tools.",
    ],
    logo: "coveo_logo.jpg",
  },
  {
    company: "Flybits",
    position: "Frontend Developer",
    startDate: "May 2022",
    endDate: "December 2022",
    location: "Toronto, ON",
    points: [
      "Maintained and modernized 4+ TypeScript React projects by refactoring and developing new components.",
      "Improved the internal design module by building components from scratch while ensuring backwards compatibility.",
      "Collaborated with backend engineers to ensure an effortless implementation of API calls.",
      "Communicated with UX/UI team to achieve the intended design, with focus on responsiveness.",
    ],
    logo: "flybits_logo.jpg",
  },
  {
    company: "GetQuorum",
    position: "Junior Developer",
    startDate: "January 2022",
    endDate: "April 2022",
    location: "Toronto, ON",
    points: [
      "Developed a full stack application using Vue, Vuex, Node, Express, Postgres SQL, and Docker.",
      "Worked on REST API endpoints to provide new features to the users’ workflow.",
      "Operated within an agile environment and regularly performed demos to keep the team updated.",
    ],
    logo: "getquorum_logo.jpg",
  },
  {
    company: "Interac Corporation",
    position: "Software Developer",
    startDate: "September 2021",
    endDate: "December 2021",
    location: "Toronto, ON",
    points: [
      "Implemented onboarding services using Nest.js, Node.js and React.js.",
      "Migrated a database from Oracle OCI to Microsoft SQL.",
      "Documented Java API endpoints using OpenAPI.",
      "Gained an understanding how to develop a large project with security and scalability as a priority.",
    ],
    logo: "interac_corp_logo.jpg",
  },
];
