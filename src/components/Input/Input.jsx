import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/messages/actions";
import { v4 as uuid } from "uuid";
import "./Input.css";
import SendIcon from "../SendIcon";

const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const unique_id = uuid();

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      dispatch(
        addMessage({
          value,
          unique_id,
        })
      );
    }

    setValue("");
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="chat-input">
        <input
          className="input"
          type="text"
          placeholder="Enter your message"
          value={value}
          onChange={onChangeHandler}
        />

        <button className="chat-iput__btn" onSubmit={onSubmitHandler}>
          <SendIcon />
        </button>
      </form>
    </>
  );
};

export default Input;
