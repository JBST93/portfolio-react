export default function Button(props) {
  const socials = [
    {
      name: 'LinkedIn',
      logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg',
      href: 'https://www.linkedin.com/in/bastinjacek/',
    },
    {
      name: 'Github',
      logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-2.svg',
    },
    {
      name: 'Twitter',
      logo: 'https://cdn.worldvectorlogo.com/logos/twitter-3.svg',
    },
  ];

  return (
    <div>
      <button>
        <a
          href={props.href}
          target="_blank"
        >
          <span className="flex">
            <img
              src={props.logo}
              className="w-5"
            />
            {props.name}
          </span>
        </a>
      </button>
    </div>
  );
}
