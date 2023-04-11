import axios from "axios";
import { FiTrash2 } from "react-icons/fi";

const TodoCard = ({ isDone, title, index, getToDoList }) => {
  const onClickDone = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/todo/done/${index}`
      );

      if (response.status !== 200) {
        alert("데이터를 불러오지 못했습니다.");
        return;
      }

      getToDoList();
    } catch (error) {
      console.error(error);
    }
  };

  const onClickDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${index}`
      );

      if (response.status !== 200) {
        alert("데이터를 불러오지 못했습니다.");
        return;
      }

      getToDoList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex my-4">
        {isDone ? (
          <button className="relative" onClick={onClickDone}>
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl bg-pink-400 p-2"></div>
            <div className="absolute border-4 border-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 scale-75 rounded-xl bg-pink-400 p-2"></div>
          </button>
        ) : (
          <button
            className="border-4 border-pink-400 w-8 h-8 rounded-xl"
            onClick={onClickDone}
          ></button>
        )}
        <div className="text-2xl ml-4">{title}</div>
        <button className="ml-4 hover:text-pink-400" onClick={onClickDelete}>
          <FiTrash2 size={24} />
        </button>
      </div>
    </>
  );
};

export default TodoCard;
