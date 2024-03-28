export default function Button(props) {
  return (
    <div>
      <button>
        <span className="flex">
          <img
            src={props.logo}
            className="w-5"
          />
          {props.name}
        </span>
      </button>
    </div>
  );
}
