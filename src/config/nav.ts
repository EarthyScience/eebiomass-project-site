// main navigation
export const navigation = [
    { 
      text: 'DE:Project Office',
      isHome: true,
      name: 'EEBIOMASS',
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
        { text: 'Publications', link: '/project/publications',
          description: "Access our latest research papers, reports, and articles.",
         },
      ]
    },
     {   text: 'DE:CalVal', link: '/decalval/' ,
        items: [
          { text: 'About', link: '/decalval/about',
            description: "Learn more about the project, its goals, and its impact.",
          },
         { text: 'Team', link: '/decalval/team',
            description: "Meet the team behind the project, their roles, and contributions.",
             },
         // { text: 'Guides', link: '/resources/guides',
         //   description: "Explore our comprehensive guides on various topics related to the project.",
         // },
         ] },
    {   text: 'BIOMASS Mission', link: '/biomass' ,
        items: [
          { text: 'About', link: '/biomass/about',
            description: "Learn more about Earth Explorer BIOMASS.",
          },
          { text: 'Earth Explorers', link: '/biomass/earthexplorer',
            description: "Find out more about ESA Earth Explorers and International missions.",
          },
         // { text: 'Guides', link: '/resources/guides',
         //   description: "Explore our comprehensive guides on various topics related to the project.",
         // },
         ] },

             {   text: 'Events', link: '/events' ,
        items: [
          { text: 'Webinar Series', link: '/events/webinar',
            description: "Access our latest research papers, reports, and articles.",
          },
          { text: 'Summer Schools', link: '/events/summerschool',
            description: "Access our latest research papers, reports, and articles.",
          },
          { text: 'PolInSAR course', link: '/events/polinsar',
            description: "Access our latest research papers, reports, and articles.",
          },
         // { text: 'Guides', link: '/resources/guides',
         //   description: "Explore our comprehensive guides on various topics related to the project.",
         // },
         ] },
  
    { text: 'News', link: '/blog' },

    {
        text: 'Resources',
        items: [
          { text: 'Further Reading', link: '/resources/publications',
            description: "Access latest research papers, reports, and articles.",
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