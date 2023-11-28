import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // meta,
    // starbucks,
    // tesla,
    upright,
    uscri,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    freelancer,
  } from "../assets";
  
  export const navLinks = [
    {
      id:"",
      title:"Home"
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Freelancer Ltd",
      icon: freelancer,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Upright Education",
      icon: upright,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - May 2023",
      points: [
        "Apprenticeship",
        "Completed over 200 hours of classroom instruction covering the fundamentals of programming, web design with HTML and CSS, construction of web applications with vanilla JavaScript.",
        "Component driven front-end development using the React libraries.",
        "Back-end server development using Express, and persistence using MongoDB and Mongoose.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2023 - Oct 2023",
      points: [
        "Manages full website development from conception to deployment.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Develops full stack websites utilizing a variety of programming languages, including but not limited to JavaScript, HTML, CSS, Next.js, MongoDB, SQL, Node.js and React. ",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Linguist",
      company_name: "U.S. Committee for Refugees and Immigrants (USCRI)",
      icon: uscri,
      iconBg: "#E6DEDD",
      date: "April 2021 - Present",
      points: [
        "Served as communication liaison between staff and clients.",
        "Performed accurate, impartial, and confidential interpretation for USCRI individuals and service providers in a variety of settings, such as clinics, hospitals, schools, community-based organizations, and government agencies.",
        "Services rendered in-person, via telephone, videoconference, and other virtual means.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Haseeb proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Haseeb does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Haseeb optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Espressonist App",
      description:
        "Espressonist app is a useful tool for coffee lovers who want to create, manage, and find coffee recipes.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Haseeb-Moheb/Espressonist-Capstone-Project.git",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
