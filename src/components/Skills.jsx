export default function Skills() {
  const skills = [
    {
      name: 'Ruby',
      image:
        'https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png',
    },
    {
      name: 'JavaScript',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    },
    {
      name: 'Tailwind CSS',
      image: 'https://www.loopple.com/img/tailwind-logo.png',
    },
    {
      name: 'CSS',
      image:
        'https://e7.pngegg.com/pngimages/604/592/png-clipart-css3-cascading-style-sheets-logo-html-beautify-blue-angle-thumbnail.png',
    },
    {
      name: 'HTML',
      image:
        'https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp',
    },
    {
      name: 'React',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    },
    {
      name: 'PostgreSQL',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    },
    {
      name: 'SQL',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
    },
    {
      name: 'Node JS',
      image:
        'https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png',
    },
    {
      name: 'Bootstrap',
      image:
        'https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-svg-vector.svg',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
      {skills.map((skill) => {
        return (
          <div
            key={skill.image}
            className="w-full"
          >
            <div className="flex flex-row items-center border-2 dark:border-slate-700 border-solid dark:bg-zinc-800 overflow-hidden rounded-lg p-2">
              <img
                className="object-contain size-6" // Adjust image size and margin bottom
                src={skill.image}
                alt={skill.name}
              />
              <p className="text-center p-2">{skill.name}</p>{' '}
              {/* Adjust text size and alignment */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
