import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeMessage } from "../../store/messages/actions";
import Message from "../Message/Message";

const Chat = () => {
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const handleClick = (removeId) => {
    dispatch(removeMessage(removeId));
  };

  return (
    <section className="chat-section">
      <div className="chat-container" onClick={handleClick}>
        {messages.map((message) => (
          <Message
            key={message.unique_id}
            id={message.unique_id}
            message={message.value}
            click={handleClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Chat;
