// main navigation
export const navigation = [
    { 
      text: 'Project',
      isHome: true,
      name: 'Project Office BIOMASS',
      description: "Start your new project site with a clean and modern design.",
      items: [
        { text: 'About', link: '/project/about',
          description: "Learn more about the project, its goals, and its impact.",
         },
        { text: 'Team', link: '/project/team',
          description: "Meet the team behind the project, their roles, and contributions.",
         },
        { text: 'Work packages', link: '/project/wps',
          description: "Discover our partners and collaborators who support the project.",
         },
        { text: 'Get Involved', link: '/project/publications',
          description: "Find out how you can contribute to the project and make a difference.",
         },
      ]
    },
    {   text: 'BIOMASS Mission', link: '/biomass' ,
        items: [
          { text: 'Earth Explorers', link: '/biomass/earthexplorer',
            description: "Access our latest research papers, reports, and articles.",
          },
         // { text: 'Guides', link: '/resources/guides',
         //   description: "Explore our comprehensive guides on various topics related to the project.",
         // },
         ] },
   { text: 'Events', link: '/events' },
    { text: 'News', link: '/blog' },

    {
        text: 'Resources',
        items: [
          { text: 'Related Publications', link: '/resources/publications',
            description: "Access our latest research papers, reports, and articles.",
          },
          { text: 'Related Missions and Projects', link: '/resources/relatedmissions',
            description: "Explore our comprehensive guides on various topics related to the project.",
          },
          { text: 'Teaching & Data & Tools', link: '/resources/tools-data',
            description: "Utilize our tools and datasets to support your work and research.",
           },
        
        ]
      },

    { text: 'Contact', link: '/contact' },
  ];
  
// footer links
 export const navFooter = [
    { text: 'Imprint', link: '/terms/imprint' },
    { text: 'Privacy Policy', link: '/terms/privacy' },
  ]