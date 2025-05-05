/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import HCLlogo from "./assets/images/HCL-logo.jpg"; // Add your logo here

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aashish Ravidas",
  title: "Hi all, I'm Aashish",
  subTitle: emoji(
   "A passionate Full Stack Developer 🚀 with hands-on experience in building scalable Web and IoT-integrated applications using JavaScript, React.js, Node.js, Express.js, MongoDB, and AWS. Proficient in creating REST APIs, working with MES/ERP systems, and delivering robust backend solutions for real-time industrial environments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Aashish251",
  linkedin: "https://www.linkedin.com/in/aashish-ravidas-015447191/",
  gmail: "ashishravidas25@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/aashish.ravidas",
  medium: "https://medium.com/@ashishravidas25",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES BUILDING SCALABLE APPS",
  skills: [
    "⚡ Develop highly interactive Frontend/Backend for web applications",
    "⚡ Building REST APIs using Node.js and Express.js",
    "⚡ Integration with MongoDB, SQL, and AWS",
    "⚡ Strong command in Data Structures & Algorithms",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "C++",
    fontAwesomeClassname: "fas fa-code" // No specific C++ icon, using generic code icon
  },
  {
    skillName: "C",
    fontAwesomeClassname: "fas fa-code" // No specific C icon, using generic code icon
  },
  {
    skillName: "C#",
    fontAwesomeClassname: "fab fa-microsoft" // C# is a Microsoft language
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React.js",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "Express.js",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "Postman",
    fontAwesomeClassname: "fas fa-envelope-open-text"
  },
  {
    skillName: "Prisma",
    fontAwesomeClassname: "fas fa-database" // ORM tool, using database icon
  },
  {
    skillName: "Kafka",
    fontAwesomeClassname: "fas fa-stream" // Streaming platform
  },
  {
    skillName: "PostgreSQL",
    fontAwesomeClassname: "fas fa-database" // Alternative: "fab fa-postgresql" if you have this icon
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Malaviya National Institute of Technology, Jaipur (MNIT)",
      logo: require("./assets/images/Mnit_logo.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering (ECE)",
      duration: "August 2019 - May 2023",
      desc: "Participated in research and authored one IEEE paper.",
      descBullets: [
        "Paper published in 14th IEEE ICCCNT 2023 on multi-objective image segmentation",
        "Secured top 150 ranks in national-level coding competitions",
        "Solved 400+ DSA problems on LeetCode, GFG, and InterviewBit"
      ]
    },
    {
      schoolName: "S.V.P. College, Mumbai",
      subHeader: "Higher Secondary Certificate (HSC) - Science Stream",
      logo: require("./assets/images/LogoBord.png"),
      duration: "Completed May 2018",
      desc: "Studied Physics, Chemistry, and Mathematics with strong focus on competitive exam preparation.",
      descBullets: [
        "Secured distinction in all major subjects",
        "Participated in inter-school science quiz competitions"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "HCLtech",
      companyLogo: HCLlogo, 
      date: "October 2023 - Present",
      desc: "Worked as a full-stack MES engineer in smart manufacturing solutions, contributing to efficient production automation.",
      descBullets: [
        "Designed and implemented RESTful APIs to securely and efficiently exchange data between manufacturingsystems (MES), enterprise resource planning (ERP) systems, and IoT devices, enabling real-time productionmonitoring.",
        "Improved backend performance by refactoring outdated code and introducing caching mechanisms, reducingAPI response times by 80%.",
        "Developed a Data Exchange Engine (DEE) to facilitate seamless and secure data transfer between manufacturing systems and external platforms, ensuring real-time integration with Industry 4.0 technologies.",
        "Built and deployed IoT-driven solutions using UAEexpert, Ignition, and MQTT, enabling real-time data collection, processing, and device communication for smarter manufacturing operations.",
        "Enhanced manufacturing efficiency by automating data flow within production systems, improving operational visibility and reducing manual intervention.",
        "Integrated ERP systems with manufacturing operations to synchronize data across multiple platforms, improving process automation and consistency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "https://github.com/Aashish251", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some Projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Research Publication at ICCCNT 2023",
      subtitle:
        "Co-authored and presented a research paper titled 'Multi-objective Image Segmentation using SMS-EMOA for Side Scan Sonar Data Analysis' at the 14th International Conference on Computing Communication and Networking Technologies.",
      image: require("./assets/images/10029837_3.png"),
      imageAlt: "Publication Logo",
      footerLink: [
        {
          name: "Paper Link",
          url: "https://ieeexplore.ieee.org/document/10308177" // Replace with your actual IEEE/DOI link
        }
      ]
    },
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/BEC.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/u/0/folders/1gFOz2DHHYGtNAdbwFrB9dvaSl6C4dFvx"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

/*
const podcastSection = {
  title: "Podcast",
  subtitle: "I LOVE TO TALK ABOUT TECH",
  episodes: [ ... ]
};
*/


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 77150 77104",
  email_address: "ashishravidas25@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
