import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button>on/off</button>
      <p>{num}</p>
      <p>^ ^</p>
    </>
  );
};

export default App;
