export default function Button({ children, onClick, bg, rounded }) {
  return (
    <button
      type="button"
      onClick={onClick || ""} 
      className={` ${bg} text-white font-normal border border-orange-500 px-12 py-2 text-[18px] lg:text-[20px] ${rounded}`}
    >
      {children}
    </button>
  );
}
