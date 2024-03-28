export default function Skills(props) {
  return (
    <div className="skill-item">
      <p>{props.name}</p>
      <img
        className="skill-image"
        src={props.image}
      />
    </div>
  );
}
