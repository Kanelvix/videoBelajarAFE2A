import eyeIcon from '../../assets/eye-off.svg'

const Input = (props) => {
  return (
    <div className='relative'>
      <input 
        className={`
          h-12 p-3 rounded-lg outline-none border-[--border-color] w-full placeholder:text-[--base-color]
          ${props.type === "search" ? "border" : "border-2"}
          ${props.type === "password" && "pr-12"}
          ${props.type === "search" && "placeholder:font-medium pr-12"}
        `}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => props.setInput(e.target.value)}
      />
      {props.type === "password" && <img src={eyeIcon} alt="eye-off" className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer hover:opacity-80 duration-100' />}
    </div>
  );
};

export default Input;
