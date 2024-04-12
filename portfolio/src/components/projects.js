const projects = [
    {
        id: 1,
        title: 'Reviving Henri Rousseau',
        description: 'Building an interface to speak with the late Henri Rousseau, as part of an exhibition',
        imageUrl: `${process.env.PUBLIC_URL}/img/douanier.png`,
        projectLink: '/seuls-sous-les-pins'
    },
    {
        id: 2,
        title: 'AI safety talks',
        description: 'Conferences on safety issues related to large language models at Ecole 42 and Bordeaux University',
        imageUrl: `${process.env.PUBLIC_URL}/img/effisciences.png`,
        projectLink: '/ai-talks'
    },
    {
        id: 3,
        title: 'AutoSHARE',
        description: 'Automating the cleaning, analysis and modelling of the SHARE data',
        imageUrl: `${process.env.PUBLIC_URL}/img/cieri-analytics.png`,
        projectLink: '/cieri'
    },
    {
        id: 4,
        title: 'Statistical Journey',
        description: 'A website to learn about statistics with non-technical and narrative style',
        imageUrl: `${process.env.PUBLIC_URL}/img/statisticaljourney.png`,
        projectLink: '/statistical-journey'
    },
    {
        id: 5,
        title: 'Data Visualization',
        description: 'Creating visualizations for data analysis and storytelling',
        imageUrl: `${process.env.PUBLIC_URL}/img/datavizs2.png`,
        projectLink: '/visualization'
    }
];

export default projects;