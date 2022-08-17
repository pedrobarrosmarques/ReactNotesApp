import React, { useState } from "react";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export default function Header() {
  setInterval(handleTime, 1000);

  const timeNow = new Date().toLocaleTimeString();
  const [time, setTime] = useState(timeNow);

  function handleTime() {
    const timeAfter = new Date().toLocaleTimeString();
    setTime(timeAfter);
  }
  return (
    <header className="header">
      <div>
        <h1>
          <TextSnippetIcon />
          Notes App
        </h1>
        <h2>{time}</h2>
      </div>
    </header>
  );
}
