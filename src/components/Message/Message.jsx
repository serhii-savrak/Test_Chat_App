import "./Message.css";

const Message = ({ id, message, click }) => {
  const handleRemove = () => {
    click(id);
  };

  const date = new Date();
  const currHour = date.getHours();
  const currMin = date.getMinutes();
  let currTime = `${currHour}:${currMin}`;

  if (currHour < 10) {
    currTime = `0${currHour}:${currMin}`;
  } else if (currMin < 10) {
    currTime = `${currHour}:0${currMin}`;
  } else if (currHour < 10 && currMin < 10) {
    currTime = `0${currHour}:0${currMin}`;
  }

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
