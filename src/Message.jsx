import { useState, useEffect } from "react";

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
    let timer;
    if (close) {
      timer = setTimeout(() => {
        setClose(false); // Hides the component properly
      }, 500); // Match fadeOut animation
    }
    return () => clearTimeout(timer);
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
