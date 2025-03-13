import { useDispatch } from "react-redux";
import { setShowModal } from "../features/todo/TodoSlice";

export default function Overlay() {
  const dispatch = useDispatch();
  const handleOutsideClick = (e) => {
    if (e.target.id === "overlay") {
      dispatch(setShowModal(false));
    }
  };

  return (
    <div
      className="overlay bg-black/50 inset-0 fixed backdrop-blur-sm z-10"
      id="overlay"
      onClick={handleOutsideClick}
    ></div>
  );
}
