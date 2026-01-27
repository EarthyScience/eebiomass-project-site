// main navigation
export const navigation = [
    { 
      text: 'DE:Project Office',
      link: "/project",
      featured: {
        logo: '/Logo3.png',
        name: 'German Project Office BIOMASS',
        description: "",
      },
      items: [
        { text: 'About', link: '/project/about',
          description: "Learn more about the project, its goals, and its impact.",
         },
        { text: 'Team', link: '/project/team',
          description: "Meet the team behind the project, their roles, and contributions.",
         },
        { text: 'Work packages', link: '/project/wps',
          description: "Explore the project’s core work packages, objectives, and scientific approach.",
         },
        { text: 'Publications', link: '/project/publications',
          description: "Access our latest research papers, reports, and articles.",
         },
      ]
    },
     { text: 'DE:CalVal', 
       link: '/decalval/' ,
       featured: {
        logo: '/decalval_logo_small.png',
        name: 'German Contribution to the BIOMASS Cal/Val Activities',
      },
        items: [
          { text: 'About', link: '/decalval/about',
            description: "Learn more about the project, its goals, and its impact.",
          },
         { text: 'Team', link: '/decalval/team',
            description: "Meet the team behind the project, their roles, and contributions.",
             },
        { text: 'Work packages', link: '/decalval/wps',
          description: "Learn more about the key activities, methods, and contributions that drive the project forward.",
         },
      //  { text: 'Publications', link: '/project/publications',
      //    description: "Access our latest research papers, reports, and articles.",
      //   },
         ] },

    {   text: 'BIOMASS Mission', link: '/biomass' ,
        items: [
          { text: 'About', link: '/biomass/about',
            description: "Learn more about Earth Explorer BIOMASS.",
          },
          { text: 'Earth Explorers', link: '/biomass/earthexplorer',
            description: "Find out more about ESA Earth Explorers and International missions.",
          },
          { text: 'DISC & Data', link: '/biomass/disc&data',
            description: "Learn about the Data Innovation and Science Cluster and open access data products.",
          },
         // { text: 'Guides', link: '/resources/guides',
         //   description: "Explore our comprehensive guides on various topics related to the project.",
         // },
         ] },

    { text: 'News', link: '/blog' },

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
  


    {
        text: 'Resources',
        items: [
          { text: 'Further Reading', link: '/resources/publications',
            description: "Access latest research papers, reports, and articles.",
          },
          { text: 'Related Missions and Projects', link: '/resources/relatedmissions',
            description: "Find out about missions and projects related to biomass.",
          },
          { text: 'Teaching & Data & Tools', link: '/resources/tools-data',
            description: "Utilize our tools and datasets to support your work and research.",
           },
          { text: 'Newsletter', link: '/resources/newsletter',
            description: "Subscribe to our eebiomass newsletter.",
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