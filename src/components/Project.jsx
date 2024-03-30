export default function Project(props) {
  return (
    <div className="border-solid border-2 border-slate-500 my-5 relative">
      <div className="flex items-center justify-center">
        <img
          className="content-contain p-0 m-0"
          src="https://uk.tinderpressroom.com/image/Product+Image.png"
        />
      </div>
      <div className="flex flex-row justify-between items-center pt-2 pl-2">
        <h1 className="text-xl font-bold">What To Do</h1>
        <h2 className="bg-teal-900 text-teal-300 rounded-l-lg px-3">
          March 2024
        </h2>
      </div>
      <p className="text-left py-5 px-2">
        Tinder like application designed to simplify the process of finding and
        planning activities tailored to user preferences
      </p>
      <div className="absolute top-2 left-2">
        <ul className="flex flex-row gap-4 items-center">
          <li className="bg-teal-900 text-teal-300 px-2 rounded-lg">
            Ruby on Rails
          </li>
          <li className="bg-teal-900 text-teal-300 px-2 rounded-lg">
            Stimulus
          </li>
          <li className="bg-teal-900 text-teal-300 px-2 rounded-lg">
            PostgreSQL
          </li>
        </ul>
      </div>
      <div className="pt-3 flex flex-row justify-center gap-5">
        <button>
          <a
            href="#"
            target="_blank"
          >
            Github
          </a>
        </button>
        <button>
          <a
            href="#"
            target="_blank"
          >
            Website
          </a>
        </button>
      </div>
    </div>
  );
}
