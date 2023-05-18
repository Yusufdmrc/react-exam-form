const Button = (props) => {
  return (
    <button
      className={`p-2 text-lg bg-cyan-700 rounded-xl text-white ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
