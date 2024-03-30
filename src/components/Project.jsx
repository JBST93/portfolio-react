export default function Project(props) {
  return (
    <div className="border-solid border-2 border-slate-500 p-2 my-5">
      <div className="flex items-center justify-center">
        <img src="https://uk.tinderpressroom.com/image/Product+Image.png" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h1>What To Do</h1>
        <h2 className="bg-teal-900 text-teal-300 rounded-l-lg px-3">
          March 2024
        </h2>
      </div>
      <p className="text-left pb-5">
        Tinder like application designed to simplify the process of finding and
        planning activities tailored to user preferences
      </p>
      <div>
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
