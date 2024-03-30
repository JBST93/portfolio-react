export default function Skills(props) {
  return (
    <div className="flex flex-col item-center justify-center border-2 border-slate-500 border-solid bg-zinc-700  w-32">
      <img
        className="object-contain max-w-full max-h-full"
        src={props.image}
        alt={props.name}
      />
      <div className="flex-grow"></div>
      <p className="justify-end">{props.name}</p>
    </div>
  );
}
