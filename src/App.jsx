import React, { useEffect, useState } from "react";
import OddView from "./components/OddView";
import EvenView from "./components/EvenView";

const App = () => {
  document.title = "Mini app";
  const [chatId, setChatId] = useState(null);

  useEffect(() => {
    // Serverdan chat ID ni olish
    fetch("http://localhost:5000/getChatId")
      .then((res) => res.json())
      .then((data) => setChatId(data.chatId))
      .catch((err) => console.error("Error fetching chatId:", err));
  }, []);

  if (chatId === null) {
    return <h1>Loading...</h1>;
  }

  const isEven = chatId % 2 === 0;

  return (
    <div>
      <header>
        <h1>Telegram Mini-App</h1>
        <p>Chat ID: {chatId}</p>
      </header>
      {isEven ? <EvenView /> : <OddView />}
    </div>
  );
};

export default App;
