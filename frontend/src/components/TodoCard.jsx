import { useState } from "react";

const TodoCard = ({ isDone, title }) => {
  const [isDoneToggle, setIsDoneToggle] = useState(isDone);

  const onClickToggle = () => {
    setIsDoneToggle(!isDoneToggle);
  };

  return (
    <>
      <div className="flex my-4">
        {isDoneToggle ? (
          <button className="relative" onClick={onClickToggle}>
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl bg-pink-400 p-2"></div>
            <div className="absolute border-4 border-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 scale-75 rounded-xl bg-pink-400 p-2"></div>
          </button>
        ) : (
          <button
            className="border-4 border-pink-400 w-8 h-8 rounded-xl"
            onClick={onClickToggle}
          ></button>
        )}
        <div className="text-2xl ml-4">{title}</div>
      </div>
    </>
  );
};

export default TodoCard;
