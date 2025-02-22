import { useState } from "react";
import "./App.css";

function Message({
  title = "Hello",
  message = "Hi👋, I am from React Messenger",
  className = "",
  titleColor = "",
  messageColor = "",
  customStyles = {},
}) {
  const [close, setClose] = useState(false);

  useEffect(() => {
    if (close) {
      setTimeout(() => {
        document.querySelector(".frame").style.display = "none";
      }, 500); // Match the fadeOutSlide animation time
    }
  }, [close]);

  return (
    <div
      className={`frame ${className} ${close ? "hide" : ""}`}
      style={customStyles}
    >
      <div className="header">
        <h1 className="title" style={{ color: titleColor }}>
          {title}
        </h1>
        <button className="exitbutton" onClick={() => setClose(true)}>
          <span className="cancel"></span>
        </button>
      </div>
      <p className="message" style={{ color: messageColor }}>
        {message}
      </p>
    </div>
  );
}

export default Message;
