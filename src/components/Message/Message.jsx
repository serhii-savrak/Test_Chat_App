import "./Message.css";

const Message = ({ id, message, click }) => {
  const handleRemove = () => {
    click(id);
  };

  const date = new Date();
  const currHour = date.getHours();
  const currMin = date.getMinutes();
  const currTime = `${currHour}:${currMin}`;

  return (
    <>
      <div className="message-container" onClick={handleRemove}>
        <p className="message">{message}</p>
        <span className="message-time">{currTime}</span>
      </div>
    </>
  );
};

export default Message;
