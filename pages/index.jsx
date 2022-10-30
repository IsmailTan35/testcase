import { useState } from "react";
import Main from "../components/main";
import Intro from "../components/intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleClick = () => {
    setShowIntro(false);
  };

  return <>{showIntro ? <Intro btnClick={handleClick} /> : <Main />}</>;
}
