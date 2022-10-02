const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type}
      onClick={props.onClick}
    ></button>
  );
};

export default Button;
