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
      name: 'Tailwind',
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
  ];

  return (
    <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8">
      {skills.map((skill) => {
        return (
          <div
            key={skill.image}
            className="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8"
          >
            <div className="flex flex-col item-center justify-center border-2 border-slate-500 border-solid bg-zinc-700  overflow-hidden w-32">
              <img
                className="object-contain max-w-full max-h-full"
                src={skill.image}
                alt={skill.name}
              />
              <div className="flex-grow"></div>
              <p className="justify-end">{skill.name}</p>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}
