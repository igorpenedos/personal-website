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
    logo: "https://media.licdn.com/dms/image/C4D0BAQE18zr9PmoTiQ/company-logo_200_200/0/1630467656068/coveo_logo?e=1712793600&v=beta&t=RnzNmuu7lxEttL39flIgs-EWnjI098FXma7cGY-ny_I",
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
    logo: "https://media.licdn.com/dms/image/D560BAQF2dSCFlGK_JA/company-logo_200_200/0/1688485061982/flybits_logo?e=1712793600&v=beta&t=_mK7ybzWuBWXMdoQshQK6FdEN5_aQd9gGHvn7Bdv5dY",
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
    logo: "https://media.licdn.com/dms/image/D4D0BAQFDvFhiXu6jNw/company-logo_200_200/0/1689190733446/getquorum_logo?e=1712793600&v=beta&t=WveIViMWMGLpnVFqMvP8XtuV2-3ZhIB2lCN89c2ZGjo",
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
    logo: "https://media.licdn.com/dms/image/D560BAQF-kf2JClu8sw/company-logo_200_200/0/1693571882350/interac_corp_logo?e=1712793600&v=beta&t=eIMIESVTJUdyli3lNBbYdyXVPAmo-wrGUSdbSw7JvDs",
  },
];
